<template>
  <view class="index">
    <view class="header">
      <text>仪表盘</text>
      <navigator url="/pages/indexFilter/indexFilter" class="header-select">
        本月<text class="iconfont icon-arrow-down"></text>
      </navigator>
    </view>

    <view class="section">
      <scroll-view scroll-y="true" style="flex: 1">
        <view class="section-item">
          <view class="section-title">公司即时概况</view>
          <scroll-view
            scroll-y="true"
            style="height: 300upx;padding-bottom: 30upx;"
          >
            <view class="company-info">
              <text class="notice primary">
                上门公告：谁谁谁 的客户上门了
              </text>
              <text class="notice success"> 上门公告：谁谁谁 的客户上门了 </text
              ><text class="notice danger">
                上门公告：谁谁谁 的客户上门了
              </text>
              <text class="notice warning">
                上门公告：谁谁谁 的客户上门了
              </text>
              <text class="notice primary"> 上门公告：谁谁谁 的客户上门了 </text
              ><text class="notice success">
                上门公告：谁谁谁 的客户上门了
              </text>
              <text class="notice danger">
                上门公告：谁谁谁 的客户上门了
              </text>
              <text class="notice warning"> 上门公告：谁谁谁 的客户上门了 </text
              ><text class="notice primary">
                上门公告：谁谁谁 的客户上门了
              </text>
            </view>
          </scroll-view>
        </view>
        <view class="section-item">
          <view class="section-title">销售简报</view>
          <view class="stat-list">
            <navigator
              url=""
              class="stat-item"
              v-for="(item, i) in statList"
              :key="i"
            >
              <view class="stat-item-icon">
                <text class="iconfont" :class="item.iconClass"></text>
              </view>
              <view class="stat-item-right">
                <view class="stat-item-txt">{{ item.title }}</view>
                <view>
                  <text class="stat-item-num">{{ item.num }}</text>
                  <text class="stat-item-unit">{{
                    i < 3 ? " 个" : i >= 7 ? " 条" : " 元"
                  }}</text>
                </view>
              </view>
            </navigator>
          </view>
        </view>

        <view class="qiun-padding">
          <view class="qiun-tip" @tap="changeGaugeData()">更新仪表盘数据</view>
        </view>
        <view class="section-item">
          <view class="section-title">
            上门人数指标完成率
          </view>
          <view class="echart-box">
            <canvas
              canvas-id="canvasGauge"
              id="canvasGauge"
              class="charts-gauge"
            ></canvas>
            <view class="gauge-info">
              <view>
                <view class="gauge-title">上门人数目标</view>
                <view class="gauge-value">
                  800 人
                </view>
              </view>
              <view>
                <view class="gauge-title">实际上门人数</view>
                <view class="gauge-value">
                  598 人
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="qiun-padding">
          <view class="qiun-tip" @tap="changeData()">更新柱状图数据</view>
        </view>
        <view class="section-item">
          <view class="section-title">
            <view class="section-title-left">签约金额及目标完成情况</view>
            <picker
              class="section-right"
              @change="changeSign"
              :value="signIndex"
              :range="PieList"
            >
              <text class="uni-input">{{ PieList[signIndex] }}</text>
              <text class="iconfont icon-arrow-right"></text>
            </picker>
          </view>
          <view class="echart-box">
            <canvas
              canvas-id="canvasColumnA"
              id="canvasColumnA"
              class="charts"
              @touchstart="touchIt($event, 'canvasColumnA')"
            ></canvas>
          </view>
        </view>
        <view class="section-item">
          <view class="section-title">
            <view class="section-title-left">
              回款金额目标及完成情况
            </view>
            <picker
              class="section-right"
              @change="changeBackMoney"
              :value="backMoneyIndex"
              :range="PieList"
            >
              <text class="uni-input">{{ PieList[backMoneyIndex] }}</text>
              <text class="iconfont icon-arrow-right"></text>
            </picker>
          </view>
          <view class="echart-box">
            <canvas
              canvas-id="canvasColumnB"
              id="canvasColumnB"
              class="charts"
              @touchstart="touchIt($event, 'canvasColumnB')"
            ></canvas>
          </view>
        </view>

        <view class="section-item">
          <view class="section-title">
            <view class="section-title-left">
              销售漏斗
            </view>
            <picker
              class="section-right"
              @change="changePie"
              :value="PieIndex"
              :range="PieList"
            >
              <text class="uni-input">{{ PieList[PieIndex] }}</text>
              <text class="iconfont icon-arrow-right"></text>
            </picker>
          </view>
          <view class="echart-box">
            <canvas
              canvas-id="canvasFunnel"
              id="canvasFunnel"
              class="charts"
              @touchstart="touchPie($event, 'canvasFunnel')"
            ></canvas>

            <view class="funnel-info">
              <view class="win">
                <text>放款金额</text>
                <text class="win-num">0.00 元</text>
              </view>
              <view class="loser">
                <text>上门未签金额</text>
                <text class="loser-num">0.00 元</text>
              </view>
            </view>
          </view>
        </view>

        <view class="section-item">
          <view class="section-title">遗忘提醒</view>
          <view class="remide-list">
            <view class="remide-item" v-for="(item, i) in 6" :key="i">
              <view class="remide-text">超过7天未联系的客户</view>
              <view class="remide-num"><text>13</text> 个</view>
            </view>
          </view>
        </view>

        <view class="section-item">
          <view class="section-title">
            <view class="section-left">排行榜</view>
            <picker
              class="section-right"
              @change="changeTop"
              :value="topTypeIndex"
              :range="topTypeList"
            >
              <text class="uni-input">{{ topTypeList[topTypeIndex] }}</text>
              <text class="iconfont icon-arrow-right"></text>
            </picker>
          </view>
          <view class="top-one-content">
            <view
              class="top-item"
              v-for="item in topDataList"
              :key="item.index"
            >
              <view class="number">{{ item.index }}</view>
              <view class="name">{{ item.name }}</view>
              <view class="value">{{ item.value }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
// import uniFab from '@/components/uni-fab/uni-fab.vue'
import uCharts from "../../components/u-charts/u-charts.js";
var _self;
var canvasObj = {};
import { mapState } from "vuex";
export default {
  // components: {
  // 	uniFab
  // },
  data() {
    return {
      PieList: ["中心", "小组", "个人"],
      PieIndex: 0, // 销售漏斗
      signIndex: 0, // 签约金额
      backMoneyIndex: 0, // 回款金额
      topTypeList: [
        "新增线索",
        "新增上门",
        "新增签单",
        "合同金额",
        "放款金额",
        "回款金额",
        "新增通话时长",
        "新增跟进记录"
      ],
      topTypeIndex: 0,
      topDataList: [
        {
          index: 1,
          name: "张三",
          value: "45"
        },
        {
          index: 2,
          name: "张三",
          value: "45"
        },
        {
          index: 3,
          name: "张三",
          value: "45"
        },
        {
          index: 4,
          name: "张三",
          value: "45"
        },
        {
          index: 5,
          name: "张三",
          value: "45"
        }
      ],
      statList: [
        {
          iconClass: "icon-xiansuo",
          title: "新增线索",
          num: "6"
        },
        {
          iconClass: "icon-shangmen",
          title: "新增上门",
          num: "8"
        },
        {
          iconClass: "icon-qiandan1",
          title: "新增签单",
          num: "3"
        },
        {
          iconClass: "icon-hetong1",
          title: "合同金额",
          num: "6"
        },
        {
          iconClass: "icon-zifangfangkuan",
          title: "放款金额",
          num: "6000.00"
        },
        {
          iconClass: "icon-huikuan",
          title: "回款金额",
          num: "10000333.00"
        },
        {
          iconClass: "icon-pingjuntonghuashichang",
          title: "新增通话时长",
          num: "43"
        },
        {
          iconClass: "icon-xiegenjin-",
          title: "新增跟进记录",
          num: "10"
        }
      ],
      cWidth: "",
      cHeight: "",
      gaugeWidth: "", //仪表盘宽度,此设置可使各端宽度一致
      tips: "",
      pixelRatio: 1,
      serverData: "",
      itemCount: 30, //x轴单屏数据密度
      sliderMax: 50
    };
  },
  computed: mapState(["hasLogin"]),
  onLoad() {
    if (!this.hasLogin) {
      uni.showModal({
        title: "未登录",
        content: "您未登录，需要登录后才能继续",
        /**
         * 如果需要强制登录，不显示取消按钮
         */
        showCancel: false,
        success: res => {
          if (res.confirm) {
              uni.navigateTo({
                url: "../login/login"
              });
          }
        }
      });
    }

    console.log(this.indexDateRange);
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
    // this.cWidth3 = uni.upx2px(250);
    // this.cHeight3 = uni.upx2px(250);
    // this.arcbarWidth = uni.upx2px(24);
    this.gaugeWidth = uni.upx2px(30);

    //this.fillData(Data);
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    // change 回款金额
    changeBackMoney(e) {
      this.backMoneyIndex = e.target.value;
    },
    // change 签约金额及目标完成情况
    changeSign(e) {
      this.signIndex = e.target.value;
    },
    // 漏斗图 change
    changePie(e) {
      this.PieIndex = e.target.value;
    },
    // 排行榜 change
    changeTop(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.topTypeIndex = e.target.value;
    },
    getServerData() {
      // uni.showLoading({
      // 	title: "正在加载数据..."
      // })
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
      // uni.request({
      // 	url: '/static/mock/ucharts-data.json',
      // 	data: {},
      // 	success: function(res) {
      // 		_self.fillData(res.data);
      // 	},
      // 	fail: () => {
      // 		_self.tips = "网络错误，小程序端请检查合法域名";
      // 	},
      // 	complete() {
      // 		uni.hideLoading();
      // 	}
      // });
    },
    fillData(data) {
      this.serverData = data;
      this.tips = data.tips;
      this.sliderMax = data.Candle.categories.length;
      let ColumnA = {
        categories: [],
        series: []
      };
      let ColumnB = {
        categories: [],
        series: []
      };

      let Funnel = {
        series: []
      };

      let Gauge = {
        categories: [],
        series: []
      };

      //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
      ColumnA.categories = data.Column.categories;
      //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
      ColumnA.series = data.Column.series;
      ColumnB.categories = data.ColumnMeter.categories;
      //这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
      ColumnB.series = data.ColumnMeter.series;
      // LineA.categories = data.LineA.categories;
      // LineA.series = data.LineA.series;
      // LineB.categories = data.LineB.categories;
      // LineB.series = data.LineB.series;
      // Area.categories = data.Area.categories;
      // Area.series = data.Area.series;
      // Pie.series = data.Pie.series;
      // Ring.series = data.Ring.series;
      Funnel.series = data.Pie.series;
      //自定义文案示例，需设置format字段
      // for (let i = 0; i < Ring.series.length; i++) {
      // 	Ring.series[i].format = () => {
      // 		return Ring.series[i].name + Ring.series[i].data
      // 	};
      // }
      // Radar.categories = data.Radar.categories;
      // Radar.series = data.Radar.series;
      // Arcbar1.series = data.Arcbar1.series;
      // Arcbar2.series = data.Arcbar2.series;
      // Arcbar3.series = data.Arcbar3.series;
      Gauge.categories = data.Gauge.categories;
      Gauge.series = data.Gauge.series;
      // Candle.categories = data.Candle.categories;
      // Candle.series = data.Candle.series;
      // Mix.categories = data.Mix.categories;
      // Mix.series = data.Mix.series;
      this.showColumn("canvasColumnA", ColumnA);
      this.showColumn("canvasColumnB", ColumnB);
      // this.showColumnMeter("canvasColumnMeter", ColumnMeter);
      // this.showLineA("canvasLineA", LineA);
      // this.showLineB("canvasLineB", LineB);
      // this.showArea("canvasArea", Area);
      // this.showPie("canvasPie", Pie);
      // this.showRing("canvasRing", Ring);
      this.showFunnel("canvasFunnel", Funnel);
      // this.showRadar("canvasRadar", Radar);
      // this.showArcbar("canvasArcbar1", Arcbar1);
      // this.showArcbar2("canvasArcbar2", Arcbar2);
      // this.showArcbar3("canvasArcbar3", Arcbar3);
      this.showGauge("canvasGauge", Gauge);
      // this.showCandle("canvasCandle", Candle);
      // this.showMix("canvasMix", Mix);
    },
    showColumn(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "column",
        padding: [15, 15, 15, 15],
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
          gridType: "dash",
          dashLength: 8,
          gridColor: "#CCCCCC",
          splitNumber: 5,
          format: val => {
            return val.toFixed(0) + "元";
          }
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

    showFunnel(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "funnel",
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
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
          funnel: {
            border: true,
            borderWidth: 2,
            borderColor: "#FFFFFF"
          }
        }
      });
    },
    showGauge(canvasId, chartData) {
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "gauge",
        fontSize: 11,
        // padding: [15, 50, 15, 50],
        title: {
          name: Math.round(chartData.series[0].data * 100) + "%",
          color: chartData.categories[1].color,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: chartData.series[0].name,
          color: "#666666",
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        extra: {
          gauge: {
            type: "default",
            width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
            startAngle: 0.75,
            endAngle: 0.25,
            startNumber: 0,
            endNumber: 100,
            splitLine: {
              fixRadius: 0,
              splitNumber: 10,
              width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
              color: "#FFFFFF",
              childNumber: 5,
              childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio //仪表盘背景的宽度
            },
            pointer: {
              width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
              color: "auto"
            }
          }
        },
        background: "#FFFFFF",
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * 0.8 * _self.pixelRatio,
        dataLabel: true
      });
    },
    changeGaugeData() {
      let series = [
        {
          name: "完成率",
          data: Math.random()
        }
      ]; //这里是随机数据，生产环境请从服务器获取，注意series数据类型为数组
      //这里我借用之前的categories数据，判断一下新数据的title.color，没有写死在程序里，以便于自定义
      let newTitleColor;
      for (let i = 0; i < _self.serverData.Gauge.categories.length; i++) {
        if (series[0].data <= _self.serverData.Gauge.categories[i].value) {
          newTitleColor = _self.serverData.Gauge.categories[i].color;
          break;
        }
      }

      canvasObj["canvasGauge"].updateData({
        series: series, //这里给了新数值
        categories: _self.serverData.Gauge.categories,
        title: {
          name: Math.round(series[0].data * 100) + "%",
          color: newTitleColor,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: "更新数据",
          color: "#666666",
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        }
      });
    },

    changeData() {
      canvasObj["canvasColumnA"].updateData({
        series: _self.serverData.ColumnB.series,
        categories: _self.serverData.ColumnB.categories
      });
    },
    touchIt(e, id) {
      canvasObj[id].touchLegend(e, {
        animation: false
      });
      canvasObj[id].showToolTip(e, {
        format: function(item, category) {
          if (typeof item.data === "object") {
            return category + " " + item.name + ":" + item.data.value;
          } else {
            return category + " " + item.name + ":" + item.data;
          }
        }
      });
    }
  }
};
</script>

