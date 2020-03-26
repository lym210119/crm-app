<template>
  <view class="tabs">
    <scroll-view
      id="tab-bar"
      class="scroll-h"
      :scroll-x="true"
      :show-scrollbar="false"
      :scroll-into-view="scrollInto"
    >
      <view
        v-for="(tab, index) in tabBars"
        :key="tab.id"
        class="uni-tab-item"
        :id="tab.id"
        :data-current="index"
        @click="ontabtap"
      >
        <text
          class="uni-tab-item-title"
          :class="tabIndex == index ? 'uni-tab-item-title-active' : ''"
          >{{ tab.name }}</text
        >
      </view>
    </scroll-view>
    <view class="line-h"></view>
    <swiper
      :current="tabIndex"
      class="swiper-box"
      style="flex: 1;"
      :duration="300"
      @change="ontabchange"
    >
      <swiper-item
        class="swiper-item"
        v-for="(tab, index1) in newsList"
        :key="index1"
      >
        <!-- #ifdef APP-NVUE -->
        <list
          class="scroll-v list"
          enableBackToTop="true"
          scroll-y
          loadmoreoffset="15"
          @loadmore="loadMore(index1)"
        >
          <refresh
            class="refresh"
            @refresh="onrefresh(index1)"
            @pullingdown="onpullingdown"
            :display="tab.refreshing ? 'show' : 'hide'"
          >
            <div class="refresh-view">
              <image
                class="refresh-icon"
                :src="refreshIcon"
                :style="{ width: tab.refreshing || pulling ? 0 : '30px' }"
                :class="{ 'refresh-icon-active': tab.refreshFlag }"
              ></image>
              <loading-indicator
                class="loading-icon"
                animating="true"
                v-if="tab.refreshing"
              ></loading-indicator>
              <text class="loading-text">{{ tab.refreshText }}</text>
            </div>
          </refresh>
          <cell v-for="(newsitem, index2) in tab.data" :key="newsitem.id">
            <media-item
              :options="newsitem"
              @close="close(index1, index2)"
              @click="goDetail(newsitem)"
            ></media-item>
          </cell>
          <cell
            class="loading-more"
            v-if="tab.isLoading || tab.data.length > 4"
          >
            <text class="loading-more-text">{{ tab.loadingText }}</text>
          </cell>
        </list>
        <!-- #endif -->
        <!-- #ifndef APP-NVUE -->
        <scroll-view
          class="scroll-v list"
          enableBackToTop="true"
          scroll-y
          @scrolltolower="loadMore(index1)"
        >
          <view class="table-head">
            <text>名称</text>
            <text>是否开启</text>
            <text>排序</text>
            <text>操作</text>
          </view>
          <view
            class="table-item"
            v-for="(newsitem, index2) in tab.data"
            :key="newsitem.id"
          >
            <text>{{ newsitem.name }}</text>
            <text>{{ newsitem.isOpen }}</text>
            <text>{{ newsitem.sort }}</text>
            <text class="btn-edit" @tap="toEdit('edit')">编辑</text>
          </view>
          <!-- <view
            class="loading-more"
            v-if="tab.isLoading || tab.data.length > 4"
          >
            <text class="loading-more-text">{{ tab.loadingText }}</text>
          </view> -->
        </scroll-view>
        <!-- #endif -->
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
// import mediaItem from "./news-item.nvue";

// 缓存每页最多
const MAX_CACHE_DATA = 100;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;

const newsData = {
  data0: {
    id: 1,
    name: "银行",
    isOpen: true,
    sort: 2
  },
  data1: {
    id: 2,
    name: "消金",
    isOpen: true,
    sort: 1
  },
  data2: {
    id: 3,
    name: "车抵",
    isOpen: true,
    sort: 3
  },
  data3: {
    id: 4,
    name: "信保",
    isOpen: true,
    sort: 4
  },
  data4: {
    id: 5,
    name: "小贷",
    isOpen: false,
    sort: 5
  }
};

