<template>
  <view class="follow-page">

    <view class="list-textarea">
      <view class="item-label">跟进内容</view>
      <view class="item-value">
        <textarea placeholder="请输入跟进内容" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onNavigationBarButtonTap(e) {
    console.log(e);
    uni.showLoading({
    });
  },
}
</script>

<style>
.follow-page {
  background-color: #fff;
  padding: 0 30upx;
}
.list-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.list-textarea>.item-value {
  width: 100%;
}
.list-textarea .item-label {
  height: 94upx;
  line-height: 94upx;
}
.list-textarea textarea {
  font-size: 32upx;
  width: 100%;
}
</style>