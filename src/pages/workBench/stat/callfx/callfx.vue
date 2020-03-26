<template>
  <!-- 通话分析 -->
  <view class="qiun-columns">
    <view class="filter-btn-group">
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >筛选 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view class="staff" :class="{ active: mask === 3 }" @tap="selectStaff"
        >员工 <text class="iconfont icon-arrow-right"></text
      ></view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="sort-container" v-show="mask === 2" @tap.stop="">
        <view class="time-select">
          <view class="time-select-label">
            呼入/呼出
          </view>
          <view class="time-select-list">
            <view
              class="time-select-item"
              :class="{ selected: callIndex === item.id }"
              v-for="item in callType"
              :key="item.id"
              @tap.stop="callIndex = item.id"
              >{{ item.label }}</view
            >
          </view>
        </view>
        <view class="time-select">
          <view class="time-select-label">
            通话时长
          </view>
          <view class="time-select-list">
            <view
              class="time-select-item"
              :class="{ selected: callDurationIndex === item.id }"
              v-for="item in callDuration"
              :key="item.id"
              @tap.stop="callDurationIndex = item.id"
              >{{ item.label }}</view
            >
          </view>
        </view>
        <view class="time-select">
          <view class="time-select-label">
            时间
          </view>
          <view class="time-select-list">
            <view class="picker-data-container">
              <picker
                mode="date"
                :value="startDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindStartDateChange"
              >
                <view class="uni-input">{{
                  startDateVal ? startDateVal : "开始时间"
                }}</view>
              </picker>
              <view class="">
                --
              </view>
              <picker
                mode="date"
                :value="endDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindEndDateChange"
              >
                <view class="uni-input">{{
                  endDateVal ? endDateVal : "结束时间"
                }}</view>
              </picker>
            </view>
          </view>
        </view>
        <view class="filter-bottom">
          <!-- <view style="color: #007AFF;">自定义筛选</view> -->

          <button
            type="primary"
            size="mini"
            plain="true"
            @tap.stop="filterReset"
          >
            重置
          </button>
          <button type="primary" size="mini" @tap="filterConfirm">确定</button>
        </view>
      </view>
    </view>


    <view class="four-data">
      <view class="data-item">
        <view class="data-title">接通率</view>
        <view class="data-title">38%</view>
      </view>
      <view class="data-item">
        <view class="data-title">通话时间</view>
        <view class="data-title">683 分钟</view>
      </view>
      <view class="data-item">
        <view class="data-title">拨打次数</view>
        <view class="data-title">1000</view>
      </view>
      <view class="data-item">
        <view class="data-title">平均通话时长</view>
        <view class="data-title">26.57 秒</view>
      </view>
    </view>


    <view class="qiun-charts">
      <!--#ifdef MP-ALIPAY -->
      <canvas
        canvas-id="canvasLineA"
        id="canvasLineA"
        class="charts"
        :width="cWidth * pixelRatio"
        :height="cHeight * pixelRatio"
        :style="{ width: cWidth + 'px', height: cHeight + 'px' }"
        disable-scroll="true"
        @touchstart="touchLineA"
        @touchmove="moveLineA"
        @touchend="touchEndLineA"
      ></canvas>
      <!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas
        canvas-id="canvasLineA"
        id="canvasLineA"
        class="charts"
        disable-scroll="true"
        @touchstart="touchLineA"
        @touchmove="moveLineA"
        @touchend="touchEndLineA"
      ></canvas>
      <!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
      <!--#endif-->
    </view>

    <w-picker
      mode="linkage"
      :level="3"
      @confirm="onConfirm"
      ref="linkage"
      :linkList="linkList"
      themeColor="#007aff"
    ></w-picker>
  </view>
</template>

