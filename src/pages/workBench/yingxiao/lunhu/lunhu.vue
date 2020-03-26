<template>
  <view class="lunhu-page">
    <uni-nav-bar
      statusBar="true"
      backgroundColor="#19aa8d"
      color="#fff"
    >
      <view class="navbar-title">
        <view>张三 先生（10086）</view>
        <view style="font-size: 24upx;">剩余 50 人未呼</view>
      </view>
      <view slot="left" class="navbar-left">
        <uni-icons type="arrowleft" size="26" color="#fff" @tap="clickBack"></uni-icons>
        <text class="start" @tap="clickStart">开始</text>
      </view>
      <view slot="right" class="navbar-right">
        <view>李斯斯</view></view
      >
    </uni-nav-bar>

    <scroll-view scroll-y="true" style="flex: 1;overflow:hidden;">
      <form class="lunhu-form" @submit="formSubmit">
        <view class="form-item">
          <view class="age">
            年龄：
            <picker
              class="picker"
              :range="ageList"
              :value="ageIndex"
              @change="changeAge"
              >{{ ageList[ageIndex] }} <text class="iconfont icon-bianji"></text
            ></picker>
          </view>
          <view class="money">
            金额：<picker
              class="picker"
              :range="moneyList"
              :value="moneyIndex"
              @change="changeMoney"
              >{{ moneyList[moneyIndex] }}
              <text class="iconfont icon-bianji"></text
            ></picker>
          </view>
        </view>
        <view class="form-item">
          <view class="goHomeStatus">
            上门状态：暂未到访
          </view>
          <view class="cus-type">
            客户类型：
            <picker
              class="picker"
              :range="cusTypeList"
              :value="cusTypeIndex"
              @change="changeCusType"
              >{{ cusTypeList[cusTypeIndex] }}
              <text class="iconfont icon-bianji"></text
            ></picker>
          </view>
        </view>
        <view class="form-item-con">
          <view class="item-left">
            <text>客户情况：</text>
          </view>
          <view class="item-right">
            <textarea
              style="font-size: 28upx;color: #959595;flex: 1;height:100upx;width: auto;"
              :autoHeight="false"
              :fixed="true"
              placeholder="请输入客户情况"
            ></textarea>
          </view>
        </view>
        <view class="form-item-con">
          <view class="item-left">客户标签：</view>
          <view class="item-right">
            <view class="tag-box">
              <text
                class="tag-item"
                v-for="(item, i) in tagList"
                :key="i"
                @tap="removeTag(item)"
                >{{ item }} <text class="iconfont icon-hebingxingzhuang"></text
              ></text>
              <!-- <text class="tag-add-btn" @tap="openTagList"><text class="iconfont icon-add"></text
                > 添加</text> -->
            </view>
          </view>
        </view>
        <view class="form-item-con tag-list-static">
          <text class="badge" v-for="(item, i) in tagStaticList" :key="i" @tap="clickStaticTag(item)">{{item}}</text
          >
        </view>
        <view class="form-item-con">
          <view class="item-left">
            <text>跟进内容：</text>
          </view>
          <view class="item-right">
            <textarea
              style="font-size: 28upx;color: #959595;flex: 1;height:100upx;width: auto;"
              :autoHeight="false"
              :fixed="true"
              placeholder="请输入跟进内容"
              :value="followValue"
            ></textarea>
          </view>
          <view>
          <button class="item-follow" size="mini" @tap="showHistoryFollow">
            历史跟进</button>
          </view>
        </view>
        <view class="form-item-con tag-list-static">
          <text class="follow-badge" v-for="(item, i) in followTags" :key="i" @tap="clickFollowTag(item)">{{item}}</text
          >
        </view>
        <view class="btn-group">
          <button type="warn" size="mini">挂断</button>
          <button type="primary" size="mini">保存</button>
          <button type="primary" size="mini">抓取保存</button>
        </view>
      </form>
    </scroll-view>

    <uni-popup ref="popup" type="center">
      <scroll-view scroll-y="true" class="history-follow-container">

      <view
        class="swiper-item follow-steps"
        v-for="(item, i) in followList"
        :key="item.id"
      >
        <view class="follow-steps-left">
          <view class="steps-left-line"></view>
        </view>
        <view class="follow-steps-right">
          <view class="steps-right-head">
            <view class="right-date">{{ item.date }}</view>
          </view>
          <view class="steps-right-content">
            <view class="right-content-item">
              <view>跟进人：{{ item.handles }}</view>
              <view>{{ item.time }}</view>
            </view>
            <view class="right-content-item">
              <view class="genjin">
                跟进内容：有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；
              </view>
            </view>
          </view>
        </view>
      </view>
        
      </scroll-view>
    </uni-popup>
  </view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
