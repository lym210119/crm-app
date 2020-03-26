<template>
  <!-- 回访统计 -->
  <view class="return-stat-page">
    <view class="qiun-bg-white qiun-title-bar qiun-common-mt">
      <view class="qiun-title-dot-light">回访统计</view>
    </view>
    <view class="qiun-charts">
      <!--#ifdef MP-ALIPAY -->
      <canvas
        canvas-id="canvasPie"
        id="canvasPie"
        class="charts"
        :width="cWidth * pixelRatio"
        :height="cHeight * pixelRatio"
        :style="{ width: cWidth + 'px', height: cHeight + 'px' }"
        @touchstart="touchPie($event, 'canvasPie')"
      ></canvas>
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas
        canvas-id="canvasPie"
        id="canvasPie"
        class="charts"
        @touchstart="touchPie($event, 'canvasPie')"
      ></canvas>
      <!--#endif-->
    </view>
  </view>
</template>

<script>
import uCharts from "@/components/u-charts/u-charts.js";
var _self;
var canvasObj = {};
export default {
  data() {
    return {
      cWidth: "",
      cHeight: "",
      tips: "",
      pixelRatio: 1,
      serverData: "",
      itemCount: 30, //x轴单屏数据密度
      sliderMax: 50
    };
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
    getServerData() {
      this.$minApi
        .getReturnStat()
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
      let Pie = {
        series: []
      };
      Pie.series = data.Pie.series;
      this.showPie("canvasPie", Pie);
    },
    showPie(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "pie",
        fontSize: 10,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 20,
          margin: 0
        },
        background: "#FFFFFF",
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        extra: {
          pie: {
            lableWidth: 15
          }
        }
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
</style>
