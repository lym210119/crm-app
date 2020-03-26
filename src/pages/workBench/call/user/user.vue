<template>
  <!-- 群呼人员 -->
  <view class="call-user-page">
    <scroll-view scroll-y="ture" style="height: 100%">
      <view class="item-head">
        <text>编号</text>
        <text>员工</text>
        <text>座席号</text>
      </view>
      <view class="item" v-for="(item, i) in 10" :key="i">
        <text>9527</text>
        <text>张大</text>
        <text>6800</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {};
</script>

<style>
.call-user-page {
  height: 100%;
  background-color: #ffffff;
}
.item-head,
.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20upx;
}
.item {
  padding: 20upx;
  position: relative;
}
.item::after {
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
.item-head {
  background-color: #f5f5f6;
}
.item-head > text,
.item > text {
  flex: 1;
  text-align: center;
}
</style>
