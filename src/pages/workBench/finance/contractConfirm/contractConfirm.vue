<template>
  <!-- 合同确认 -->
  <view class="contract-confirm-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">客户姓名</view>
          <view class="item-value">
            <input type="text" name="cusName" placeholder="请输入客户姓名" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">身份证号</view>
          <view class="item-value">
            <input type="text" name="IDcard" placeholder="请输入身份证号" />
          </view>
        </view>

        <view class="list-item">
          <view class="item-label required">进件类型</view>
          <view class="item-value">
            <radio-group name="intoType">
              <label
                class=""
                v-for="(item, index) in intoType"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">贷款金额</view>
          <view class="item-value">
            <input type="text" name="loanMoney" placeholder="请输入贷款金额" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">已收定金</view>
          <view class="item-value">
            <input type="text" name="deposit" placeholder="请输入已收定金" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">收费方式</view>
          <view class="item-value">
            <radio-group name="collectType">
              <label
                class=""
                v-for="(item, index) in collectType"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">贷款收费</view>
          <view class="item-value">
            <input
              type="text"
              name="loanCollect"
              placeholder="请输入贷款收费"
            />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">评估方式</view>
          <view class="item-value">
            <radio-group
              name="assessmentMethod"
              @change="changeAssessmentMethod"
            >
              <label
                class=""
                v-for="(item, index) in collectType"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-item" v-if="collectTypeIndex">
          <view class="item-label required">评估收费</view>
          <view class="item-value">
            <picker
              v-show="collectTypeIndex == 1"
              @change="changeAssessmentCollectRate"
              :value="assessmentCollectRateIndex"
              :range="assessmentCollectRate"
            >
              <text
                :class="{ selected: assessmentCollectRateIndex === null }"
                >{{
                  assessmentCollectRateIndex === null
                    ? "请选择"
                    : assessmentCollectRate[assessmentCollectRateIndex]
                }}</text
              >
            </picker>
            <input
              v-show="collectTypeIndex == 2"
              type="text"
              name="assessmentCollect"
              placeholder="请输入评估收费"
            />
          </view>
          <text v-show="collectTypeIndex == 2">元</text>
        </view>
        <view class="list-textarea">
          <view class="item-label">收费说明</view>
          <view class="item-value">
            <textarea name="collectExplain" placeholder="请输入收费说明" />
          </view>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>

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
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    },
    // 评估方式百分比选择
    changeAssessmentCollectRate(e) {
      this.assessmentCollectRateIndex = e.detail.value;
    },
    changeAssessmentMethod(e) {
      console.log(e.detail.value);
      this.collectTypeIndex = e.detail.value;
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
  padding-right: 20upx;
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
