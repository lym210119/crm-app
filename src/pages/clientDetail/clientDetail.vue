<template>
  <view class="client-detail-page">
    <uni-nav-bar
      statusBar="true"
      backgroundColor="#19aa8d"
      color="#ffffff"
      left-icon="arrowleft"
      right-icon="checkmarkempty"
      @clickLeft="tapBack"
    >
      <!-- <block slot="left">
				<view class="nav-left">
					<view class="iconfont icon--search1"></view>
				</view>
			</block> -->
      <view class="tab-content">
        <view
          class="tab-item"
          :class="{ active: tabIndex === i }"
          v-for="(item, i) in tabList"
          :key="item.id"
          @tap="changeTab(i)"
          >{{ item.title }}</view
        >
      </view>
    </uni-nav-bar>

    <swiper
      :current="tabIndex"
      @change="changeSwiper"
      :style="{ height: swiperHeight + 'px' }"
    >
      <swiper-item>
        <scroll-view scroll-y="true" style="height: 100%">
          <view class="swiper-item info">
            <view class="info-header">
              <picker
                class="info-header-left"
                :value="cusIndex"
                :range="cusType"
                @change="changeType"
              >
                <view>{{ cusType[cusIndex] }}</view>
                <text class="iconfont icon-bianji"></text>
              </picker>
              <view class="info-header-right">
                <view class="info-name">
                  <input type="text" value="张三 先生" @blur="changeName"/>
                  （9320424） <text class="iconfont icon-bianji"></text
                ></view>
                <view class="info-desc">
                  <view class="desc-left">
                    <view class="jinli">经理： 赵六（2-1）</view>
                    <view class="star"
                      ><text>星级：</text
                      ><uni-rate
                        size="14"
                        margin="4"
                        value="2"
                        @change="changeStar"
                      ></uni-rate
                    ></view>
                  </view>
                  <view class="desc-right">
                    <view class="laiyuan">来源：B 申贷网</view>
                    <picker
                      class="city"
                      :value="cityIndex"
                      :range="cityList"
                      @change="changeCity"
                    >
                      <text>城市： {{ cityList[cityIndex] }}</text>
                      <text class="iconfont icon-bianji"></text>
                    </picker>
                  </view>
                </view>
              </view>
            </view>
            <view class="steps-container">
              <view
                class="step"
                :class="{ completed: i < stepIndex, active: i === stepIndex }"
                v-for="(item, i) in stepsList"
                :key="i"
              >
                <text class="step-icon"></text>
                <text class="step-label">{{ item }}</text>
              </view>
            </view>
            <view
              class="list-item phone-item"
              v-for="(item, i) in phoneList"
              :key="i"
            >
              <view class="phone-num">{{ item }}</view>
              <view class="contact-icon">
                <text
                  class="iconfont icon-0023"
                  @tap="clickContact('wechat')"
                ></text>
                <text
                  class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"
                  @tap="clickContact('SMS')"
                ></text>
                <text
                  class="iconfont icon-dianhua"
                  @tap="clickContact('phone')"
                ></text>
              </view>
            </view>
            <view class="list-item qingkuang">
              <text>情况：全款房；有预期；有社保；公积金；微粒贷；信用卡</text>
            </view>
            <view class="list-item tags-list">
              <text>标签：</text>
              <text
                class="tag-item"
                v-for="(item, i) in tagList"
                :key="i"
                @tap="clickTags(item)"
                >{{ item }} <text class="iconfont icon-hebingxingzhuang"></text
              ></text>
            </view>
            <view class="list-item yuyue">
              预约：
              <text class="text-green">预约上门时间：2020-02-20 下午</text>
              <text class="text-orange">改约</text>
            </view>
            <view class="list-item jihua">
              计划：
              <text class="text-green"
                >计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约</text
              >
              <text style="font-size: 24upx;">2020-02-21 15:00</text>
            </view>
            <view class="list-item cus-age">
              <view> 客户年龄：<text class="text-green">18~55</text> </view>
              <view> 期望金额： <text class="text-green">20~50万</text> </view>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-red">d</view>
      </swiper-item>
    </swiper>

    <view class="bottomb-btn-group">
      <view
        class="operation-item"
        v-for="(item, i) in operationList"
        :key="i"
        @tap="clickOperation(item.title)"
      >
        <text class="iconfont" :class="item.icon"></text>
        <text>{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
import uniRate from "@/components/uni-rate/uni-rate.vue";
import uniSteps from "@/components/uni-steps/uni-steps.vue";

export default {
  components: {
    uniNavBar,
    uniRate,
    uniSteps
  },
  data() {
    return {
      tagList: ["开场白", "全款房", "有预期", "有社保", "公积金"],
      operationList: [
        {
          icon: "icon-add",
          title: "添加电话"
        },
        {
          icon: "icon-gonghai",
          title: "扔公海"
        },
        {
          icon: "icon-pingjipeizhi1",
          title: "关注"
        },
        {
          icon: "icon-yuyue",
          title: "预约"
        },
        {
          icon: "icon-kehubiaoqian",
          title: "标签"
        },
        {
          icon: "icon-tixing",
          title: "计划"
        },
        {
          icon: "icon-xiegenjin-",
          title: "写跟进"
        }
      ],
      phoneList: ["13888889999", "13999998888", "13777776666"],
      stepIndex: 5,
      stepsList: [
        "线索",
        "沟通",
        "到店",
        "签单",
        "做单",
        "放款",
        "结算",
        "贷后"
      ],
      cusIndex: 1,
      cusType: ["潜在", "意向", "需求"],
      cityIndex: 0,
      cityList: ["武汉", "北京", "上海", "广州"],
      swiperHeight: 500,
      tabIndex: 0,
      tabList: [
        {
          id: 1,
          title: "概览"
        },
        {
          id: 2,
          title: "跟进"
        },
        {
          id: 3,
          title: "资质"
        },
        {
          id: 4,
          title: "文档"
        }
      ]
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: res => {
        let height = res.windowHeight - uni.upx2px(204) - res.statusBarHeight;
        this.swiperHeight = height;
      }
    });
  },
  methods: {
    clickTags(item) {
      uni.showToast({
        icon: "none",
        title: "你点击了 " + item
      });
    },
    clickOperation(type) {
      uni.showToast({
        icon: "none",
        title: "你点击了 " + type
      });
    },
    clickContact(target) {
      uni.showToast({
        icon: "none",
        title: "你点击了 " + target
      });
      switch (target) {
        case "wechat":
          break;
        case "SMS":
          break;
        case "phone":
          break;
        default:
          break;
      }
    },
    tapBack() {
      uni.navigateBack();
    },
    changeName(e) {
      let val = e.detail.value;
      if (!val) return;
    },
    changeType(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.cusIndex = e.target.value;
    },
    changeCity(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.cityIndex = e.target.value;
    },
    changeTab(i) {
      this.tabIndex = i;
    },
    changeSwiper(e) {
      this.tabIndex = e.detail.current;
    },
    changeStar(e) {
      uni.showToast({
        icon: "none",
        title: e.value + "",
        duration: 2000
      });
    }
  }
};
</script>

