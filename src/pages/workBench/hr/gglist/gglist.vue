<template>
  <!-- 公告管理和公告列表 -->
  <view class="gglist-page">
    <view class="list-container">
      <scroll-view
        scroll-y="true"
        enableBackToTop="true"
        @scrolltolower="loadMore()"
        style="flex:1"
      >
        <uni-swipe-action v-for="item in listData" :key="item.id">
          <uni-swipe-action-item
            :options="options"
            :autoClose="false"
            @click="onClick"
            @change="change"
          >
            <view class="item" @tap="clickItem(item)">
              <view class="item-title">{{ item.title }}</view>
              <view class="item-info">
                <text>{{ item.type }}</text>
                <text>{{ item.user + ' ' + item.time }}</text>
              </view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
        <view class="loading-more" v-if="isLoading || listData.length > 10">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
import uniSwipeActionItem from "@/components/uni-swipe-action-item/uni-swipe-action-item.vue";
export default {
  components: {
    uniSwipeAction,
    uniSwipeActionItem
  },
  data() {
    return {
      isLoading: false,
      loadingText: "加载更多...",
      listData: [
        {
          id: 1,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: '张三'
        },
        {
          id: 2,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 3,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 4,
          title:
            "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 5,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 6,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 7,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 8,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 9,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 10,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        }
      ],
      options: [
        {
          text: "编辑",
          style: {
            backgroundColor: "#007aff"
          }
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ]
    };
  },
  methods: {
    clickItem(item) {
      uni.navigateTo({
        url: "/pages/workBench/hr/ggdetail/ggdetail"
      });
    },
    change(open) {
      console.log("当前开启状态：" + open);
    },
    onClick(e) {
      console.log(
        "当前点击的是第" + e.index + "个按钮，点击内容是" + e.content.text
      );
      if (e.index === 0) {
        uni.navigateTo({
          url: "/pages/workBench/hr/annouce/annouce?type=edit"
        });
      } else {
        uni.showModal({
          title: "提示",
          content: "确定删除该条公告吗",
          success: res => {
            if (res.confirm) {
            }
          }
        });
      }
    },
    loadMore(e) {
      setTimeout(() => {
        this.getList();
      }, 500);
    },
    getList(i) {
      let data = [
        {
          id: 1,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 2,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 3,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 4,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 5,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 6,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 7,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 8,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 9,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        },
        {
          id: 10,
          title: "这是一条公告标题啊啊啊啊啊啊啊啊啊啊啊",
          type: "公司制度",
          time: "2020-03-06",
          user: "张三"
        }
      ];

      this.listData = this.listData.concat(data);
    }
  }
};
</script>

<style>
.gglist-page {
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
.item {
  display: flex;
  flex-direction: column;
  padding: 20upx 30upx;
  background-color: #ffffff;
  position: relative;
  width: 100%;
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
.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24upx;
  color: gray;
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
