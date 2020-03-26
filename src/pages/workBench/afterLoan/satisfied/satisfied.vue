<template>
  <view class="satisfied-page">
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
            回访时间
          </view>
          <view class="time-select-list">
            <view class="picker-data-container">
              <picker
                mode="date"
                :value="hfStartDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindStartDateChange($event, 'hf')"
              >
                <view class="uni-input">{{
                  hfStartDateVal ? hfStartDateVal : "开始时间"
                }}</view>
              </picker>
              <view class="">
                --
              </view>
              <picker
                mode="date"
                :value="hfEndDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindEndDateChange($event, 'hf')"
              >
                <view class="uni-input">{{
                  hfEndDateVal ? hfEndDateVal : "结束时间"
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

    <view class="qiun-charts">
      <!--#ifdef MP-ALIPAY -->
      <canvas
        canvas-id="canvasRing"
        id="canvasRing"
        class="charts"
        :width="cWidth * pixelRatio"
        :height="cHeight * pixelRatio"
        :style="{ width: cWidth + 'px', height: cHeight + 'px' }"
        @touchstart="touchPie($event, 'canvasRing')"
      ></canvas>
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas
        canvas-id="canvasRing"
        id="canvasRing"
        class="charts"
        @touchstart="touchPie($event, 'canvasRing')"
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
import wPicker from "@/components/w-picker/w-picker.vue";
import uCharts from "@/components/u-charts/u-charts.js";
var _self;
var canvasObj = {};
export default {
  components: {
    wPicker
  },
  data() {
    return {
      cWidth: "",
      cHeight: "",
      tips: "",
      pixelRatio: 1,
      serverData: "",
      itemCount: 30, //x轴单屏数据密度
      sliderMax: 50,
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
      hfStartDateVal: null,
      hfEndDateVal: null
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

    //this.fillData(Data);
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    bindStartDateChange: function(e, type) {
      console.log(e.target.value);
      var endVal = type === "hf" ? this.hfEndDateVal : this.fkEndDateVal;
      if (this.timeStr(e.target.value) > this.timeStr(endVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      if (type === "hf") {
        this.hfStartDateVal = e.target.value;
      } else {
        this.fkStartDateVal = e.target.value;
      }
    },
    bindEndDateChange: function(e, type) {
      console.log(e.target.value);
      var startVal = type === "hf" ? this.hfStartDateVal : this.fkStartDateVal;
      if (this.timeStr(e.target.value) < this.timeStr(startVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      if (type === "hf") {
        this.hfEndDateVal = e.target.value;
      } else {
        this.fkEndDateVal = e.target.value;
      }
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

    filterConfirm() {},
    filterReset() {
      this.hfStartDateVal = null;
      this.hfEndDateVal = null;
    },
    // 筛选员工
    selectStaff() {
      this.$refs.linkage.show();
    },
    handleOperation(flag) {
      console.log(this.mask);
      if (flag === 0) {
        this.isOpenOperationBtn = !this.isOpenOperationBtn;
        this.mask = 0;
      } else {
        this.mask = flag;
        this.isOpenOperationBtn = false;
      }
    },
    clickMask() {
      this.mask = false;
    },
    getServerData() {
      this.$minApi
        .getUChartsData()
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
      this.sliderMax = data.Candle.categories.length;

      let Ring = {
        series: []
      };

      Ring.series = data.Ring.series;
      //自定义文案示例，需设置format字段
      for (let i = 0; i < Ring.series.length; i++) {
        Ring.series[i].format = () => {
          return Ring.series[i].name + ":" + Ring.series[i].data;
        };
      }

      this.showRing("canvasRing", Ring);
    },
    showRing(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "ring",
        fontSize: 11,
        padding: [5, 5, 5, 5],
        legend: {
          show: true,
          position: "right",
          float: "center",
          itemGap: 10,
          padding: 5,
          lineHeight: 26,
          margin: 5,
          //backgroundColor:'rgba(41,198,90,0.2)',
          //borderColor :'rgba(41,198,90,0.5)',
          borderWidth: 1
        },
        // title: {
        //   name: "70%",
        //   color: "#7cb5ec",
        //   fontSize: 25 * _self.pixelRatio
        // },
        // subtitle: {
        //   name: "收益率",
        //   color: "#666666",
        //   fontSize: 15 * _self.pixelRatio
        // },
        extra: {
          pie: {
            lableWidth: 15,
            ringWidth: 40 * _self.pixelRatio, //圆环的宽度
            offsetAngle: 0 //圆环的角度
          }
        },
        background: "#FFFFFF",
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        disablePieStroke: true,
        dataLabel: true
      });
    },
    touchPie(e, id) {
      canvasObj[id].showToolTip(e, {
        format: function(item) {
          return item.name + ":" + item.data;
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

.qiun-common-mt {
  margin-top: 10upx;
}

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
.filter-btn-group > button {
  margin: 0 10upx;
}
.status.active,
.type.active,
.staff.active {
  color: #007aff;
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
  line-height: 60upx;
  flex-shrink: 0;
  font-size: 28upx;
  color: #999999;
}

.time-select-list {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 20upx;
}

.time-select-item {
  /* width: 150upx; */
  /* height: 64upx; */
  /* line-height: 64upx; */
  padding: 10upx 30upx;
  margin: 10upx;
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

.filter-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 36upx;
  border-top: 1px solid #f2f2f2;
}
.picker-data-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
