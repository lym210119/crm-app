<template>
  <view class="add-sign-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">委托甲方</view>
          <view class="item-value">
            <input type="text" name="partyA" placeholder="请输入委托甲方" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">身份证号</view>
          <view class="item-value">
            <input type="text" name="IDcard" placeholder="请输入身份证号" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">联系地址</view>
          <view class="item-value">
            <input type="text" name="address" placeholder="请输入联系地址" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">资方</view>
          <view class="item-value" @tap="getZifangList">
            <input
              v-show="false"
              type="text"
              name="zifang"
              :value="zifangValue"
            />
            <text :class="{ 'text-gray': !zifangLabel }">{{
              zifangLabel ? zifangLabel : "请选择资方"
            }}</text>
          </view>
          <text class="iconfont icon-arrow-right1"></text>
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
        <view class="list-textarea">
          <view class="item-label">收费说明</view>
          <view class="item-value">
            <textarea name="collectExplain" placeholder="请输入收费说明" />
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
        <view class="list-item">
          <view class="item-label required">做单人员</view>
          <view class="item-value" @tap="selectPerson">
            <input
              v-show="false"
              type="text"
              name="person"
              :value="personValue"
            />
            <text :class="{ 'text-gray': !personLabel }">{{
              personLabel ? personLabel : "请选择做单人员"
            }}</text>
          </view>
          <text class="iconfont icon-arrow-right1"></text>
        </view>
        <view class="list-textarea">
          <view class="item-label">做单须知</view>
          <view class="item-value">
            <textarea name="zuodanKnow" placeholder="请输入做单须知" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">审核状态</view>
          <view class="item-value">
            <radio-group name="checkStatus" @change="changeCheckStatus">
              <label
                class=""
                v-for="(item, index) in checkStatus"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label">审核意见</view>
          <view class="item-value">
            <textarea name="checkOpinion" placeholder="请输入审核意见" />
          </view>
        </view>
        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
    <w-picker
      v-if="zifangList.length != 0"
      mode="linkage"
      :level="3"
      @confirm="onZifang"
      ref="linkage"
      :linkList="zifangList"
      themeColor="#007aff"
    ></w-picker>
    <w-picker
      v-if="personList.length != 0"
      mode="linkage"
      :level="3"
      @confirm="onPerson"
      ref="person"
      :linkList="personList"
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
      personList: [],
      personValue: "",
      personLabel: "",
      zifangList: [],
      zifangValue: "",
      zifangLabel: "",
      checkStatus: [
        { value: "1", name: "通过" },
        { value: "2", name: "驳回" }
      ],
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
    selectPerson() {
      this.$minApi.getZuodanrenyuan().then(res => {
        this.personList = res.data;
        setTimeout(() => {
          this.$refs.person.show();
        }, 50);
      });
    },
    onPerson(e) {
      console.log(e);
      this.personValue = e.checkValue.join(",");
      this.personLabel = e.checkArr.join(" | ");
    },
    // 评估方式百分比选择
    changeAssessmentCollectRate(e) {
      this.assessmentCollectRateIndex = e.detail.value;
    },
    changeAssessmentMethod(e) {
      console.log(e.detail.value);
      this.collectTypeIndex = e.detail.value;
    },
    getZifangList() {
      this.$minApi.getZifangList().then(res => {
        console.log(res);
        this.zifangList = res.data;
        setTimeout(() => {
          this.$refs.linkage.show();
        }, 50);
      });
    },
    onZifang(e) {
      console.log(e);
      this.zifangValue = e.checkValue.join(",");
      this.zifangLabel = e.checkArr.join(" | ");
    }
  }
};
</script>

<style>
.add-sign-page {
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
