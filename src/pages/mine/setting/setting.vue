<template>
  <view class="setting-page">
    <scroll-view scroll-y="true" style="height:100%">
      <view class="item">
        <view class="item-label">消息通知</view>
        <view class="item-value">
          <text>未开启</text>
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </view>
      <view class="item">
        <view class="item-label">切换企业</view>
        <view class="item-value">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </view>
      <view class="item">
        <view class="item-label">关于</view>
        <view class="item-value">
          <text class="iconfont icon-arrow-right1"></text>
        </view>
      </view>
      <view class="logout">退出登录</view>
    </scroll-view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.setting-page {
  height: 100%;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20upx 30upx;
  margin-top: 20upx;
  background-color: #ffffff;
}
.item-label {
  font-size: 32upx;
  color: #333333;
}
.item-value {
  font-size: 28upx;
  color: #999999;
}
.item-value>.iconfont {
  font-size: 28upx;
}
.logout {
  background-color: #ffffff;
  padding: 20upx;
  color: #333333;
  font-size: 32upx;
  text-align: center;
  margin-top:20upx;
}
</style>

