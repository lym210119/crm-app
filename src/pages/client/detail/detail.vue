<template>
  <view class="client-detail-page">
    <uni-nav-bar
      statusBar="true"
      backgroundColor="#19aa8d"
      color="#ffffff"
      :fixed="true"
      left-icon="arrowleft"
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
      <!-- 概览 -->
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
                  style="color:#19aa8d;"
                ></text>
                <text
                  class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"
                  @tap="clickContact('SMS')"
                  style="color: #b5b8c2"
                ></text>
                <text
                  class="iconfont icon-dianhua"
                  @tap="clickContact('phone')"
                ></text>
              </view>
            </view>
            <view class="list-item cus-age">
              <view>
                客户年龄：
                <picker
                  class="picker-cusage"
                  :value="ageIndex"
                  :range="ageList"
                  @change="changeAge"
                >
                  <text class="text-green">{{ ageList[ageIndex] }}</text
                  ><text class="iconfont icon-bianji"></text>
                </picker>
              </view>
              <view>
                期望金额：
                <picker
                  class="picker-money"
                  :value="moneyIndex"
                  :range="moneyList"
                  @change="changeMoney"
                >
                  <text class="text-green">{{ moneyList[moneyIndex] }}</text
                  ><text class="iconfont icon-bianji"></text>
                </picker>
              </view>
            </view>
            <view class="list-item qingkuang">
              <view class="qingkuang-title">
                <text>客户情况：</text>
                <text
                  class="iconfont icon-bianji"
                  style="margin-left: 0;"
                ></text>
              </view>
              <textarea
                style="font-size: 28upx;color: #959595;flex: 1;height:200upx;width: auto;"
                :autoHeight="false"
                :fixed="true"
                :value="kehuqingkuang"
                @blur="textareaBlur"
              ></textarea>
            </view>
            <view class="list-item tags-list">
              <text>客户标签：</text>
              <view class="tag-box">
                <text
                  class="tag-item"
                  v-for="(item, i) in tagList"
                  :key="i"
                  @tap="clickTags(item)"
                  >{{ item }}
                  <text class="iconfont icon-hebingxingzhuang"></text
                ></text>
              </view>
            </view>
            <view class="list-item yuyue">
              预约上门：
              <text class="text-green"
                >上门时间：<text style="color: #19aa8d;"
                  >2020-02-20 下午</text
                ></text
              >
              <text class="text-orange" @tap="$refs.dateTime.show()">改约</text>
            </view>
            <view class="list-item yuyue">
              预约上门：
              <text class="text-green">到店时间：2020-02-20 下午</text>
              <text class="text-orange" style="color: #19aa8d;">第8次到店</text>
            </view>
            <view class="list-item jihua">
              <view class="jihua-title">
                <text>计划内容：</text>
                <text style="font-size: 24upx;">2020-02-21 15:00</text>
              </view>

              <view class="text-green"
                >计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约计划明天下午三点约客户签约</view
              >
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <!-- 跟进 -->
      <swiper-item>
        <scroll-view scroll-y="true" style="height: 100%">
          <follow></follow>
        </scroll-view>
      </swiper-item>
      <!-- 资质 -->
      <swiper-item>
        <scroll-view scroll-y="true" style="height: 100%">
          <zizhi></zizhi>
        </scroll-view>
      </swiper-item>
      <!-- 文档 -->
      <swiper-item>
        <scroll-view scroll-y="true" style="height: 100%">
          <file></file>
        </scroll-view>
      </swiper-item>
    </swiper>

    <view class="bottomb-btn-group">
      <view
        class="operation-item"
        :class="{ follow: item.title === '取消关注' }"
        v-for="(item, i) in operationList"
        :key="i"
        @tap="clickOperation(item)"
      >
        <!-- <w-picker v-if="item.icon === 'icon-yuyue'" mode="dateTime" @confirm="bindDateChange">
          <view class="operation-item" >
            <text class="iconfont" :class="item.icon"></text>
            <text>{{ item.title }}</text>
          </view>
        </w-picker> -->
        <!-- <block v-else> -->
        <text class="iconfont" :class="item.icon"></text>
        <text>{{ item.title }}</text>
        <!-- </block> -->
      </view>
    </view>

    <w-picker
      mode="dateTime"
      step="1"
      @confirm="onConfirm"
      ref="dateTime"
      themeColor="#007aff"
    ></w-picker>
  </view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
