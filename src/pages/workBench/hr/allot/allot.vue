<template>
  <!-- 任务分配详情 -->
  <view class="task-allot-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">月份</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="month"
              :value="monthArr[monthIndex]"
            />
            <picker
              :value="monthIndex"
              :range="monthArr"
              @change="bindMonthChange"
            >
              <!-- <view class="uni-input">{{ date }}</view> -->
              <text :class="{ 'text-gray': monthIndex === null }">{{
                monthIndex === null ? "请选择月份" : monthArr[monthIndex]
              }}</text>
            </picker>
          </view>
          <text class="item-unit">月</text>
        </view>

        <!-- 营销任务 -->
        <block>
          <view class="list-item">
            <view class="item-label required">日通话时长</view>
            <view class="item-value">
              <input
                type="text"
                name="dayCallDuration"
                placeholder="请输入日通话时长"
              />
            </view>
            <text class="item-unit">分</text>
          </view>
          <view class="list-item">
            <view class="item-label required">月上门数</view>
            <view class="item-value">
              <input
                type="text"
                name="monthVisitNum"
                placeholder="请输入月上门数"
              />
            </view>
            <text class="item-unit">个</text>
          </view>
          <view class="list-item">
            <view class="item-label required">月签单金额</view>
            <view class="item-value">
              <input
                type="text"
                name="monthSignMoney"
                placeholder="请输入月签单金额"
              />
            </view>
            <text class="item-unit">万元</text>
          </view>
        </block>

        <!-- 渠道任务 -->
        <block>
        <view class="list-item">
          <view class="item-label required">月放款数</view>
          <view class="item-value">
            <input
              type="text"
              name="monthSignNum"
              placeholder="请输入月放款数"
            />
          </view>
          <text class="item-unit">笔</text>
        </view>
        </block>


        <view class="list-item">
          <view class="item-label required">月放款金额</view>
          <view class="item-value">
            <input
              type="text"
              name="monthMakeLoanMoney"
              placeholder="请输入月放款金额"
            />
          </view>
          <text class="item-unit">万元</text>
        </view>
        <view class="list-item">
          <view class="item-label required">月创收金额</view>
          <view class="item-value">
            <input
              type="text"
              name="monthIncomeMoney"
              placeholder="请输入月创收金额"
            />
          </view>
          <text class="item-unit">元</text>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
      <w-picker
        v-if="departmentList.length != 0"
        mode="linkage"
        :level="2"
        @confirm="onDepartment"
        ref="linkage"
        :linkList="departmentList"
        themeColor="#007aff"
      ></w-picker>
    </scroll-view>
  </view>
</template>

<script>
import wPicker from "@/components/w-picker/w-picker.vue";

export default {
  components: {
    wPicker
  },
  onLoad(opts) {},
  data() {
    return {
      monthIndex: null,
      departmentValue: "",
      departmentLabel: "",
      departmentList: [],
      authIndex: null,
      authList: [
        "管理员",
        "营销专员",
        "营销主管",
        "营销总监",
        "做单专员",
        "做单主管",
        "做单总监",
        "财务会计",
        "总机客服",
        "行政人事",
        "总经理"
      ],
      authTypeIndex: null,
      authTypeList: ["普通", "部门", "中心", "公司"],
      phoneVisibleIndex: null,
      phoneVisible: ["不可见", "仅自己可见", "全部可见"]
    };
  },
  computed: {
    monthArr() {
      return Array.from(new Array(12).keys(), x => x + 1);
    }
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    },
    bindChangePhoneVisible(e) {
      this.phoneVisibleIndex = e.target.value;
    },
    bindChangeAuth(e) {
      this.authIndex = e.target.value;
    },
    bindChangeAuthType(e) {
      this.authTypeIndex = e.target.value;
    },
    getDepartment() {
      this.$minApi.getDepartment().then(res => {
        console.log(res);
        this.departmentList = res.data;
        setTimeout(() => {
          this.$refs.linkage.show();
        }, 50);
      });
    },
    onDepartment(e) {
      console.log(e);
      this.departmentValue = e.checkValue.join(",");
      this.departmentLabel = e.checkArr.join(" | ");
    },
    bindMonthChange(e) {
      console.log(123);
      this.monthIndex = e.target.value;
    }
  }
};
</script>

<style>
.task-allot-page {
  height: 100%;
  background-color: #ffffff;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
}
.item-label.required::after {
  content: "*";
  color: red;
}
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}

.item-value input {
  /* padding-right: 20upx; */
  text-align: right;
}
.item-unit {
  margin-left: 10upx;
}
.text-gray {
  color: gray;
}
.list-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
}
.list-textarea .item-label {
  height: 94upx;
  line-height: 94upx;
}
.list-textarea > .item-value {
  width: 100%;
}
.list-textarea textarea {
  flex: 1;
  font-size: 32upx;
  width: 100%;
  height: 160upx;
  text-align: left;
}
</style>