<style>
.index {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  z-index: 2;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32upx;
  height: 94upx;
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
}

.header-select {
  color: #666666;
}

.icon-arrow-down,
.icon-arrow-right {
  font-size: 22upx;
}

.section {
  flex: 1;
  width: 750upx;
  display: flex;
  overflow: hidden;
}

.section-item {
  margin-top: 20upx;
  /* padding: 0 32upx 28upx 32upx; */
  border-top: 1upx solid #e5e5e5;
  border-bottom: 1upx solid #e5e5e5;
  background-color: #ffffff;
}

.section-title {
  margin: 0 32upx;
  line-height: 90upx;
  border-bottom: 1upx solid #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.company-info {
  display: flex;
  flex-direction: column;
  padding: 0 30upx;
  color: #ffffff;
}

.stat-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20upx 32upx;
  color: #666666;
}

.title-select {
  position: relative;
}

.title-dropdown {
  position: absolute;
  right: 0;
  top: 94upx;
  z-index: 10;
  /* width: 150upx; */
  /* height: 150upx; */
  background-color: #ffffff;
  box-shadow: 1upx 1upx 6upx rgb(0, 0, 0, 0.6);
  border-radius: 10upx;
  padding: 20upx;
}

.title-dropdown > view {
  white-space: nowrap;
  line-height: 60upx;
}

