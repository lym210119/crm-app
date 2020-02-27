<template>
  <view class="call-record-page">
    <view class="filter-btn-group">
      <view
        class="type"
        :class="{ active: mask === 1 }"
        @tap="handleOperation(1)"
        >呼叫类型 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >接通状态 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view
        class="staff"
        :class="{ active: mask === 3 }"
        @tap="handleOperation(3)"
        >员工 <text class="iconfont icon-arrow-right"></text
      ></view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="type-container" v-show="mask === 1">
        <view>呼入</view>
        <view>呼出</view>
      </view>
      <view class="sort-container" v-show="mask === 2">
        <view @tap.stop="selectSort('呼入无坐席')">呼入无坐席</view>
        <view @tap.stop="selectSort('呼入未接')">呼入未接</view>
        <view @tap.stop="selectSort('呼入已接')">呼入已接</view>
        <view @tap.stop="selectSort('呼出未接')">呼出未接</view>
        <view @tap.stop="selectSort('呼出已接')">呼出已接</view>
      </view>
      <view class="filter-container" v-show="mask === 3">
        <view class="filter-list">
          <view class="filter-list-left">
            <view class="current">
              筛选场景
            </view>
          </view>
          <view class="filter-list-right">
            <view>全部客户</view>
            <view>我负责的客户</view>
            <view>下属负责的客户</view>
            <view>我参与的客户</view>
            <view>我关注的客户</view>
            <view>重点客户</view>
            <view>次重点客户</view>
          </view>
        </view>
        <view class="filter-bottom">
          <!-- <view style="color: #007AFF;">自定义筛选</view> -->
          <view class="filter-btn-group">
            <button type="primary" size="mini" plain="true">重置</button>
            <button type="primary" size="mini">完成</button>
          </view>
        </view>
      </view>
    </view>
    <view class="list-container">
      <scroll-view
        scroll-y="true"
        enableBackToTop="true"
        @scrolltolower="loadMore()"
        style="flex:1"
      >
        <view
          class="item"
          v-for="item in callList"
          :key="item.id"
          @tap="clickItem(item.url)"
        >
          <view class="item-left" :class="{ active: item.type === '呼出' }">
            <text class="iconfont" :class="item.type === '呼出' ? 'icon-huchudianhua': 'icon-huru'"></text>
          </view>
          <view class="item-right">
            <view class="right-top">
              <view class="cusname">{{ item.cusName }}</view>
              <view class="time">{{ item.time }}</view>
            </view>
            <view class="right-bottom">
              <view>
                <view>通话时长：{{ item.duration }}分钟</view>
                <view>员工： {{ item.staff }}</view>
              </view>
              <view>
                <text class="iconfont icon-play"></text>
              </view>
            </view>
          </view>
        </view>
        <view class="loading-more" v-if="isLoading || callList.length > 7">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      mask: false,
      callList: [
        {
          id: 1,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 2,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 3,
          type: "呼出",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 4,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 5,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 6,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 7,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 8,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 9,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        },
        {
          id: 10,
          type: "呼入",
          cusName: "暂无",
          time: "2020-01-21 11:40:06",
          duration: "45",
          staff: "张三",
          url: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
        }
      ],
      isLoading: false,
      loadingText: "加载更多...",
    };
  },
  methods: {
    loadMore(e) {
      setTimeout(() => {
        this.getList();
      }, 500);
    },
    getList(i) {
      this.callList = this.callList.concat(this.callList)
    },
    clickItem(src) {
      uni.navigateTo({
        url: "/pages/client/record/record?src=" + src
      });
    },
    handleOperation(flag) {
      console.log(this.mask);
      if (flag === 0) {
        this.isOpenOperationBtn = !this.isOpenOperationBtn;
        this.mask = 0;
      } else {
        this.mask = flag;
        this.isOpenOperationBtn = false;
      }
    },
    clickMask() {
      this.mask = false;
    }
  }
};
</script>

<style>
.call-record-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.list-container {
  flex: 1;
  display: flex;
  width: 100%;
  overflow: hidden;
}
.filter-btn-group {
  width: 100%;
  height: 80upx;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.filter-btn-group .iconfont {
  font-size: 22upx;
  vertical-align: middle;
  margin: 0 8upx;
  color: #cccccc;
}

.status.active,
.type.active,
.staff.active {
  color: #007aff;
}
.mask-wrap {
  position: absolute;
  top: calc(var(--status-bar-height) + 40px);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.sort-container,
.filter-container,
.type-container {
  background-color: #ffffff;
}
.sort-container > view,
.type-container > view {
  line-height: 80upx;
  padding: 0 36upx;
  border-bottom: 1px solid #f2f2f2;
}
.sort-container > view:last-child,
.type-container > view:last-child {
  border: none;
}

.filter-list {
  display: flex;
  flex-direction: row;
  height: 600upx;
}
.filter-list-left {
  flex: 1;
  background-color: #f6f7f8;
}
.filter-list-left > view {
  line-height: 80upx;
  padding: 0 36upx;
}
.filter-list-left > view.current {
  color: #007aff;
  background-color: #ffffff;
}
.filter-list-right {
  flex: 2;
}
.filter-list-right > view {
  line-height: 80upx;
  margin-left: 80upx;
  border-bottom: 1px solid #f2f2f2;
}
.filter-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 36upx;
  border-top: 1px solid #f2f2f2;
}
.filter-btn-group {
  display: flex;
  flex-direction: row;
}

.filter-btn-group > button {
  margin: 0 10upx;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20upx;
  padding: 10upx 20upx;
  background-color: #ffffff;
  border-radius: 10upx;
}
.item-left {
  width: 100upx;
  height: 100upx;
  line-height: 100upx;
  margin-right: 20upx;
  background-color: crimson;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
}
.item-left.active {
  background-color: #007aff;
}
.item-left .iconfont {
  font-size: 60upx;
}
.item-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 28upx;
}
.item-right .right-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item-right .right-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item-right .right-bottom view {
  font-size: 24upx;
}
.item-right .right-bottom .icon-play {
  height: 50upx;
  line-height: 50upx;
  font-size: 50upx;
  color: #19aa8d;
}
.loading-more {
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.loading-more-text {
  font-size: 28upx;
  color: #999;
}
</style>