import uniPopup from "@/components/uni-popup/uni-popup.vue";
import uniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
  components: {
    uniNavBar,
    uniPopup,
    uniIcons
  },
  data() {
    return {
      ageList: ["18-24岁", "24-55岁", "55-65岁", "65岁以上"],
      ageIndex: 0,
      moneyList: [
        "暂不确定",
        "2万元以下",
        "2~5万元",
        "5~10万元",
        "10~30万元",
        "30~50万元",
        "50~100万元",
        "100~300万元",
        "300~500万元",
        "500~1000万元",
        "1000万元以上"
      ],
      moneyIndex: 0,
      cusTypeList: ["潜在", "意向", "需求"],
      cusTypeIndex: 0,
      tagList: ["开场白", "全款房", "有预期", "有社保", "公积金"],
      tagStaticList: ["生意","上班","待业","信用卡","微粒贷","按揭房","全款房","有保单","有社保","公积金","按揭车","全款车","白户","有逾期","黑名单"],
      followTags: ["不需要","无人接","开场挂","需回拨","挂断","停机","关机","空号"],
      followValue: 'heool',
      followList: [
        {
          id: 10001,
          handles: "张山",
          date: "2020-02-21 14:23:34",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10002,
          handles: "张山",
          date: "2020-02-21 14:23:34",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10003,
          handles: "张山",
          date: "2020-02-21 14:23:34",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10004,
          handles: "张山",
          date: "2020-02-21 14:23:34",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10005,
          handles: "张山",
          date: "2020-02-21 14:23:34",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        }
      ]
    };
  },
  onLoad(opts) {
    const data = JSON.parse(decodeURIComponent(opts.data));
    console.log(data);
  },
  methods: {
    clickStart() {
      uni.showToast({
        icon: 'none',
        title: 'start'
      })
    },
    clickBack() {
      uni.showModal({
        title: '提示',
        content: '你还有50人未呼，确定要退出吗？',
        success: res => {
          if (res.confirm) {
            uni.navigateBack()
          }
        }
      })
    },
    startLunHu() {
      uni.showToast({
        icon: "none",
        title: "开始轮呼"
      });
    },
    changeAge(e) {
      this.ageIndex = e.detail.value;
    },
    changeMoney(e) {
      this.moneyIndex = e.detail.value;
    },
    changeCusType(e) {
      this.cusTypeIndex = e.detail.value;
    },
    removeTag(item) {
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
    clickStaticTag(item) {
      if (this.tagList.includes(item)) return;
      this.tagList.push(item)
    },
    clickFollowTag(item) {
      this.followValue = item
    },
    showHistoryFollow() {
      this.$refs.popup.open()
    }
  }
};
</script>

<style>
.lunhu-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}

.navbar-title {
  width: 100%;
  text-align: center;
}
.navbar-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-left: 16upx; */
  font-size: 24upx;
}
.navbar-left .start {
  margin-left: 25upx;
  background-color: #ffffff;
  padding: 0 16upx;
  white-space: nowrap;
  border-radius: 10upx;
  color: #333;
}

.navbar-right view {
  font-size: 24upx;
}
.lunhu-form {
}
.form-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cccccc;
}

.form-item .age,
.form-item .money,
.form-item .goHomeStatus,
.form-item .cus-type {
  flex: 1;
  padding: 10upx 30upx;
}
.picker {
  display: inline-block;
}
.picker .icon-bianji {
  margin-left: 20upx;
  font-size: 28upx;
}

.form-item-con {
  display: flex;
  flex-direction: row;
  padding: 20upx 30upx;
  border-bottom: 1upx solid #cccccc;
}
.form-item-con .item-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.form-item-con .item-right {
  flex: 1;
}
.form-item-con .item-right textarea {
  width: 100%;
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
.tag-add-btn {
  display: inline-block;
  margin-right: 10upx;
  padding: 0 10upx;
  font-size: 24upx;
  background-color: #19aa8d;
  border-radius: 10upx;
  color: #fff;
}
.tag-add-btn .iconfont {
  margin-right: 10upx;
  font-size: 24upx;
}
.tag-list-static {
  flex-wrap: wrap;
}
.tag-list-static .badge {
    display: inline-block;
  border-radius: 10upx;
  background-color: #23C6CA;
  color: #ffffff;
  margin-right: 10upx;
  margin-bottom: 10upx;
  padding: 0 10upx;
  font-size: 24upx;
  white-space: nowrap;
}
.follow-badge {
      display: inline-block;
  border-radius: 10upx;
  background-color: #19aa8d;
  color: #ffffff;
  margin-right: 10upx;
  margin-bottom: 10upx;
  padding: 0 10upx;
  font-size: 24upx;
  white-space: nowrap;
}
.btn-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30upx;
}
.history-follow-container {
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  width: 90%;
  height: 1000upx;
  margin: 0 5%;
  background-color: #fff;
  border-radius: 10upx;
}
.follow-steps {
  display: flex;
  flex-direction: row;
  padding: 0 30upx;
}
.follow-steps-left {
  padding-right: 20upx;
}
.steps-left-line {
  position: relative;
  width: 2upx;
  height: 100%;
  background-color: #cccccc;
}
.steps-left-line::before {
  content: "";
  position: absolute;
  top: 20upx;
  left: 50%;
  transform: translateX(-50%);
  width: 16upx;
  height: 16upx;
  background-color: #0870fe;
  border-radius: 50%;
  border: 8upx solid #b3d9e9;
}
.follow-steps-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.steps-right-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80upx;
  padding: 0 20upx;
  color: #0870fe;
  font-weight: 400;
}

.steps-right-content {
  padding: 20upx;
  margin-bottom: 20upx;
  border-radius: 10upx;
  border: 1upx solid #cccccc;
}
.right-content-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.right-content-item > view {
  font-size: 24upx;
}
.right-content-item .icon-play {
  height: 50upx;
  line-height: 50upx;
  font-size: 50upx;
  color: #19aa8d;
}
</style>
