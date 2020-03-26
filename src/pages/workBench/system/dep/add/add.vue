<template>
  <view class="add-dep-page">
        <view class="list-item">
          <view class="item-label">名称</view>
          <view class="item-value">
            <input type="text" name="name" placeholder="请输入中心名称" />
          </view>
        </view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.add-dep-page {
  background-color: #ffffff;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
}
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}
.item-value input {
  padding-right: 20upx;
  text-align: right;
}
</style>