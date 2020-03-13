<template>
  <!-- 做单业绩 -->
  <view class="qiun-columns">
    <view class="filter-btn-group">
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >筛选 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view class="staff" :class="{ active: mask === 3 }" @tap="selectStaff"
        >做单部门 <text class="iconfont icon-arrow-right"></text
      ></view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="sort-container" v-show="mask === 2" @tap.stop="">
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

    <!-- <view class="qiun-padding">
      <view class="qiun-tip" @tap="changeData()">更新柱状图数据</view>
    </view> -->

    <view class="qiun-charts">
      <!--#ifdef MP-ALIPAY -->
      <canvas
        canvas-id="canvasColumn"
        id="canvasColumn"
        class="charts"
        :width="cWidth * pixelRatio"
        :height="cHeight * pixelRatio"
        :style="{ width: cWidth + 'px', height: cHeight + 'px' }"
        @touchstart="touchIt($event, 'canvasColumn')"
      ></canvas>
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas
        canvas-id="canvasColumn"
        id="canvasColumn"
        class="charts"
        @touchstart="touchIt($event, 'canvasColumn')"
      ></canvas>
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
      this.selectedId = [];
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
        .getDoOrderStat()
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

      let Column = {
        categories: [],
        series: []
      };

      //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
      Column.categories = data.Column.categories;
      //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
      Column.series = data.Column.series;

      this.showColumn("canvasColumn", Column);
    },
    changeData() {
      canvasObj["canvasColumn"].updateData({
        series: _self.serverData.ColumnB.series,
        categories: _self.serverData.ColumnB.categories
      });
    },
    showColumn(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "column",
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0
        },
        fontSize: 11,
        background: "#FFFFFF",
        pixelRatio: _self.pixelRatio,
        animation: false,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          // format: val => {
          //   return val.toFixed(0) + "元";
          // }
        },
        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            type: "group",
            width:
              (_self.cWidth * _self.pixelRatio * 0.45) /
              chartData.categories.length
          }
        }
      });
    },

    touchIt(e, id) {
      canvasObj[id].touchLegend(e, {
        animation: false
      });
      canvasObj[id].showToolTip(e, {
        format: function(item, category) {
          if (typeof item.data === "object") {
            return category + " " + item.name + "：" + item.data.value;
          } else {
            return category + " " + item.name + "：" + item.data;
          }
        }
      });
    }
  }
};
</script>

<style>
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