export default {
  // components: {
  //   mediaItem
  // },
  data() {
    return {
      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabBars: [
        {
          name: "资方类型",
          id: "zflx"
        },
        {
          name: "信息来源",
          id: "xxly"
        },
        {
          name: "进件种类",
          id: "jjzl"
        },
        {
          name: "客户文档类型",
          id: "khwdlx"
        },
        {
          name: "标签管理",
          id: "bqgl"
        }
      ],
      scrollInto: "",
      showTips: false,
      navigateFlag: false,
      pulling: false,
      refreshIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
    };
  },
  onLoad() {
    setTimeout(() => {
      this.tabBars.forEach(tabBar => {
        this.newsList.push({
          data: [],
          isLoading: false,
          refreshText: "",
          loadingText: "加载更多..."
        });
      });
      this.getList(0);
    }, 350);
  },
  onNavigationBarButtonTap(e) {
    this.toEdit('')
  },
  methods: {
    toEdit(isEdit) {
      uni.navigateTo({
        url: '/pages/workBench/system/customize/add/add?type=' + isEdit
      })
    },
    getList(index) {
      let activeTab = this.newsList[index];
      let list = [];
      for (let i = 1; i <= 10; i++) {
        let item = Object.assign(
          {},
          newsData["data" + Math.floor(Math.random() * 5)]
        );
        item.id = this.newGuid();
        list.push(item);
      }
      activeTab.data = activeTab.data.concat(list);
    },
    goDetail(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: "./detail/detail?title=" + e.title
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
    },
    close(index1, index2) {
      uni.showModal({
        content: "是否删除本条信息？",
        success: res => {
          if (res.confirm) {
            this.newsList[index1].data.splice(index2, 1);
          }
        }
      });
    },
    loadMore(e) {
      setTimeout(() => {
        this.getList(this.tabIndex);
      }, 500);
    },
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    ontabchange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.newsList[index].data.length === 0) {
        this.getList(index);
      }

      if (this.tabIndex === index) {
        return;
      }

      // 缓存 tabId
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
          //console.log("cache index:: " + this.tabIndex);
        }
      }

      this.tabIndex = index;
      this.scrollInto = this.tabBars[index].id;

      // 释放 tabId
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
        //console.log("remove cache index:: " + cacheIndex);
      }
    },
    clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "加载更多...";
    },
    refreshData() {},
    onrefresh(e) {
      var tab = this.newsList[this.tabIndex];
      if (!tab.refreshFlag) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "正在刷新...";

      setTimeout(() => {
        this.refreshData();
        this.pulling = true;
        tab.refreshing = false;
        tab.refreshFlag = false;
        tab.refreshText = "已刷新";
        setTimeout(() => {
          // TODO fix ios和Android 动画时间相反问题
          this.pulling = false;
        }, 500);
      }, 2000);
    },
    onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "释放立即刷新";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "下拉可以刷新";
      }
    },
    newGuid() {
      let s4 = function() {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      };
      return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-4" +
        s4().substr(0, 3) +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
      ).toUpperCase();
    }
  }
};
</script>

<style>
/* #ifndef APP-PLUS */
page {
  width: 100%;
  min-height: 100%;
  display: flex;
}

/* #endif */

.tabs {
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
  /* #ifdef MP-ALIPAY || MP-BAIDU */
  height: 100vh;
  /* #endif */
}

.scroll-h {
  width: 750upx;
  height: 80upx;
  flex-direction: row;
  /* #ifndef APP-PLUS */
  white-space: nowrap;
  /* #endif */
  /* flex-wrap: nowrap; */
  /* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
}
swiper {
  position: relative;
  border: 0 solid #000;
  box-sizing: border-box;
  height: 100%;
}
.line-h {
  height: 1upx;
  background-color: #cccccc;
}

.uni-tab-item {
  /* #ifndef APP-PLUS */
  display: inline-block;
  /* #endif */
  flex-wrap: nowrap;
  padding-left: 34upx;
  padding-right: 34upx;
}

.uni-tab-item-title {
  color: #555;
  font-size: 30upx;
  height: 80upx;
  line-height: 80upx;
  flex-wrap: nowrap;
  /* #ifndef APP-PLUS */
  white-space: nowrap;
  /* #endif */
}

.uni-tab-item-title-active {
  color: #007aff;
}

.swiper-box {
  flex: 1;
}

.swiper-item {
  flex: 1;
  flex-direction: row;
}

.scroll-v {
  flex: 1;
  /* #ifndef MP-ALIPAY */
  flex-direction: column;
  /* #endif */
  width: 750upx;
}

.update-tips {
  position: absolute;
  left: 0;
  top: 41px;
  right: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #fddd9b;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.update-tips-text {
  font-size: 14px;
  color: #ffffff;
}

.refresh {
  width: 750upx;
  height: 64px;
  justify-content: center;
}

.refresh-view {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.refresh-icon {
  width: 30px;
  height: 30px;
  transition-duration: 0.5s;
  transition-property: transform;
  transform: rotate(0deg);
  transform-origin: 15px 15px;
}

.refresh-icon-active {
  transform: rotate(180deg);
}

.loading-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: #999999;
}

.loading-text {
  margin-left: 2px;
  font-size: 16px;
  color: #999999;
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
.table-head,
.table-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
.table-head {
  padding: 0 20upx;
  background-color: #f5f5f6;
}
.table-item {
    padding: 10upx 20upx;
}
.table-head::after,
.table-item::after {
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
.table-head > text,
.table-item > text {
  flex: 1;
  text-align: center;
}

.table-item > .btn-edit {
      margin-left: 5px;
    font-size: 12px;
text-align: center;
    text-decoration: none;
    line-height: 2.55555556;
    border-radius: 5px;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    color: #000;
    background-color: #f8f8f8;
}
</style>
