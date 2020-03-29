<template>
  <view class="images-page">
    <scroll-view scroll-y="true" style="height:100%">
      <view class="img-list">
        <image v-for="item in 10" :key="item" src="https://picsum.photos/105/150"><image>
      </view>

    </scroll-view>
    <view class="fixed-button">制作宣传图</view>
  </view>
</template>

<script>
export default {

}
</script>

<style>
.images-page {
  height: 100%;
  position: relative;
}
.img-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30upx;
}
.img-list>image {
  width: 210upx;
  height: 300upx;
  margin-bottom: 30upx;
}
.fixed-button {
  position: absolute;
  left: 15upx;
  right: 15upx;
  bottom: 10upx;
  background-color: #19aa8d;
  height: 100upx;
  line-height: 100upx;
  text-align: center;
  color: #ffffff;
  font-size: 32upx;
}
</style>