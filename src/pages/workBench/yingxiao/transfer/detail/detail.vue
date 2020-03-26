<template>
  <view class="transfer-detail-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="header">
        <view class="header-item">
          <view class="item-label">员工姓名：</view>
          <view>张山</view>
        </view>
        <view class="header-item"
          ><view class="item-label">联系电话：</view
          ><view>13888998899</view></view
        >
        <view class="header-item"
          ><view class="item-label">离职时间：</view
          ><view>2020-03-23</view></view
        >
      </view>
      <view class="list-item">
        <view class="item-label">转移到</view>
        <view class="item-value" @tap="selectStaff">
          <input v-show="false" type="text" name="staff" :value="staffValue" />
          <text :class="{ 'text-gray': !staffLable }">{{
            staffLable ? staffLable : "请选择员工"
          }}</text>
        </view>
        <text class="iconfont icon-arrow-right1"></text>
      </view>

      <view class="transfer-item" v-for="(item, i) in transferList" :key="i">
        <view class="item-have"
          >{{ item.label }}：
          <text style="color:red;">{{ item.hasNum }}</text></view
        >
        <view class="item-set"
          >转移数：<input type="text" :value="item.transferNum"
        /></view>
        <button type="primary" size="mini" @tap="clickTransfer(item)">转移</button>
      </view>
      <view class="list-item">
        <view class="item-label required">是否转完数据</view>
        <view class="item-value">
          <radio-group name="assessmentMethod" @change="changeAssessmentMethod">
            <label
              class=""
              v-for="(item, index) in isTransferNull"
              :key="item.value"
            >
              <radio :value="item.value" />
              {{ item.name }}
            </label>
          </radio-group>
        </view>
      </view>
    </scroll-view>
    <wPicker
      v-if="staffList.length"
      ref="staff"
      mode="linkage"
      level="3"
      @confirm="onConfirm"
      :linkList="staffList"
      themeColor="#007aff"
    >
    </wPicker>
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
      isTransferNull: [
        { value: "1", name: "是" },
        { value: "2", name: "否" }
      ],
      staffValue: "",
      staffLable: "",
      staffList: [],
      transferList: [
        {
          label: "潜在客户数",
          hasNum: 60,
          transferNum: 0
        },
        {
          label: "意向客户数",
          hasNum: 60,
          transferNum: 0
        },
        {
          label: "需求客户数",
          hasNum: 60,
          transferNum: 0
        },
        {
          label: "签单客户数",
          hasNum: 60,
          transferNum: 0
        },
        {
          label: "放款客户数",
          hasNum: 60,
          transferNum: 0
        },
        {
          label: "客户总数",
          hasNum: 60,
          transferNum: 0
        }
      ]
    };
  },
  methods: {
    selectStaff() {
      this.$minApi.getZuodanrenyuan().then(res => {
        console.log(res);
        this.staffList = res.data;
        setTimeout(() => {
          this.$refs.staff.show();
        }, 50);
      });
    },
    onConfirm(e) {
      console.log(e);
      this.staffValue = e.checkValue.join(",");
      this.staffLable = e.checkArr.join(" | ");
    }
  }
};
</script>

<style>
.transfer-detail-page {
  height: 100%;
  overflow: hidden;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10upx 30upx;
}
.header-item .item-label {
  color: gray;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
  background-color: #ffffff;
}
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}
.item-value input {
  padding-right: 20upx;
  text-align: right;
}
.text-gray {
  color: gray;
}
.transfer-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  background-color: #ffffff;
  border-bottom: 1upx solid #f2f2f2;
}
.transfer-item .item-set {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.transfer-item .item-set input {
  width: 100upx;
}
</style>
