<template>
  <view class="call-stat-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="item" v-for="(item, i) in data" :key="i">
        <view class="item-label">
          {{item.label}}
        </view>
        <view class="item-value">{{item.value}}</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "记录总数",
          value: "23495"
        },
        {
          label: "未呼数",
          value: "22684"
        },
        {
          label: "在呼数",
          value: "0"
        },
        {
          label: "已呼数",
          value: "881"
        },
        {
          label: "失败数",
          value: "783"
        },
        {
          label: "失败率",
          value: "96.55%"
        },
        {
          label: "接通数",
          value: "28"
        },
        {
          label: "接通率",
          value: "3.45%"
        }
      ]
    };
  }
};
</script>

<style>
.call-stat-page {
  height: 100%;
  background-color: #ffffff;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20upx 30upx;
  position: relative;
}
.item::after {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #cccccc;
}
</style>