.stat-item {
  width: 320upx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10upx;
}

.stat-item > .stat-item-icon {
  margin-right: 30upx;
}

.stat-item > .stat-item-icon > .iconfont {
  font-size: 50upx;
}

.stat-item-num {
  color: #333333;
  font-size: 32upx;
  font-weight: 700;
}

.stat-item-txt,
.stat-item-unit {
  font-size: 24upx;
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

.charts-gauge {
  width: 750upx;
  height: 350upx;
  background-color: #ffffff;
}

.gauge-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 24upx;
  padding-bottom: 20upx;
  text-align: center;
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

.funnel-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30upx;
}

.win {
  color: #007aff;
}

.loser {
  color: #ff3333;
}

.win > text,
.loser > text {
  display: block;
  text-align: center;
}

.remide-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 32upx;
}

.remide-item {
  padding: 20upx;
}

.remide-item .remide-num > text {
  font-size: 36upx;
  font-weight: 700;
  color: #007aff;
}
.top-one-content {
  display: flex;
  flex-direction: column;
  padding: 0 30upx;
  margin-bottom: 30upx;
}
.top-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1upx solid #f1f1f1;
}
.top-item > view {
  flex: 1;
  text-align: center;
}
.notice {
  height: 40upx;
  line-height: 40upx;
}
.notice.primary {
  color: #1ab394;
}
.notice.success {
  color: #1c84c6;
}
.notice.danger {
  color: #ed5565;
}
.notice.warning {
  color: #f8ac59;
}
</style>
