<template>
  <view class="add-customer-page">
    <scroll-view  scroll-y="true" style="height: 100%">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label">录入类型</view>
          <view class="item-value">
            <radio-group name="cusInputType">
              <label
                class=""
                v-for="(item, index) in cusInputType"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">客户姓名</view>
          <view class="item-value">
            <input type="text" name="name" placeholder="请输入客户姓名" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">客户性别</view>
          <view class="item-value">
            <radio-group name="gender">
              <label class="" v-for="(item, index) in gender" :key="item.value">
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">所在城市</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="city"
              :value="cityList[cityIndex]"
            />
            <picker @change="changeCity" :value="cityIndex" :range="cityList">
              <text :class="{ selected: cityIndex === null }">{{
                cityIndex === null ? "请选择所在城市" : cityList[cityIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">联系电话</view>
          <view class="item-value">
            <input type="text" name="phone" placeholder="请输入联系电话" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">客户年龄</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="age"
              :value="ageList[ageIndex]"
            />
            <picker @change="changeAge" :value="ageIndex" :range="ageList">
              <text :class="{ selected: ageIndex === null }">{{
                ageIndex === null ? "请选择客户年龄" : ageList[ageIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">期望金额</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="money"
              :value="moneyList[ageIndex]"
            />
            <picker
              @change="changeMoney"
              :value="moneyIndex"
              :range="moneyList"
            >
              <text :class="{ selected: moneyIndex === null }">{{
                moneyIndex === null ? "请选择期望金额" : moneyList[moneyIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">上门状态</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="goHomeStatus"
              :value="goHomeStatusList[goHomeStatusIndex]"
            />
            <picker
              @change="changeGoHomeStatus"
              :value="goHomeStatusIndex"
              :range="goHomeStatusList"
            >
              <text :class="{ selected: goHomeStatusIndex === null }">{{
                goHomeStatusIndex === null
                  ? "请选择上门状态"
                  : goHomeStatusList[goHomeStatusIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">信息来源</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="source"
              :value="sourceList[goHomeStatusIndex]"
            />
            <picker
              @change="changeSource"
              :value="sourceIndex"
              :range="sourceList"
            >
              <text :class="{ selected: sourceIndex === null }">{{
                sourceIndex === null
                  ? "请选择信息来源"
                  : sourceList[sourceIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">客户类型</view>
          <view class="item-value">
            <radio-group name="cusType">
              <label
                class=""
                v-for="(item, index) in cusType"
                :key="item.value"
              >
                <radio :value="item.value" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label">客户情况</view>
          <view class="item-value">
            <textarea name="cusInfo" placeholder="请输入客户情况" />
          </view>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cusInputType: [
        { value: "1", name: "个人" },
        { value: "2", name: "公司" }
      ],
      gender: [
        { value: "1", name: "先生" },
        { value: "2", name: "女士" }
      ],
      cusType: [
        { value: "1", name: "潜在" },
        { value: "2", name: "意向" },
        { value: "3", name: "需求" }
      ],
      cityIndex: null,
      cityList: ["武汉", "北京", "上海", "广州"],
      ageIndex: null,
      ageList: ["武汉", "北京", "上海", "广州"],
      moneyIndex: null,
      moneyList: ["武汉", "北京", "上海", "广州"],
      goHomeStatusIndex: null,
      goHomeStatusList: ["武汉", "北京", "上海", "广州"],
      sourceIndex: null,
      sourceList: ["武汉", "北京", "上海", "广州"]
    };
  },
  onLoad() {},
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
    changeCity(e) {
      this.cityIndex = e.target.value;
    },
    changeAge(e) {
      this.ageIndex = e.target.value;
    },
    changeMoney(e) {
      this.moneyIndex = e.target.value;
    },
    changeGoHomeStatus(e) {
      this.goHomeStatusIndex = e.target.value;
    },
    changeSource(e) {
      this.sourceIndex = e.target.value;
    }
  }
};
</script>

<style>
.add-customer-page {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;

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
}
.list-textarea .item-label {
  height: 94upx;
  line-height: 94upx;
}
.list-textarea>.item-value{
  width: 100%;

}
.list-textarea textarea {
  flex: 1;
  font-size: 32upx;
  width: 100%;
  text-align: left;
}

.selected {
  color: #848484;
}
</style>
