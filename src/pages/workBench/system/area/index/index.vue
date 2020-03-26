<template>
  <viwe class="area-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="item-area">
        <view class="item-left">
          湖北省
        </view>
        <view class="item-right">
          <button type="primary" size="mini">启用</button>
        </view>
      </view>
    </scroll-view>
  </viwe>
</template>

<script>
export default {

}
</script>

<style>
.area-page {
  height: 100%;
  background-color: #ffffff;
}
.item-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 30upx;
  background-color: #ffffff;
}
</style>