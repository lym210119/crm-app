<template>
  <view class="mine-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="header">
        <view class="header-bg"></view>
        <view class="container">
          <view class="user-wrap">
            <image class="avatar" src="../../static/60x60.png" mode=""></image>

            <view class="user-info">
              <view class="name">
                <text class="name-left"
                  >张三 <text class="name-small">座席号：6012</text></text
                >
                <text class="name-right"
                  >完善名片 <text class="iconfont icon-arrow-right1"></text
                ></text>
              </view>
              <view class="progress">
                <progress percent="7" border-radius="10" stroke-width="6" />
              </view>
              <view class="card">
                名片完善度 <text class="text-green">7%</text> 超过
                <text class="text-green">18%</text> 用户
              </view>
            </view>
          </view>
          <view class="qrcode-wrap">
            <view class="qr-item">
              <text class="iconfont icon-erweima-copy"></text>
              <text class="">名片码</text>
            </view>
            <view class="qr-item">
              <text class="iconfont icon-tupian"></text>
              <text class="">宣传图</text>
            </view>
            <view class="qr-item">
              <text class="iconfont icon-zhuanfa"></text>
              <text class="">发图片</text>
            </view>
          </view>
          <view class="company-wrap">
            <view class="company-name">
              <image
                class="company-image"
                src="../../static/company.png"
                mode=""
              ></image>
              申贷网
            </view>
            <view class="company-group">
              组织架构
            </view>
          </view>
        </view>
      </view>

      <navigator url="" class="navigator-item">
        <view class="iconfont icon-mingpian"> </view>
        <view class="title">
          我的名片
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>
      <navigator url="/pages/mine/qichacha/qichacha" class="navigator-item">
        <view class="iconfont icon-gongshangchaxun1"> </view>
        <view class="title">
          工商查询
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>
      <navigator url="/pages/mine/qichacha/qichacha" class="navigator-item">
        <view class="iconfont icon-caozuoshouceshuomingshuzhinanshiyongshouce">
        </view>
        <view class="title">
          使用手册
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>
      <navigator url="/pages/mine/qichacha/qichacha" class="navigator-item">
        <view class="iconfont icon-yijianfankui"> </view>
        <view class="title">
          意见反馈
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>
      <navigator url="/pages/mine/qichacha/qichacha" class="navigator-item">
        <view class="iconfont icon-kefu"> </view>
        <view class="title">
          专属服务经理
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>
      <navigator
        url="/pages/mine/qichacha/qichacha"
        class="navigator-item setting"
      >
        <view class="iconfont icon-shezhi"> </view>
        <view class="title">
          设置
        </view>
        <view class="right-text">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </navigator>

      <!-- <side-fab></side-fab> -->
      <navigator url="/pages/login/login">去登录页面</navigator>

    </scroll-view>
  </view>
</template>

<script>
import uniGrid from "@/components/uni-grid/uni-grid.vue";
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue";
// import sideFab from '@/components/side-fab.vue'
export default {
  components: {
    uniGrid,
    uniGridItem
    // sideFab
  },
  data() {
    return {
      list: [
        {
          url: "/static/c1.png",
          text: "Grid 1",
          badge: "0",
          type: "primary"
        },
        {
          url: "/static/c2.png",
          text: "Grid 2",
          badge: "1",
          type: "success"
        },
        {
          url: "/static/c3.png",
          text: "Grid 3",
          badge: "99",
          type: "warning"
        },
        {
          url: "/static/c4.png",
          text: "Grid 4",
          badge: "2",
          type: "error"
        },
        {
          url: "/static/c5.png",
          text: "Grid 5"
        },
        {
          url: "/static/c6.png",
          text: "Grid 6"
        },
        {
          url: "/static/c7.png",
          text: "Grid 7"
        },
        {
          url: "/static/c8.png",
          text: "Grid 8"
        },
        {
          url: "/static/c9.png",
          text: "Grid 9"
        },
        {
          url: "/static/c9.png",
          text: "Grid 9"
        },
        {
          url: "/static/c9.png",
          text: "Grid 9"
        },
        {
          url: "/static/c9.png",
          text: "Grid 9"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.mine-page {
	height: 100%;
}
.header-bg {
  height: 90upx;
  background-color: #19aa8d;
}
.header .container {
  margin-top: -90upx;
  padding: 0 20upx;
}
.user-wrap,
.qrcode-wrap,
.company-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20upx;
  margin-bottom: 10upx;
  background-color: #ffffff;
  
}
.user-wrap .avatar {
  width: 136upx;
  height: 136upx;
  margin-right: 20upx;
  border-radius: 50%;
}
.user-info {
  flex: 1;
}
.user-info .name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-info .name .name-left {
  font-size: 32upx;
  font-weight: 700;
}
.user-info .name .name-left .name-small {
  margin-left: 20upx;
  font-size: 24upx;
  font-weight: normal;
}
.user-info .name .name-right {
  font-weight: 700;
  color: #19aa8d;
}
.user-info .name .name-right .icon-arrow-right1 {
  font-size: 24upx;
  font-weight: 700;
  color: #19aa8d;
}
.user-info .progress {
  width: 60%;
  padding: 10upx 0;
}
.user-info .card {
  font-size: 24upx;
}
.user-info .card .text-green {
  margin: 0 10upx;
  color: #19aa8d;
  font-size: 32upx;
}
.qrcode-wrap {
  justify-content: space-around;
}
.qrcode-wrap .qr-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qr-item .iconfont {
  line-height: 60upx;
  font-size: 60upx;
}
.qr-item .iconfont.icon-erweima-copy {
  color: #e1191f;
}
.qr-item .iconfont.icon-tupian {
  color: #f5a623;
}
.qr-item .iconfont.icon-zhuanfa {
  color: #08d19f;
}
.company-wrap {
  justify-content: space-between;
}
.company-wrap .company-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.company-wrap .company-name .company-image {
  width: 70upx;
  height: 70upx;
  border-radius: 8upx;
  margin-right: 20upx;
}
.company-wrap .company-group {
  padding: 8upx 20upx;
  background-color: #19aa8d;
  color: #ffffff;
  border-radius: 8upx;
}
.navigator-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 86upx;
  padding: 0 20upx;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
}
.navigator-item.setting {
  margin-top: 20upx;
}
.right-text {
  color: #bbbbbb;
  font-size: 28upx;
}
.navigator-item .title {
  flex: 1;
  margin-left: 10upx;
  font-size: 30upx;
  font-weight: 400;
}
.navigator-item > .iconfont {
  width: 60upx;
  text-align: center;
  color: #b8b8b8;
  font-size: 42upx;
}
.icon-arrow-right1 {
  color: #bbbbbb;
  font-size: 30upx;
}
</style>
