<template>
  <view class="group-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="title">企业成员</view>
      <view class="list">
        <view class="item" v-for="item in list" :key="item.id">
          <image class="item-avatar" :src="item.avatar"></image>
          <view class="item-info">
            <view class="name">{{item.name}}</view>
            <view class="desc">{{item.job}}</view>
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
      list: [{
        id: '1',
        avatar: '/static/60x60.png',
        name: '老蒋',
        job: '管理员'
      },{
        id: '2',
        avatar: '/static/60x60.png',
        name: '张三',
        job: '销售'
      }]
    }
  }
}
</script>

<style>
.group-page {
  height: 100%;
}
.title {
  font-size: 24upx;
  padding: 25upx;
  color: #9ea3a2;
}
.list {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item .item-avatar {
  width: 90upx;
  height: 90upx;
  display: block;
  margin: 25upx;
  border-radius: 50%;
}
.item .item-info {
  flex: 1;
  position: relative;
  padding: 25upx 0;
}
.item .item-info::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #cccccc;
  transform: scaleY(0.5);
}
.item-info .name {
  font-weight: 700;
  color: #000;
  font-size: 32upx;
}
.item-info .desc {
    color: #9ea3a2;
}
</style>