<style>
.client-detail-page {
  background-color: #ffffff;
}
.tab-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -20upx;
  font-size: 32upx;
  font-weight: 700;
  color: #d5d5d6;
}
.tab-item.active {
  color: #ffffff;
}
.info > .info-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20upx;
  background-color: #19aa8d;
  color: #ffffff;
}
.info-header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100upx;
  height: 100upx;
  margin-right: 20upx;
  border-radius: 50%;
  background-color: #ffffff;
  border: 10upx solid #78d7c9;
  position: relative;
  color: #19aa8d;
  text-align: center;
}
.info-header-left > view {
  color: #19aa8d;
  text-align: center;
}
.info-header-left .iconfont {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24upx;
  color: #19aa8d;
}
.info-header-right {
  flex: 1;
}
.info-header-right .info-name {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.info-header-right .info-name > input {
  width: 150upx;
}
.info-desc {
  display: flex;
  flex-direction: row;
}
.info-desc view {
  font-size: 24upx;
  color: #c4d5d1;
}
.desc-left,
.desc-right {
  flex: 1;
}
.desc-left .star {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.city .iconfont {
  font-size: 24upx;
  margin-left: 10upx;
  color: #ffffff;
}
.steps-container {
  display: flex;
  /* margin: 3rem 0; */
  padding-left: 0;
  padding-bottom: 2.5em;
  padding-top: 10px;
  font-family: Monda;
  text-align: center;
  list-style: none;
  color: #405560;
  border-bottom: 1upx solid #cccccc;
  /* background-color: #ffffff; */
}
.steps-container .step {
  flex: 1 1 100%;
  height: 20px;
  position: relative;
}
.steps-container .step:before,
.steps-container .step:after {
  position: absolute;
  content: "";
  top: 50%;
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  border-bottom: 2px solid #afb3b9;
  z-index: -1;
}
.steps-container .step:before {
  left: 0;
  right: 50%;
}
.steps-container .step:after {
  left: 50%;
  right: 0;
}
.steps-container .step:first-child:before {
  left: 50%;
}
.steps-container .step:last-child:after {
  right: 50%;
}
.steps-container .step-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #afb3b9;
  position: relative;
}
.steps-container .step.active .step-icon:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: scale(0.66666667);
  transform: scale(0.66666667);
  background: #1bb394;
  border-radius: 50%;
}
.steps-container .step.completed:after,
.steps-container .step.completed + .step:before {
  border-color: #1bb394;
}
.steps-container .step.completed .step-icon {
  background: #1bb394;
  border-color: #1bb394;
}
.steps-container .step.completed .step-icon:after {
  position: absolute;
  content: "";
  top: 45%;
  width: 60%;
  height: 35%;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
  background: transparent;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
.steps-container .step-label {
  position: absolute;
  bottom: -2em;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  color: #99a4ac;
  font-weight: normal;
  text-transform: uppercase;
  white-space: nowrap;
  visibility: hidden;
}
.steps-container .step .step-label {
  color: #405560;
  /* font-weight: bold; */
  visibility: visible;
}
.steps-container .step:not(.active) .step-label {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (min-width: 768px) {
  .steps-container .step-label {
    visibility: visible;
  }
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30upx;
  border-bottom: 1upx solid #cccccc;
}

.phone-num::before {
  content: "";
  display: inline-block;
  width: 20upx;
  height: 20upx;
  margin-right: 20upx;
  border-radius: 50%;
  background-color: #fda229;
}
.contact-icon .iconfont {
  margin-left: 20upx;
  vertical-align: middle;
  font-size: 40upx;
  color: #19aa8d;
}
.qingkuang,
.tags-list,
.yuyue,
.jihua,
.cus-age {
  /* line-height: 80upx; */
  padding: 10upx 30upx;
  border-bottom: 1upx solid #cccccc;
}
.list-item.yuyue,
.list-item.jihua {
  justify-content: flex-start;
  flex-wrap: wrap;
}
.list-item .text-green {
  color: #19aa8d;
}
.list-item .text-orange {
  margin-left: 20upx;
  color: #ffa83a;
}
.tags-list {
  flex-wrap: wrap;
}
.tag-item {
  display: inline-block;
  border-radius: 10upx;
  background-color: #1ab394;
  color: #ffffff;
  margin-right: 10upx;
  padding: 0 10upx;
  font-size: 24upx;
  white-space: nowrap;
}
.tag-item .iconfont {
  margin-left: 10upx;
  font-size: 24upx;
}
.bottomb-btn-group {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20upx;
  background-color: #19aa8d;
}
.operation-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.operation-item > text:nth-of-type(2) {
  margin-top: -10upx;
  font-size: 24upx;
}
.operation-item .iconfont {
  font-size: 40upx;
}
</style>
