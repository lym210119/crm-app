<template>
  <view class="plan-page">
    <w-picker
      mode="dateTime"
      step="1"
      @confirm="onConfirm"
      ref="dateTime"
      themeColor="#007aff"
    ></w-picker>

    <view class="list-item" @tap="$refs.dateTime.show()">
      <view class="item-label">计划时间</view>
      <view class="item-value">
        <text>{{ planTime }}</text>
        <text class="iconfont icon-arrow-right1"></text>
      </view>
    </view>
    <view class="list-textarea">
      <view class="item-label">计划内容</view>
      <view class="item-value">
        <textarea placeholder="请输入计划内容" />
      </view>
    </view>
  </view>
</template>

<script>
import wPicker from "@/components/w-picker/w-picker.vue";
export default {
  components: {
    wPicker
  },
  data() {
    return {
      planTime: ""
    };
  },
  onLoad() {
    this.planTime = new Date()
      .toLocaleString("zh-CN", { hour12: false })
      .split("/")
      .join("-");
  },
  onNavigationBarButtonTap(e) {
    console.log(e);
    uni.showLoading({
    });
  },
  methods: {
    onConfirm(e) {
      this.planTime = e.result;
    }
  }
};
</script>

<style>
.plan-page {
  background-color: #fff;
  padding: 0 30upx;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  border-bottom: 1upx solid #f2f2f2;
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
  width: 100%;
  font-size: 32upx;
}
</style>
