<template>
  <!-- 回访记录 -->
  <view class="focus-follow-page">
    <view class="filter-btn-group">
      <view
        class="status"
        :class="{ active: mask === 2 }"
        @tap="handleOperation(2)"
        >筛选 <text class="iconfont icon-arrow-right"></text
      ></view>
      <view class="staff" :class="{ active: mask === 3 }" @tap="selectStaff"
        >营销人员 <text class="iconfont icon-arrow-right"></text
      ></view>

    </view>
    <view class="mask-wrap" v-show="mask" @tap="clickMask">
      <view class="sort-container" v-show="mask === 2" @tap.stop="">
        <view class="time-select">
          <view class="time-select-label">
            回访类型
          </view>
          <view class="time-select-list">
            <view
              class="time-select-item"
              :class="{ selected: selectedId.includes(item.id) }"
              v-for="item in dateRangeList"
              :key="item.id"
              @tap.stop="selectedItem(item)"
              >{{ item.label }}</view
            >
          </view>
        </view>

        <view class="time-select">
          <view class="time-select-label">
            回访时间
          </view>
          <view class="time-select-list">
            <view class="picker-data-container">
              <picker
                mode="date"
                :value="hfStartDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindStartDateChange($event, 'hf')"
              >
                <view class="uni-input">{{
                  hfStartDateVal ? hfStartDateVal : "开始时间"
                }}</view>
              </picker>
              <view class="">
                --
              </view>
              <picker
                mode="date"
                :value="hfEndDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindEndDateChange($event, 'hf')"
              >
                <view class="uni-input">{{
                  hfEndDateVal ? hfEndDateVal : "结束时间"
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
        <view class="item" v-for="item in listData" :key="item.id">
          <view class="item-right">
            <view class="item-right-top">
              <view>
                <text>{{ item.cusName }} ({{ item.cusId }})</text>
              </view>
              <view>回访类型：节日回访</view>
            </view>
            <view class="item-right-center">
              <text>回访人员：张三</text>
              <text
                >回访时间：2020-01-13</text
              >
            </view>
            <view class="item-right-bottom">
              <text>回访内容：回访内容回访内容回访内容回访内容回访内容回访内容</text>
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
      dateRangeList: [
        {
          id: 1,
          label: "辅助销售"
        },
        {
          id: 2,
          label: "签单回访"
        },
        {
          id: 3,
          label: "放款回访"
        },
        {
          id: 4,
          label: "节日回访"
        },
        {
          id: 5,
          label: "活动推荐"
        },
        {
          id: 6,
          label: "退单原因"
        }
      ],
      selectedId: [],
      hfStartDateVal: null,
      hfEndDateVal: null,
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
      ]
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
  methods: {
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
    bindStartDateChange: function(e, type) {
      console.log(e.target.value);
      var endVal = type === "hf" ? this.hfEndDateVal : this.fkEndDateVal;
      if (this.timeStr(e.target.value) > this.timeStr(endVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      if (type === "hf") {
        this.hfStartDateVal = e.target.value;
      } else {
        this.fkStartDateVal = e.target.value;
      }
    },
    bindEndDateChange: function(e, type) {
      console.log(e.target.value);
      var startVal = type === "hf" ? this.hfStartDateVal : this.fkStartDateVal;
      if (this.timeStr(e.target.value) < this.timeStr(startVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      if (type === "hf") {
        this.hfEndDateVal = e.target.value;
      } else {
        this.fkEndDateVal = e.target.value;
      }
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
      this.hfStartDateVal = null;
      this.hfEndDateVal = null;
      this.selectedId = []
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
  line-height: 60upx;
  flex-shrink: 0;
  font-size: 28upx;
  color: #999999;
}

.time-select-list {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 20upx;
}

.time-select-item {
  /* width: 150upx; */
  /* height: 64upx; */
  /* line-height: 64upx; */
  padding: 10upx 30upx;
  margin: 10upx;
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
.btn-confirm,
.btn-void {
  background-color: #19aa8d;
  padding: 0 0.8em;
  color: #ffffff;
  border-radius: 8upx;
  margin-left: 10upx;
}
.btn-void {
  background-color: #ed5565;
}
</style>
