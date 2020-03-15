<template>
  <!-- 任务分配 -->
  <view class="focus-follow-page">
    <view class="filter-btn-group">
      <view
        class="type"
        :class="{ active: mask === 1 }"
        @tap="handleOperation(1)"
        >状态 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >筛选 <text class="iconfont icon-arrow-right"></text
      ></view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="type-container" v-show="mask === 1" @tap.stop="">
        <view>-- 全部 --</view>
        <view>-- 新的 --</view>
        <view>-- 引导 --</view>
        <view>-- 停止 --</view>
        <view>-- 暂停 --</view>
        <view>-- 继续 --</view>
        <view>-- 运行 --</view>
        <view>-- 完成 --</view>
      </view>
      <view class="sort-container" v-show="mask === 2" @tap.stop="">
        <view class="time-select">
          <view class="time-select-label">
            时间
          </view>
          <view class="time-select-list">
            <view class="picker-data-container">
              <picker
                mode="date"
                :value="startDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindStartDateChange"
              >
                <view class="uni-input">{{
                  startDateVal ? startDateVal : "开始时间"
                }}</view>
              </picker>
              <view class="">
                --
              </view>
              <picker
                mode="date"
                :value="endDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindEndDateChange"
              >
                <view class="uni-input">{{
                  endDateVal ? endDateVal : "结束时间"
                }}</view>
              </picker>
            </view>
          </view>
        </view>
        <view class="filter-bottom">
          <!-- <view style="color: #007AFF;">自定义筛选</view> -->

          <button
            type="primary"
            size="mini"
            plain="true"
            @tap.stop="filterReset"
          >
            重置
          </button>
          <button type="primary" size="mini" @tap="filterConfirm">确定</button>
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
          v-for="item in listData"
          :key="item.id"
        >
          <view class="item-right">
            <view class="item-right-top">
              <view>
                <text>任务名称 </text>
                <text class="cus-type">当前状态</text>
              </view>
              <view style="font-size: 24upx;">先呼客户转入队列</view>
            </view>
            <view class="item-right-center">
              <text>开始日期：2019-11-19</text>
              <text>结束日期：2020-03-13</text>
            </view>
            <view class="item-right-center">
              <text>上午时段：09:00~12:00</text>
              <text>下午时段：13:00~18:00</text>
            </view>
            <view class="item-right-bottom">
              <button class="btn-primary" @tap="toEdit('edit')">修改</button>
              <button class="btn-success">启动</button>
              <button class="btn-danger">删除</button>
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
      :level="3"
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
      startDateVal: null,
      endDateVal: null,
      isLoading: false,
      loadingText: "加载更多...",
      listData: [
        {
          id: 1,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        }
      ],
      mask: false,
      linkList: [
        {
          label: "中心1",
          value: "10000",
          children: [
            {
              label: "部门1",
              value: "",
              children: [
                {
                  label: "员工1",
                  value: "20"
                }
              ]
            }
          ]
        },
        {
          label: "中心2",
          value: "10000",
          children: [
            {
              label: "部门2",
              value: "",
              children: [
                {
                  label: "员工2",
                  value: "20"
                }
              ]
            }
          ]
        }
      ],
      dateRangeList: [
        {
          id: 1,
          label: "网络渠道"
        },
        {
          id: 2,
          label: "广告渠道"
        },
        {
          id: 3,
          label: "热线直呼"
        },
        {
          id: 4,
          label: "市场推广"
        },
        {
          id: 5,
          label: "其他渠道"
        },
        {
          id: 6,
          label: "客户转介绍"
        }
      ],
      selectedId: [],
      grabArr: []
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  onLoad() {},
  onNavigationBarButtonTap(e) {
    this.toEdit('')
  },
  methods: {
    toEdit(isEdit) {
      uni.navigateTo({
        url: '/pages/workBench/call/task/add/add?type=' + isEdit
      })
    },
    clickItem() {
      uni.navigateTo({
        url: "/pages/workBench/yingxiao/sign/detail/detail"
      });
    },
    bindStartDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) > this.timeStr(this.endDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.startDateVal = e.target.value;
    },
    bindEndDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) < this.timeStr(this.startDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.endDateVal = e.target.value;
    },
    timeStr(data) {
      console.log(data);
      if (data) {
        return new Date(data.split("-").join("/")).getTime();
      }
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 10; // 时间范围限制
      } else if (type === "end") {
        year = year + 10;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },

    selectedPerson() {
      if (this.grabArr.length) {
        this.$refs.linkage.show();
      } else {
        uni.showToast({
          icon: "none",
          title: "请先选择客户"
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
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",

          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 2,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 3,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 4,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 5,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 6,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 7,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 8,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 9,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        },
        {
          id: 10,
          cusName: "胡德兵",
          cusId: "3837",
          phone: "1388889999",
          type: "待审核",
          manageName: "张三",
          follow: "2020-03-02"
        }
      ];

      this.listData = this.listData.concat(data);
    },
    filterConfirm() {},
    filterReset() {
      this.selectedId = [];
    },
    selectedItem(item) {
      console.log(this.selectedId.includes(item.id));
      if (this.selectedId.includes(item.id)) {
        console.log("inclues");
        var index = this.selectedId.indexOf(item.id);
        this.selectedId.splice(index, 1);
      } else {
        this.selectedId.push(item.id);
      }
    },
    // 筛选员工
    selectStaff() {
      this.$refs.linkage.show();
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
.focus-follow-page {
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
.item-right-center {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24upx;
}
.item-right-bottom {
text-align: right;
  font-size: 24upx;
}
.item-right-bottom>button {
  display: inline-block;
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
.filter-btn-group > button {
  margin: 0 10upx;
}
.status.active,
.type.active,
.staff.active {
  color: #007aff;
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
.sort-container > view:last-child,
.type-container > view:last-child {
  border: none;
}
.time-select {
  display: flex;
  flex-direction: column;
  padding: 20upx 30upx;
  background-color: #ffffff;
  border-bottom: 1upx solid #f1f1f1;
}

.time-select-label {
  line-height: 80upx;
  flex-shrink: 0;
  font-size: 28upx;
  color: #999999;
}

.time-select-list {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.time-select-item {
  width: 150upx;
  height: 64upx;
  line-height: 64upx;
  margin: 15upx 20upx;
  background-color: #f4f4f4;
  border-radius: 10upx;
  color: #666666;
  text-align: center;
  font-size: 24upx;
}

.time-select-item.selected {
  background-color: #007aff;
  color: #ffffff;
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
  justify-content: space-around;
}
.fixed-bottom .operation button {
  padding: 0 1em;
  margin: 0;
  /* margin-left: 20upx; */
  font-size: 24upx;
}

.picker-data-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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