import uniRate from "@/components/uni-rate/uni-rate.vue";
import uniSteps from "@/components/uni-steps/uni-steps.vue";
import wPicker from "@/components/w-picker/w-picker.vue";
import follow from "./follow.vue";
import zizhi from './zizhi.vue'
import file from "./file.vue";
export default {
  components: {
    uniNavBar,
    uniRate,
    uniSteps,
    wPicker,
    follow,
    zizhi,
    file,
  },
  data() {
    return {
      kehuqingkuang: "全款房；有预期；有社保；公积金；微粒贷；信用卡",

      tagList: ["开场白", "全款房", "有预期", "有社保", "公积金"],
      operationList: [
        {
          icon: "icon-add",
          title: "加电话"
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
      ageIndex: 0,
      ageList: ["18~22", "23~32", "33~42", "43~55"],
      moneyIndex: 0,
      moneyList: [
        "暂不确定",
        "2万元以下",
        "2~5万元",
        "5~10万元",
        "10~30万元",
        "30~50万元",
        "50~100万元",
        "100~300万",
        "300~500万元",
        "500~1000万元",
        "1000万元以上"
      ],
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
    // 客户情况编辑 blur
    textareaBlur(e) {
      console.log(e);
      if (this.kehuqingkuang !== e.detail.value) {
        uni.showModal({
          title: "提示",
          content: "你修改了客户情况，是否保存？",
          success: res => {
            if (res.confirm) {
            }
          }
        });
      }
    },
    // 预约时间确认
    onConfirm(e) {
      console.log(e);
    },

    clickTags(item) {
      uni.showModal({
        title: "提示",
        content: "是否删除该客户身上的 “" + item + "” 标签？",
        success: res => {
          if (res.confirm) {
            if (this.tagList.indexOf(item) > -1) {
              this.tagList.splice(item, 1);
            }
          }
        }
      });
    },
    clickOperation(item) {
      switch (item.icon) {
        case "icon-add":
          uni.navigateTo({
            url: "/pages/client/addPhone/addPhone"
          });
          break;
        case "icon-gonghai":
          uni.showModal({
            title: "提示",
            content: "确定要将该客户扔到公海吗？",
            success: res => {
              if (res.confirm) {
              }
            }
          });
          break;
        case "icon-pingjipeizhi1":
          item.title = item.title === "关注" ? "取消关注" : "关注";

          break;
        case "icon-yuyue":
          console.log(2222)
          this.$refs.dateTime.show();
          break;
        case "icon-tixing":
          uni.navigateTo({
            url: "/pages/client/writePlan/writePlan"
          });
          break;
        case "icon-xiegenjin-":
          uni.navigateTo({
            url: "/pages/client/writeFollow/writeFollow"
          });
          break;
        default:
          break;
      }
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
    changeMoney(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.moneyIndex = e.target.value;
    },
    changeAge(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.ageIndex = e.target.value;
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
  width: 100%;
  overflow: hidden;
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
  color: #333333;
  align-items: flex-end;
}
.tab-item.active {
  color: #ffffff;
  font-size: 32upx;
}
.info > .info-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20upx;
  background-color: #ffffff;
  border-bottom: 1upx solid #cccccc;
}
.info-header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100upx;
  height: 100upx;
  margin-right: 20upx;
  border-radius: 50%;
  background-color: #f16801;
  border: 10upx solid #f16801;
  position: relative;
  color: #ffffff;
  text-align: center;
}
.info-header-left > view {
  color: #ffffff;
  font-size: 32upx;
  text-align: center;
}
.info-header-left .iconfont {
  position: absolute;
  bottom: -8upx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24upx;
  color: #ffffff;
}
.info-header-right {
  flex: 1;
}
.info-header-right .info-name {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.info-header-right .info-name .iconfont {
  font-size: 24upx;
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
  color: #333333;
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
  color: #333333;
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
  border-bottom: 2upx solid #afb3b9;
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
  background: #fda228;
  border-radius: 50%;
}
.steps-container .step.completed:after,
.steps-container .step.completed + .step:before {
  border-color: #afb3b9;
}
.steps-container .step.completed .step-icon {
  /* background: #ffca3e; */
  border-color: #afb3b9;
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
  border-left: 2px solid #afb3b9;
  border-bottom: 2px solid #afb3b9;
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
  color: #718df6;
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
.qingkuang {
  justify-content: flex-start;
  align-items: flex-start;
}
.list-item.yuyue,
.list-item.jihua {
  justify-content: flex-start;
  flex-wrap: wrap;
}
.list-item .text-green {
  color: #959595;
}
.list-item .text-orange {
  margin-left: 20upx;
  color: #ffa83a;
}
.tags-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.tag-box {
  flex: 1;
  flex-wrap: wrap;
}
.tag-item {
  display: inline-block;
  border-radius: 10upx;
  background-color: #f8f8f8;
  color: #959595;
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
  background-color: #ffffff;
}
.operation-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b5b8c2;
}
.operation-item.follow {
  color: #ffca3e;
}
.operation-item > text:nth-of-type(2) {
  margin-top: -10upx;
  font-size: 24upx;
}
.operation-item .iconfont {
  font-size: 40upx;
  /* color:#b5b8c2; */
}

.jihua-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.qingkuang-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list-item .icon-bianji {
  margin-left: 20upx;
  color: #333333;
  font-size: 24upx;
}
.picker-cusage,
.picker-money {
  display: inline-block;
}
</style>