<script>
import uCharts from "@/components/u-charts/u-charts.js";
import wPicker from "@/components/w-picker/w-picker.vue";
var _self;
var canvasObj = {};
export default {
  components: {
    wPicker
  },
  data() {
    return {
      callIndex: '',
      callType: [
        {
          id: 1,
          label: "全部"
        },
        {
          id: 2,
          label: "呼入"
        },
        {
          id: 3,
          label: "呼出"
        }
      ],
      callDurationIndex: '',
      callDuration: [
        {
          id: 1,
          label: "全部"
        },
        {
          id: 2,
          label: "1~30秒"
        },
        {
          id: 3,
          label: "31~60秒"
        },
        {
          id: 4,
          label: "60~180秒"
        },
        {
          id: 5,
          label: "180秒以上"
        }
      ],
      startDateVal: null,
      endDateVal: null,
      mask: false,
      linkList: [
        {
          label: "中心1",
          value: "10000",
          children: [
            {
              label: "部门1",
              value: "",
              children: [
                {
                  label: "员工1",
                  value: "20"
                }
              ]
            }
          ]
        },
        {
          label: "中心2",
          value: "10000",
          children: [
            {
              label: "部门2",
              value: "",
              children: [
                {
                  label: "员工2",
                  value: "20"
                }
              ]
            }
          ]
        }
      ],
      cWidth: "",
      cHeight: "",
      // cWidth2: '', //横屏图表
      // cHeight2: '', //横屏图表
      tips: "",
      pixelRatio: 1,
      serverData: ""
      // itemCount: 30, //x轴单屏数据密度
      // sliderMax: 50
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  onLoad() {
    _self = this;
    //#ifdef MP-ALIPAY
    uni.getSystemInfo({
      success: function(res) {
        if (res.pixelRatio > 1) {
          //正常这里给2就行，如果pixelRatio=3性能会降低一点
          //_self.pixelRatio =res.pixelRatio;
          _self.pixelRatio = 2;
        }
      }
    });
    //#endif
    this.cWidth = uni.upx2px(750);
    this.cHeight = uni.upx2px(500);
    // this.cWidth2 = uni.upx2px(700);
    // this.cHeight2 = uni.upx2px(1100);

    //this.fillData(Data);
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    onConfirm(e) {
      console.log(e);
    },
    filterConfirm() {},
    filterReset() {
      this.startDateVal = null
      this.endDateVal = null
      this.callIndex = '';
      this.callDurationIndex = ''
    },
    bindStartDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) > this.timeStr(this.endDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.startDateVal = e.target.value;
    },
    bindEndDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) < this.timeStr(this.startDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.endDateVal = e.target.value;
    },
    timeStr(data) {
      console.log(data);
      if (data) {
        return new Date(data.split("-").join("/")).getTime();
      }
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 10; // 时间范围限制
      } else if (type === "end") {
        year = year + 10;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    clickMask() {
      this.mask = false;
    },
    // 筛选员工
    selectStaff() {
      this.$refs.linkage.show();
    },
    handleOperation(flag) {
      console.log(this.mask);
      if (flag === 0) {
        this.mask = 0;
      } else {
        this.mask = flag;
      }
    },
    getServerData() {
      this.$minApi
        .getStatCallfx()
        .then(res => {
          // uni.hideLoading();
          console.log(res);
          _self.fillData(res);
        })
        .catch(err => {
          _self.tips = "网络错误，小程序端请检查合法域名";
        });
    },
    fillData(data) {
      this.serverData = data;
      this.tips = data.tips;
      // this.sliderMax = data.Candle.categories.length;

      let LineA = {
        categories: [],
        series: []
      };

      //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
      LineA.categories = data.LineA.categories;
      //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
      LineA.series = data.LineA.series;
      this.showLineA("canvasLineA", LineA);
    },
    changeData() {
      canvasObj["canvasLineA"].updateData({
        series: _self.serverData.LineA.series,
        categories: _self.serverData.LineA.categories
      });
    },
    showLineA(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "line",
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 26,
          margin: 5
        },
        dataLabel: false,
        dataPointShape: false,
        background: "#FFFFFF",
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: false,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: false,
          type: "grid",
          gridType: "dash",
          itemCount: 4,
          scrollShow: true,
          scrollAlign: "left"
          //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
          //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
        },
        yAxis: {
          //disabled:true
          gridType: "dash",
          splitNumber: 8,
          // min: 10,
          // max: 180,
          format: val => {
            return val.toFixed(0);
          } //如不写此方法，Y轴刻度默认保留两位小数
        },
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          lineStyle: "straight"
        }
      });
    },


    touchLineA(e) {
      canvasObj["canvasLineA"].scrollStart(e);
    },
    moveLineA(e) {
      canvasObj["canvasLineA"].scroll(e);
    },
    touchEndLineA(e) {
      canvasObj["canvasLineA"].scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvasObj["canvasLineA"].showToolTip(e, {
        format: function(item, category) {
          return category + " " + item.name + ":" + item.data;
        }
      });
    }
  }
};
</script>

