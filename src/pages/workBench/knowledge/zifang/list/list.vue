<template>
  <!-- 资方配置列表 -->
  <view class="zifang-list-page">
    <view class="search-bar">
      <view class="input-view">
        <uni-icons
          class="input-uni-icon"
          type="search"
          size="22"
          color="#666666"
        />
        <input
          confirm-type="search"
          class="nav-bar-input"
          type="text"
          placeholder="输入资方名称"
          @confirm="confirm"
        />
      </view>
      <button class="btn-primary" size="mini">搜索</button>
    </view>
    <view class="list-container">
      <view class="list-container">
        <scroll-view
          scroll-y="true"
          enableBackToTop="true"
          @scrolltolower="loadMore()"
          style="flex:1"
        >
          <view class="item" v-for="item in listData" :key="item.id">
            <view class="item-right">
              <view class="item-right-top">
                <view>
                  <text>平安银行 （银行）</text>
                </view>
                <view>电话：1110</view>
              </view>
              <view class="item-right-center">
                <text>负责人：张三</text>
                <!-- <text>座席号：6008</text> -->
              </view>
              <view class="item-right-center">
                <text>地址：湖北武汉新洲旧街街</text>
              </view>
            </view>
          </view>

          <view class="loading-more" v-if="isLoading || listData.length > 10">
            <text class="loading-more-text">{{ loadingText }}</text>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue";
export default {
  components: {
    uniIcons
  },
  data() {
    return {
      listData: [
        {
          id: 1,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        }
      ],
      isLoading: false,
      loadingText: "加载更多..."
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/workBench/knowledge/zifang/add/add"
    });
  },
  methods: {
    loadMore(e) {
      setTimeout(() => {
        this.getList();
      }, 500);
    },
    getList(i) {
      let data = [
        {
          id: 1,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",

          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "guwen1",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        }
      ];

      this.listData = this.listData.concat(data);
    }
  }
};
</script>

<style>
.zifang-list-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.search-bar {
  /* width: 100%; */
  height: 80upx;
  padding: 0 30upx;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.search-bar::after {
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
.btn-primary {
  background-color: #1ab394;
  margin-left: 20upx;
  color: #ffffff;
}
.input-view {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  /* width: 500rpx;
 */
  flex: 1;
  background-color: #f8f8f8;
  height: 30px;
  border-radius: 15px;
  padding: 0 15px;
  flex-wrap: nowrap;
  margin: 7px 0;
  line-height: 30px;
}

.input-uni-icon {
  line-height: 30px;
}
.nav-bar-input {
  height: 30px;
  line-height: 30px;
  /* #ifdef APP-PLUS-NVUE */
  width: 370rpx;
  /* #endif */
  padding: 0 5px;
  font-size: 28rpx;
  background-color: #f8f8f8;
}
.list-container {
  flex: 1;
  display: flex;
  width: 100%;
  overflow: hidden;
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
  /* margin-left: 20upx; */
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
</style>
