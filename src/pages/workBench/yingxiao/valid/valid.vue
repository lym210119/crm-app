<template>
  <view class="valid-page">
    <scroll-view
      class="scroll-view"
      scroll-y="true"
      enableBackToTop="true"
      @scrolltolower="loadMore()"

    >
      <view class="item" v-for="item in listData" :key="item.id">
        <label>
          <checkbox :value="item.cusId" checked="false" />
        </label>
        <view class="item-right">
          <view class="item-right-top">
            <text>{{ item.cusName }} ({{ item.cusId }}) </text>
            <text>{{ item.inputTime }}</text>
          </view>
          <view class="item-right-center">
            <text>{{ item.sources }}</text>
            <text>{{ item.phone }}</text>
          </view>
          <view class="item-right-bottom">
            <text v-if="item.firstFollowTime"
              >首次跟进时间：{{ item.firstFollowTime }}</text
            >
            <text v-else style="color: red;">请及时跟进</text>
          </view>
        </view>
      </view>
      <view class="loading-more" v-if="isLoading || listData.length > 7">
        <text class="loading-more-text">{{ loadingText }}</text>
      </view>
    </scroll-view>

    <view class="fixed-bottom">
      <label> <checkbox value="all" checked="false" /> 全选 </label>
      <view class="operation">
        <button type="primary" size="mini">分配</button
        ><button type="warn" size="mini">删除</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loadingText: "加载更多...",
      isLoading: false,
      listData: [
        {
          id: 1,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: ""
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: ""
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: ""
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: ""
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          sources: "网络渠道(A申贷网)",
          phone: "166****8542",
          firstFollowTime: "2020-01-17 11:33:23"
        }
      ]
    };
  },
  methods: {
    loadMore(e) {
      setTimeout(() => {
        this.getList();
      }, 500);
    },
    getList(i) {
      this.listData = this.listData.concat(this.listData);
    }
  }
};
</script>

<style>
.valid-page {
  height: 100%;
  position: relative;
}
.scroll-view {
  height: calc(100% - 50px);
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20upx 30upx;
  background-color: #ffffff;
  position: relative;
}

.item::after {
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.item-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20upx;
}
.item-right-top,
.item-right-center {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-right-center,
.item-right-bottom {
  font-size: 24upx;
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
.fixed-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 100upx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30upx;
  background-color: #ffffff;
  border-top: 1upx solid #cccccc;
}
.fixed-bottom .operation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.fixed-bottom .operation button {
  margin-left: 20upx;
}
</style>