<style>
.four-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10upx 30upx;
  background-color: #ffffff;
  text-align: center;
}
page {
  background: #f2f2f2;
  width: 750upx;
  overflow-x: hidden;
}

.qiun-padding {
  padding: 2%;
  width: 96%;
}

.qiun-wrap {
  display: flex;
  flex-wrap: wrap;
}

.qiun-rows {
  display: flex;
  flex-direction: row !important;
}

.qiun-columns {
  display: flex;
  flex-direction: column !important;
}

/* .qiun-common-mt {
		margin-top: 10upx;
	} */

.qiun-bg-white {
  background: #ffffff;
}

.qiun-title-bar {
  width: 96%;
  padding: 10upx 2%;
  flex-wrap: nowrap;
}

.qiun-title-dot-light {
  border-left: 10upx solid #0ea391;
  padding-left: 10upx;
  font-size: 32upx;
  color: #000000;
}

/* 通用样式 */
.qiun-charts {
  width: 750upx;
  height: 500upx;
  background-color: #ffffff;
  padding: 20upx 0;
}

.charts {
  width: 750upx;
  height: 500upx;
  background-color: #ffffff;
}

/* 横屏样式 */
.qiun-charts-rotate {
  width: 700upx;
  height: 1100upx;
  background-color: #ffffff;
  padding: 25upx;
}

.charts-rotate {
  width: 700upx;
  height: 1100upx;
  background-color: #ffffff;
}

/* 圆弧进度样式 */
.qiun-charts3 {
  width: 750upx;
  height: 250upx;
  background-color: #ffffff;
  position: relative;
}

.charts3 {
  position: absolute;
  width: 250upx;
  height: 250upx;
  background-color: #ffffff;
}

.qiun-tip {
  display: block;
  width: auto;
  overflow: hidden;
  padding: 15upx;
  height: 30upx;
  line-height: 30upx;
  margin: 10upx;
  background: #ff9933;
  font-size: 30upx;
  border-radius: 8upx;
  justify-content: center;
  text-align: center;
  border: 1px solid #dc7004;
  color: #ffffff;
}
.filter-btn-group {
  width: 100%;
  height: 80upx;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.filter-btn-group .iconfont {
  font-size: 22upx;
  vertical-align: middle;
  margin: 0 8upx;
  color: #cccccc;
}
.filter-btn-group::after {
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.mask-wrap {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 7;
}
.sort-container,
.filter-container,
.type-container {
  background-color: #ffffff;
}
.sort-container > view,
.type-container > view {
  line-height: 80upx;
  padding: 0 36upx;
  border-bottom: 1px solid #f2f2f2;
}
.sort-container > view:last-child,
.type-container > view:last-child {
  border: none;
}
.time-select {
  display: flex;
  flex-direction: column;
  padding: 20upx 30upx;
  background-color: #ffffff;
  border-bottom: 1upx solid #f1f1f1;
}

.time-select-label {
  line-height: 80upx;
  flex-shrink: 0;
  font-size: 28upx;
  color: #999999;
}

.time-select-list {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.time-select-item {
  width: 150upx;
  height: 64upx;
  line-height: 64upx;
  margin: 15upx 20upx;
  background-color: #f4f4f4;
  border-radius: 10upx;
  color: #666666;
  text-align: center;
  font-size: 24upx;
}

.time-select-item.selected {
  background-color: #007aff;
  color: #ffffff;
}
.picker-data-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.filter-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 36upx;
  border-top: 1px solid #f2f2f2;
}
</style>
