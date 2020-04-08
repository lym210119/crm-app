<template>
  <view class="userinfo-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <view class="avatar-container">
        <image class="avatar-img" src="https://picsum.photos/60/60"></image>
        <text class="avatar-text">修改头像</text>
      </view>
      <view class="item-list">
        <view class="item">
          <view class="item-label">姓名</view>
          <view class="item-input">
            <input type="text" placeholder="请输入姓名">
          </view>
        </view>
        <view class="item">
          <view class="item-label">性别</view>
          <view class="item-input">
            <picker></picker>
          </view>
        </view>
        <view class="item">
          <view class="item-label">手机</view>
          <view class="item-input">
            <input type="number" placeholder="请输入手机">
          </view>
        </view>
        <view class="item">
          <view class="item-label">邮箱</view>
          <view class="item-input">
            <input type="email" placeholder="请输入邮箱">
          </view>
        </view>
                <view class="item">
          <view class="item-label">部门</view>
          <view class="item-input">
            <input type="email" placeholder="请输入邮箱">
          </view>
        </view>
                <view class="item">
          <view class="item-label">岗位</view>
          <view class="item-input">
            <input type="email" placeholder="请输入邮箱">
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.userinfo-page {
  height: 100%
}
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30upx 0;
}
.avatar-img {
  width: 120upx;
  height: 120upx;
  border-radius: 50%;
  border: 10upx solid #ffffff;
}
.avatar-text {
  font-size: 24upx;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin: 0 30upx;
  padding: 0 30upx;
  height: 100upx;
  position: relative;
}
.item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #cccccc;
}
.item-input {
  flex: 1;
}
.item-input input {
  width: 100%;
  text-align: right;
}
</style>