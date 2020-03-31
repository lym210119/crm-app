<template>
  <view class="mine-card-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="head-tips">
        <view class="tips">免费用户暂不可用名片，你可查看示例小程序的名片效果</view>
        <view class="btn-view">
          查看效果
        </view>
      </view>
      <view class="card-progress">
        <view class="progress-info">
          名片完整度 <text class="rate">2%</text>
          <text class="small">（击败全国 0% 用户）</text>
        </view>
        <progress percent="20"
         stroke-width="6"></progress>
      </view>
      <view class="card-item">
        <navigator class="card-head" url="/pages/mine/card/edit">
          <view class="card-head-left">名片信息</view>
          <view class="card-head-right">
            编辑
            <text class="iconfont icon-arrow-right1"></text>
          </view>
        </navigator>
        <view class="card-content">
          <view class="card-box">
              <image class="card-avatar" src="/static/60x60.png" mode=""></image>
            <view class="card-info">
              哈哈哈
            </view>
          </view>
        </view>
      </view>

      <view class="card-item">
        <view class="card-head">
          <view class="card-head-left">个人简介</view>
          
        </view>
        <view class="card-content">
          <view class="userinfo-list">
            <view class="userinfo-item" v-for="item in userinfoList" :key="item.id">
              <view class="userinfo-item-title">
                <view class="title">{{item.title}}</view>
                <view class="add-btn">
                  添加 <text class="iconfont icon-arrow-right1"></text>
                </view>
              </view>
              <view class="userinfo-item-desc">{{item.desc}}</view>
            </view>
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
      userinfoList: [{
        id: 1,
        title: '我的家乡',
        desc: '完善家乡信息，提升亲切感'
      }, {
        id: 2,
        title: '教育经历',
        desc: '完善教育经历，寻找同校人'
      }, {
        id: 3,
        title: '我的语音',
        desc: '好的语音介绍能给人留下深刻印象'
      }, {
        id: 4,
        title: '自我描述  ',
        desc: '有助于加深他人对你的了解'
      }, {
        id: 5,
        title: '我的标签',
        desc: '完善标签，让别人快速认识你'
      }, {
        id: 6,
        title: '别人的评价',
        desc: '他人的良好评价，有助于提升你的个人形象'
      }]
    }
  }
};
</script>

<style>
.mine-card-page {
  height: 100%;
}
.head-tips {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #e7f7fd;
  padding: 25upx;
}
.head-tips .tips {
    line-height: 1.6;
}
.head-tips .btn-view {
  margin-left: 20upx;
  padding: 10upx 20upx;
  white-space:nowrap;
  border: 1upx solid #3d86b9;
  color: #3d86b9;
  border-radius: 8upx;
}
.card-progress {
  display: flex;
  flex-direction: column;
  padding: 25upx;
  background-color: #ffffff;
}
.progress-info {
  font-size: 32upx;
  color: #000;
}
.progress-info .rate{
  margin: 0 20upx;
  font-size: 42upx;
  color: #4a7794;
}
.progress-info .small {
  font-size: 28upx;
}
.card-progress progress {
  padding: 30upx 0;
}
.card-item {
  margin-top: 20upx;
  background-color: #ffffff;
}
.card-head {
  padding: 20upx 25upx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

}
.card-head::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #cccccc;
  transform: scaleY(0.5);
}
.card-head .card-head-left {
  font-size: 32upx;
  color: #000;
}
.card-head-right {
  color: #989898;
  font-size: 32upx;
}

.card-content {
  overflow: hidden;

}
.card-box {
  width: 480upx;
  display: flex;
  flex-direction: column;
  margin: 40upx auto;
  box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
  border-radius: 10upx;
}
.card-box .card-avatar {
  width: 100%;
  border-top-left-radius: 10upx;
  border-top-right-radius: 10upx;
}
.card-box .card-info {
  padding: 30upx;
}
.userinfo-list .userinfo-item {
  display: flex;
  flex-direction: column;
  padding: 25upx;
  position: relative;
}
.userinfo-list .userinfo-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #cccccc;
  transform: scaleY(0.5);
}
.userinfo-item .userinfo-item-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
}
.userinfo-item .userinfo-item-title .add-btn {
  color: #989898;
}
.userinfo-item .userinfo-item-title .add-btn .iconfont {
  font-size: 24upx;
}
.userinfo-item .userinfo-item-desc {
  font-size: 24upx;
}
</style>