<template>
  <view class="task-page">
    <scroll-view scroll-y="true" style="height: 100%" class="content">

      <!-- 文字滚动 -->
      <uni-notice-bar
				showIcon="true"
        scrollable="true"
        single="true"
        text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"
      ></uni-notice-bar>
      <view class="list" v-for="(item, i) in dataList" :key="i">
        <view class="list-left">
          <text class="iconfont" :class="item.icon"></text>
        </view>
        <view class="list-right">
          <view class="title">{{ item.title }}</view>
          <view class="title-small">{{ item.desc }}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
export default {
  components: {
    uniNoticeBar
  },
  data() {
    return {
      dataList: [
        {
          icon: "icon-jinrilianxikehu",
          title: "今日需联系客户",
          desc: "暂无今日需联系客户"
        },
        {
          icon: "icon-xiansuojilu",
          title: "分配给我的线索",
          desc: "暂无分配给我的线索"
        },
        {
          icon: "icon-wodekehu1",
          title: "分配给我的客户",
          desc: "暂无分配给我的客户"
        },
        {
          icon: "icon-gonghaikehu",
          title: "待进入公海的客户",
          desc: "暂无待进入公海的客户"
        },
        {
          icon: "icon-kefu1",
          title: "即将续贷的客户",
          desc: "暂无即将续贷的客户"
        },
        {
          icon: "icon-daishenhehetong",
          title: "待审核的合同",
          desc: "营销经理提交了新的合同，正在等待您的审批"
        },
        {
          icon: "icon-daishenhehuikuan",
          title: "待审核的回款",
          desc: "暂无待审核的回款"
        },
        {
          icon: "icon-kefu1",
          title: "即将过生日的客户",
          desc: "暂无即将过生日的客户"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.task-page {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}
.list {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  height: 130upx;
  background-color: #ffffff;
  padding: 0 30upx;
  border-bottom: 1px solid #f2f2f2;
}
.list-left {
  width: 80upx;
  height: 80upx;
  line-height: 80upx;
  text-align: center;
  background-color: #19aa8d;
  border-radius: 50%;
  margin-right: 20upx;
}
.list-left .iconfont {
  font-size: 50upx;
  color: #ffffff;
}
.list-right {
  flex: 1;
}
.list-right .title {
  font-weight: 700;
}
.list-right .title-small {
  color: #666666;
}
</style>
