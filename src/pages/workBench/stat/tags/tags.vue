<template>
  <!-- 客户标签 -->
  <view class="qiun-columns">
    <view class="filter-btn-group">
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >筛选 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view class="staff" :class="{ active: mask === 3 }" @tap="selectStaff"
        >部门 <text class="iconfont icon-arrow-right"></text
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
    <view class="qiun-bg-white qiun-title-bar qiun-common-mt">
      <view class="qiun-title-dot-light">客户标签环形图</view>
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
    this.cHeight = uni.upx2px(800);
    // this.cWidth2 = uni.upx2px(700);
    // this.cHeight2 = uni.upx2px(1100);

    //this.fillData(Data);
  },
  onReady() {
    this.getServerData();
    // console.log(this.getRandomColor());
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
        .getCusTagsStat()
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

      let Ring = {
        series: []
      };

      Ring.series = data.Ring.series;

      this.showRing("canvasRing", Ring);
    },
    changeData() {
      canvasObj["canvasColumn"].updateData({
        series: _self.serverData.ColumnB.series,
        categories: _self.serverData.ColumnB.categories
      });
    },
    showRing(canvasId, chartData) {
      var total = 0;
      var colors = [];
      if (chartData.series.length) {
        colors = this.getHslArray(chartData.series.length);
        chartData.series.forEach(element => {
          total += element.data;
        });
      }
      console.log(colors);

      console.log(chartData);
      canvasObj[canvasId] = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "ring",
        fontSize: 11,
        padding: [5, 15, 5, 15],
        legend: {
          show: true,
          position: "bottom",
          float: "center",
          itemGap: 10,
          padding: 5,
          lineHeight: 26,
          margin: 5,
          backgroundColor: "rgba(41,198,90,0.2)",
          borderColor: "rgba(41,198,90,0.5)",
          borderWidth: 1
        },
        colors: colors,
        title: {
          name: total,
          color: "#7cb5ec",
          fontSize: 25 * _self.pixelRatio
        },
        subtitle: {
          name: "总计",
          color: "#666666",
          fontSize: 15 * _self.pixelRatio
        },
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
      console.log(123);
      console.log(id);
      canvasObj[id].showToolTip(e, {
        format: function(item) {
          return item.name + ":" + item.data;
        }
      });
    },
    // 获取随机HSL
    randomHsl: function() {
      var H = Math.random();
      var S = Math.random();
      var L = Math.random();
      return [H, S, L];
    },
    /**
     * HSL颜色值转换为RGB
     * H，S，L 设定在 [0, 1] 之间
     * R，G，B 返回在 [0, 255] 之间
     *
     * @param H 色相
     * @param S 饱和度
     * @param L 亮度
     * @returns Array RGB色值
     */
    hslToRgb: function(H, S, L) {
      var R, G, B;
      if (+S === 0) {
        R = G = B = L; // 饱和度为0 为灰色
      } else {
        var hue2Rgb = function(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        var P = 2 * L - Q;
        R = hue2Rgb(P, Q, H + 1 / 3);
        G = hue2Rgb(P, Q, H);
        B = hue2Rgb(P, Q, H - 1 / 3);
      }
      return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
    },
    // 获取HSL数组
    getHslArray(length) {
      var HSL = [];
      var hslLength = length; // 获取数量
      for (var i = 0; i < hslLength; i++) {
        var ret = this.randomHsl();

        // 颜色相邻颜色差异须大于 0.25
        if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
          i--;
          continue; // 重新获取随机色
        }
        ret[1] = 0.7 + ret[1] * 0.2; // [0.7 - 0.9] 排除过灰颜色
        ret[2] = 0.4 + ret[2] * 0.4; // [0.4 - 0.8] 排除过亮过暗色

        // 数据转化到小数点后两位
        ret = ret.map(function(item) {
          return parseFloat(item.toFixed(2));
        });
        var rgb = this.hslToRgb(...ret);
        var hex = this.rgbToHex(rgb.join(','))
        HSL.push(hex);
      }
      return HSL;
    },
    rgbToHex(rgb) {
      // rgb(x, y, z)
      var color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
      var hex = "#";

      for (var i = 0; i < 3; i++) {
        // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
        // 'color[i]' 是数组，要转换成字符串.
        // 如果结果是一位数，就在前面补零。例如： A变成0A
        hex += ("0" + Number(color[i]).toString(16)).slice(-2);
      }
      return hex;
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
  height: 800upx;
  background-color: #ffffff;
  padding: 20upx 0;
}

.charts {
  width: 750upx;
  height: 800upx;
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
