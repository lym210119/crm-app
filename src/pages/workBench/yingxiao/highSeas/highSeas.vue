<template>
  <view class="high-seas-page">
    <view class="filter-btn-group">
      <view
        class="type"
        :class="{ active: mask === 1 }"
        @tap="handleOperation(1)"
        >客户类型 <text class="iconfont icon-arrow-right"></text
      ></view>
      <!-- <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >接通状态 <text class="iconfont icon-arrow-right"></text
      ></view> -->
      <picker
        class="staff"
        :class="{ active: mask === 3 }"
        
        >员工 <text class="iconfont icon-arrow-right"></text
      ></picker>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="type-container" v-show="mask === 1">
        <view>潜在</view>
        <view>意向</view>
        <view>需求</view>
        <view>签单</view>
        <view>放款</view>
      </view>
      <!-- <view class="sort-container" v-show="mask === 2">
        <view @tap.stop="selectSort('呼入无坐席')">呼入无坐席</view>
        <view @tap.stop="selectSort('呼入未接')">呼入未接</view>
        <view @tap.stop="selectSort('呼入已接')">呼入已接</view>
        <view @tap.stop="selectSort('呼出未接')">呼出未接</view>
        <view @tap.stop="selectSort('呼出已接')">呼出已接</view>
      </view> -->
      <!-- <view class="filter-container" v-show="mask === 3">
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
          <view style="color: #007AFF;">自定义筛选</view>
          <view class="filter-btn-group">
            <button type="primary" size="mini" plain="true">重置</button>
            <button type="primary" size="mini">完成</button>
          </view>
        </view>
      </view> -->
    </view>
    <view class="list-container">
      <scroll-view
        scroll-y="true"
        enableBackToTop="true"
        @scrolltolower="loadMore()"
        style="flex:1"
      >
        <view class="item" v-for="item in listData" :key="item.id">
          <label>
            <checkbox :value="item.cusId" :checked="item.checked" />
          </label>
          <view class="item-right">
            <view class="item-right-top">
              <view>
                <text>{{ item.cusName }} ({{ item.cusId }})</text>
                <text class="cus-type">{{ item.type }}</text>
                 
              </view>
              <view style="font-size: 24upx;">{{ item.inputTime }}</view>
            </view>
            <view class="item-right-center">
              <text>营销经理：{{ item.manageName }}</text>
              <text>信息来源：网络渠道</text>
            </view>
            <view class="item-right-bottom">
              <text v-if="item.follow"
                >跟进记录：{{ item.follow }}</text
              >
              <text v-else style="color: red;">请及时跟进</text>
            </view>
          </view>
        </view>
        <view class="loading-more" v-if="isLoading || listData.length > 10">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </scroll-view>
    </view>

    <view class="fixed-bottom">
      <checkbox-group @change="changeAll" style="width: auto;">
        <label> <checkbox value="all" :checked="false" /> 全选 </label>
      </checkbox-group>
      <view class="operation" style="flex:1">
        <!-- <picker style="line-height: 0;" @change="bindPickerChange" :value="index" :range="array"> -->
        <button type="primary" size="mini" @tap="handleGrab">
          抓取
        </button>

        <!-- </picker> -->
        <button type="warn" size="mini" @tap="handleRemove">删除</button>
        <button type="primary" size="mini" @tap="handleLunhu">随机轮呼</button>
        <!-- <button type="warn" size="mini" @tap="handleRemove">轮呼</button> -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          id: 1,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        }
      ],
      mask: false,
      isLoading: false,
      loadingText: "加载更多..."
    };
  },
  methods: {
    // 全选
    changeAll(e) {
      let values = e.detail.value;
      let isChecked = values.length ? true : false;

      this.listData.forEach(item => {
        this.$set(item, "checked", isChecked);
      });
    },
    // 抓取
    handleGrab() {
      uni.showModal({
        title: '提示',
        content: '确定要把选中的客户抓取到自己的名下吗？',
        success: res => {
          if (res.confirm) {
            
          }
        }
      })
    },
    // 删除
    handleRemove() {
      uni.showModal({
        title: '提示',
        content: '确定要把选中的客户删除吗？',
        success: res => {
          if (res.confirm) {
            
          }
        }
      })
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
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "3837",
          inputTime: "2019-12-24 11:26:48",
          type: "潜在",
          manageName: "张三",
          follow: "最后一次跟进记录"
        }
      ];
      this.listData = this.listData.concat(data);
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
.high-seas-page {
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
  position: relative;
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
.filter-btn-group > button {
  margin: 0 10upx;
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
.cus-type {
  margin-left: 20upx;
  padding: 4upx 10upx; 
  font-size: 20upx;
  background-color: #19aa8d;
  border-radius: 8upx;
  color: #fff;
}
</style>
