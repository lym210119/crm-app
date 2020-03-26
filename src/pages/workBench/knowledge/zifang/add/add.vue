<template>
  <!-- 添加资方 -->
  <view class="zifang-add-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">资方类型</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="zifangType"
              :value="zifangType[zifangTypeIndex]"
            />
            <picker
              :range="zifangType"
              :value="zifangTypeIndex"
              @change="bindChangeZifangType"
            >
              <text :class="{ 'text-gray': zifangTypeIndex === null }">{{
                zifangTypeIndex === null
                  ? "请选择资方类型"
                  : zifangType[zifangTypeIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">资方名称</view>
          <view class="item-value">
            <input type="text" name="name" placeholder="请输入资方名称">
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">负责人</view>
          <view class="item-value">
            <input type="text" name="fzrname" placeholder="请输入负责人">
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">电话</view>
          <view class="item-value">
            <input type="number" name="phone" placeholder="请输入电话">
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">地址</view>
          <view class="item-value">
            <input type="text" name="address" placeholder="请输入地址">
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
      zifangType: [
        "银行",
        "消金",
        "车抵",
        "信保",
        "小贷",
        "网私",
        "机构",
        "小贷"
      ],
      zifangTypeIndex: null
    };
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    bindChangeZifangType(e) {
      this.authIndex = e.target.value;
    },
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    }
  }
};
</script>

<style>
.zifang-add-page {
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
