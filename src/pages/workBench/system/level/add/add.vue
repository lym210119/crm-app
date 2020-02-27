<template>
  <view class="add-level-page">
    <scroll-view scroll-y="true" style="height:100%">
      <view class="item">
        <view class="item-label">评分区间</view>
        <view class="item-input input-range">
          <input type="text" placeholder="2位数内">
          <text>~</text>
          <input type="text" placeholder="3位数内">
        </view>
      </view>
      <view class="item">
        <view class="item-label">系统评级</view>
        <view class="item-input">
          <input type="text" placeholder="大写字母[+数字]">
        </view>
      </view>
      <view class="item">
        <view class="item-label">服务费率基数</view>
        <view class="item-input">
          <input type="text" placeholder="数字或小数">
        </view>
      </view>
      <view class="item">
        <view class="item-label">信贷 服务费率</view>
        <view class="item-input">
          <input type="text" placeholder="数字或小数">
        </view>
      </view>
      <view class="item">
        <view class="item-label">抵押 服务费率</view>
        <view class="item-input">
          <input type="text" placeholder="数字或小数">
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "添加配置"
    };
  },
  onLoad(opts) {
    console.log(opts);
    if (opts.type === "add") {
      this.title = "添加配置";
    } else {
      this.title = "编辑配置";
    }
    uni.setNavigationBarTitle({
      title: this.title
    });
  }
};
</script>

<style>
.add-level-page {
  height: 100%;
  background-color: #ffffff;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 30upx;
  position: relative;
}
.item::after {
  position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.item-input {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}
.input-range>text,.input-range>input {
  width: 150upx;
  text-align: center;
}
</style>
