<template>
  <!-- 做单报销 -->
  <view class="contract-confirm-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">费用类别</view>
          <view class="item-value">
            <picker
              :range="feeType"
              :value="feeTypeIndex"
              @change="changeFeeType"
              name="feeType"
            >
              <text :class="{ selected: feeTypeIndex === null }">{{
                feeTypeIndex === null ? "请选择费用类别" : feeType[feeTypeIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">报销金额</view>
          <view class="item-value">
            <input type="digit" name="amount" placeholder="请输入报销金额" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">收费经理</view>
          <view class="item-value" @tap="selectPerson">
            <input
              v-show="false"
              type="text"
              name="tollPerson"
              :value="tollPersonVal"
            />
            <text :class="{ 'text-gray': !tollPersonLabel }">{{
              tollPersonLabel ? tollPersonLabel : "请选择收费经理"
            }}</text>
          </view>
          <!-- <text class="iconfont icon-arrow-right1"></text> -->
        </view>

        <view class="list-textarea">
          <view class="item-label">报销备注</view>
          <view class="item-value">
            <textarea name="remark" placeholder="请输入报销备注" />
          </view>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
    <w-picker
      v-if="tollPersonList.length != 0"
      mode="linkage"
      :level="3"
      @confirm="onPerson"
      ref="person"
      :linkList="tollPersonList"
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
      feeType: ["交通费", "办公用品", "其他报销"],
      feeTypeIndex: null,
      tollPersonList: [],
      tollPersonVal: "",
      tollPersonLabel: "",
      intoType: [
        { value: "1", name: "抵押" },
        { value: "2", name: "信贷" }
      ],
      collectType: [
        { value: "1", name: "按比例" },
        { value: "2", name: "按笔数" }
      ],
      collectTypeIndex: null,
      assessmentCollectRate: ["1%", "2%", "3%"],
      assessmentCollectRateIndex: null
    };
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    changeFeeType(e) {
      this.feeTypeIndex = e.detail.value;
    },
    selectPerson() {
      this.$minApi.getZuodanrenyuan().then(res => {
        this.tollPersonList = res.data;
        setTimeout(() => {
          this.$refs.person.show();
        }, 50);
      });
    },
    onPerson(e) {
      console.log(e);
      this.tollPersonVal = e.checkValue.join(",");
      this.tollPersonLabel = e.checkArr.join(" | ");
    },
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    }
  }
};
</script>

<style>
.contract-confirm-page {
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
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}
.item-value input {
  /* padding-right: 20upx; */
  text-align: right;
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
.item-label.required::after {
  content: "*";
  color: red;
}
.selected {
  color: #848484;
}
.text-gray {
  color: gray;
}
</style>
