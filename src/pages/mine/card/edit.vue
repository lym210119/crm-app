<template>
  <view class="card-edit-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <navigator class="header" url="">
        <view class="head-title">名片样式</view>
        <view class="head-info">
          <view class="head-info-left">名片样式 <text>商务版</text></view>
          <view class="head-info-right">
            <image src="https://picsum.photos/132/80"></image>
            <text class="iconfont icon-arrow-right1"></text>
          </view>
        </view>
      </navigator>
      <view class="item-list">
        <view class="item title">
          <view class="item-label">个人信息</view>
        </view>
        <view class="item">
          <view class="item-label">手机</view>
          <navigator class="item-input" url="">
            <input type="text" />
            <text class="iconfont icon-arrow-right1"></text>
          </navigator>
        </view>
        <view class="item">
          <view class="item-label">职位</view>
          <view class="item-input">
            <input type="text" placeholder="请填写职位" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">微信</view>
          <view class="item-input">
            <input type="text" placeholder="请填写微信" />
            <text class="iconfont icon-arrow-right1"></text>
          </view>
        </view>
        <view class="item">
          <view class="item-label">邮箱</view>
          <view class="item-input">
            <input type="text" placeholder="请填写邮箱" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">座机</view>
          <view class="item-input">
            <input type="text" placeholder="请填写座机" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">国家</view>
          <view class="item-input">
            <radio-group name="country">
              <label
                class=""
                v-for="item in country"
                :key="item.value"
              >
                <radio :value="item.value" :checked="item.value === '1'" style="transform: scale(0.7);" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="item">
          <view class="item-label">地区</view>
          <view class="item-input">
            <input type="text" placeholder="地区信息" />
            <text class="iconfont icon-arrow-right1"></text>
          </view>
        </view>
        <view class="item">
          <view class="item-label">地址</view>
          <view class="item-input">
            <input type="text" placeholder="请填写公司地址" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      country: [
        { value: "1", name: "国内" },
        { value: "2", name: "国外" }
      ]
    };
  }
};
</script>

<style>
.card-edit-page {
  height: 100%;
}
.header {
  padding: 30upx;
  background-color: #ffffff;
}
.head-title {
  font-size: 32upx;
  font-weight: 700;
  color: #333;
}
.head-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: grey;
}
.head-info-left > text {
  margin-left: 30upx;
  color: #333;
}
.head-info-right {
  display: flex;
  align-items: center;
}
.head-info-right > image {
  width: 132upx;
  height: 80upx;
}
.item-list {
  margin-top: 20upx;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100upx;
  background-color: #ffffff;
  padding: 0 30upx;
  position: relative;
}
.item.title {
  font-weight: 700;
  color: #333;
}
.item::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #cccccc;
}
.item-label {
  font-size: 32upx;
  color: #333;
}
.item-input {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20upx;
}
.item-input > input {
  flex: 1;
}
.item-input > .iconfont {
  color: grey;
}
</style>
