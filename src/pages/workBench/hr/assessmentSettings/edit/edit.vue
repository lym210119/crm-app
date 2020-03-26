<template>
  <!-- 修改通关项 -->
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">通关项名称</view>
          <view class="item-value">
            <input type="text" name="name" placeholder="请输入通关项名称" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">所属等级</view>
          <view class="item-value">
            <radio-group name="level">
              <label class="" v-for="(item, index) in level" :key="item.value">
                <radio :value="item.value" style="transform:scale(0.7)" />
                {{ item.name }}
              </label>
            </radio-group>
          </view>
        </view>

        <view class="list-textarea">
          <view class="item-label required">通关对象</view>
          <view class="uni-list">
            <checkbox-group name="object">
              <label
                class="uni-list-cell uni-list-cell-pd"
                v-for="(item, index) in object"
                :key="item.value"
              >
                <checkbox value="item.value" style="transform:scale(0.7)" />
                {{ item.name }}
              </label>
            </checkbox-group>
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label required">所属审批职位</view>
          <view class="uni-list">
            <checkbox-group name="object">
              <label
                class="uni-list-cell uni-list-cell-pd"
                v-for="(item, index) in object"
                :key="item.value"
              >
                <checkbox value="item.value" style="transform:scale(0.7)" />
                {{ item.name }}
              </label>
            </checkbox-group>
          </view>
        </view>
        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  onLoad(opts) {},
  data() {
    return {
      level: [
        { value: "1", name: "初级" },
        { value: "2", name: "中级" },
        { value: "3", name: "高级" }
      ],
      object: [
        { value: "1", name: "热线中心" },
        { value: "2", name: "财务中心" },
        { value: "3", name: "运营中心" },
        { value: "4", name: "行政人事" },
        { value: "5", name: "营销①中心" },
        { value: "6", name: "营销②中心" }
      ]
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
    }
  }
};
</script>

<style>
.add-staff-page {
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
