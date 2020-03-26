<template>
  <!-- 员工档案 -->
  <view class="staff-files-page">
    <view class="filter-btn-group">
      <view
        class="type"
        :class="{ active: mask === 1 }"
        @tap="handleOperation(1)"
        >状态 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view class="staff" :class="{ active: mask === 4 }" @tap="selectStaff"
        >部门 <text class="iconfont icon-arrow-right"></text
      ></view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="type-container" v-show="mask === 1" @tap.stop="">
        <view>在职</view>
        <view>离职</view>
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
          v-for="item in listData"
          :key="item.id"
          @tap="clickItem"
        >
          <view class="item-right">
            <view class="item-right-top">
              <view>
                <text>{{ item.cusName }} ({{ item.cusId }})</text>
              </view>
              <view>角色权限：营销专员</view>
            </view>
            <view class="item-right-center">
              <text>所属部门：营销①中心 - ①-2</text>
              <text>座席号：6008</text>
            </view>
            <view class="item-right-center">
              <text>员工状态：离职</text>
              <text>客户电话是否可见：是</text>
            </view>
          </view>
        </view>

        <view class="loading-more" v-if="isLoading || listData.length > 10">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </scroll-view>
    </view>
    <w-picker
      mode="linkage"
      :level="2"
      @confirm="onConfirm"
      ref="linkage"
      :linkList="linkList"
      themeColor="#007aff"
    ></w-picker>
  </view>
</template>

<script>
import wPicker from "@/components/w-picker/w-picker.vue";
export default {
  components: {
    wPicker
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
      loadingText: "加载更多...",
      linkList: [
        {
          label: "中心1",
          value: "10000",
          children: [
            {
              label: "部门1",
              value: ""
            }
          ]
        },
        {
          label: "中心2",
          value: "10000",
          children: [
            {
              label: "部门2",
              value: ""
            }
          ]
        }
      ],
      mask: false
    };
  },
  methods: {
    clickItem() {
      uni.navigateTo({
        url: "/pages/workBench/hr/addStaff/addStaff?type=edit"
      });
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
    },
    selectStaff() {
      this.$refs.linkage.show();
    },
    clickMask() {
      this.mask = false;
    },
    handleOperation(flag) {
      console.log(this.mask);
      if (flag === 0) {
        // this.isOpenOperationBtn = !this.isOpenOperationBtn;
        this.mask = 0;
      } else {
        this.mask = flag;
        // this.isOpenOperationBtn = false;
      }
    }
  }
};
</script>

<style>
.staff-files-page {
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
.filter-btn-group {
  width: 100%;
  height: 80upx;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.filter-btn-group .iconfont {
  font-size: 22upx;
  vertical-align: middle;
  margin: 0 8upx;
  color: #cccccc;
}
.filter-btn-group::after {
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
.mask-wrap {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 7;
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
</style>
