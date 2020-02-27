<template>
  <view class="parameter-config-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <uni-section
        title="转入公海"
        type="circle"
        style="margin-top: 0;"
      ></uni-section>
      <view class="section">
        <view class="item">
          <view class="item-label">需求客户转公海时间(天)</view>
          <view class="item-input">
            <input type="text" placeholder="请输入时间" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">意向客户转公海时间(天)</view>
          <view class="item-input">
            <input type="text" placeholder="请输入时间" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">潜在客户转公海时间(天)</view>
          <view class="item-input">
            <input type="text"  placeholder="请输入时间"/>
          </view>
        </view>
      </view>
      <uni-section title="标准利率" type="circle"></uni-section>
      <view class="section">
        <view class="item">
          <view class="item-label">五年以上</view>
          <view class="item-input">
            <input type="text" placeholder="请输入利率">
          </view>
        </view>
        <view class="item">
          <view class="item-label">一年至五年（含五年）</view>
          <view class="item-input">
            <input type="text" placeholder="请输入利率">
          </view>
        </view>
        <view class="item">
          <view class="item-label">一年以内（含一年）</view>
          <view class="item-input">
            <input type="text" placeholder="请输入利率">
          </view>
        </view>
      </view>
      <uni-section title="按键转接" type="circle"></uni-section>
      <view class="section">
        <view class="item">
          <view class="item-label">投诉电话</view>
          <view class="item-input">
            <input type="text" placeholder="请输入">
          </view>
        </view>
        <view class="item">
          <view class="item-label">合伙人加盟电话</view>
          <view class="item-input">
            <input type="text" placeholder="请输入">
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import uniSection from "@/components/uni-section/uni-section.vue";
export default {
  components: {
    uniSection
  },
  onNavigationBarButtonTap(e) {
    uni.showLoading()
  }
};
</script>

<style>
.parameter-config-page {
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
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.item-input {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}
</style>
