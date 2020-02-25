<template>
  <view class="follow-component">
      <view
        class="swiper-item follow-steps"
        v-for="(item, i) in followList"
        :key="item.id"
      >
        <view class="follow-steps-left">
          <view class="steps-left-line"></view>
        </view>
        <view class="follow-steps-right">
          <view class="steps-right-head">
            <view class="right-date">{{ item.date }}</view>
            <view
              class="iconfont icon-shanchu"
              @tap="followRemove(item.id)"
            ></view>
          </view>
          <view class="steps-right-content">
            <view class="right-content-item">
              <view>营销经理：{{ item.handles }}</view>
              <view>{{ item.time }}</view>
            </view>
            <view class="right-content-item">
              <view class="call-time">通话时长：{{ item.duration }}</view>
              <view
                class="iconfont icon-play"
                @tap="toRecordPage(item.callSrc)"
              >
              </view>
            </view>
            <view class="right-content-item">
              <view class="genjin">
                跟进内容：有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；
              </view>
            </view>
          </view>
        </view>
      </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      followList: [
        {
          id: 10001,
          handles: "张山",
          date: "2020-02-21 星期天",
          time: "下午 2:00",
          duration: "00:23:24",
          callSrc: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10002,
          handles: "张山",
          date: "2020-02-21 星期天",
          time: "下午 2:00",
          duration: "00:23:24",
          callSrc: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10003,
          handles: "张山",
          date: "2020-02-21 星期天",
          time: "下午 2:00",
          duration: "00:23:24",
          callSrc: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10004,
          handles: "张山",
          date: "2020-02-21 星期天",
          time: "下午 2:00",
          duration: "00:23:24",
          callSrc: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        },
        {
          id: 10005,
          handles: "张山",
          date: "2020-02-21 星期天",
          time: "下午 2:00",
          duration: "00:23:24",
          callSrc: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",
          followContent:
            "有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"
        }
      ]
    };
  },
  methods: {
    toRecordPage(src) {
      uni.navigateTo({
        url: "/pages/client/record/record?src=" + src
      });
    },
    followRemove(id) {
      uni.showModal({
        title: "提示",
        content: "是否确定删除该条跟进记录 " + id,
        success: res => {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  }
};
</script>

<style>
/* 跟进 */
.follow-steps {
  display: flex;
  flex-direction: row;
  padding: 0 30upx;
}
.follow-steps-left {
  padding-right: 20upx;
}
.steps-left-line {
  position: relative;
  width: 1upx;
  height: 100%;
  background-color: #cccccc;
}
.steps-left-line::before {
  content: "";
  position: absolute;
  top: 20upx;
  left: 50%;
  transform: translateX(-50%);
  width: 16upx;
  height: 16upx;
  background-color: #0870fe;
  border-radius: 50%;
  border: 8upx solid #b3d9e9;
}
.follow-steps-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.steps-right-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80upx;
  padding: 0 20upx;
  color: #0870fe;
  font-weight: 400;
}
.steps-right-head .iconfont {
  font-size: 40upx;
  color: #cccccc;
}
.steps-right-content {
  padding: 20upx;
  margin-bottom: 20upx;
  border-radius: 10upx;
  border: 1upx solid #cccccc;
}
.right-content-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.right-content-item > view {
  font-size: 24upx;
}
.right-content-item .icon-play {
  height: 50upx;
  line-height: 50upx;
  font-size: 50upx;
  color: #19aa8d;
}
</style>
