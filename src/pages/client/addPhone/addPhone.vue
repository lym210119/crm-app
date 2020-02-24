<template>
  <view class="add-phone-page">
    <view class="list-item">
      <view class="item-label">手机号</view>
      <view class="item-value">
        <input type="text" placeholder="请输入客户电话">
      </view>
    </view>
    <view class="add-btn">
      <button type="primary">添加电话</button>
    </view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.add-phone-page {
  background-color: #ffffff;
  padding: 0 30upx;
  overflow: hidden;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  border-bottom: 1upx solid #f2f2f2;
}
.item-value input {
  text-align: right;
}
.add-btn {
  margin: 30upx 0;
}
</style>