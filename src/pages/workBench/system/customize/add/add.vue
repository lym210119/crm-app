<template>
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item" v-if="!isEdit">
          <view class="item-label required">新增类型</view>
          <view class="item-value">
            <view class="item-value">
              <input
                v-show="false"
                type="text"
                name="addType"
                :value="addTypeList[addTypeIndex]"
              />
              <picker
                :range="addTypeList"
                :value="addTypeIndex"
                @change="changeAddType"
              >
                <text :class="{ 'text-gray': addTypeIndex === null }">{{
                  addTypeIndex === null
                    ? "请选择新增类型"
                    : addTypeList[addTypeIndex]
                }}</text>
              </picker>
            </view>
          </view>
        </view>

        <view class="list-item">
          <view class="item-label required">大类名称</view>
          <view class="item-value">
            <view class="item-value">
              <input type="text" name="name" placeholder="请输入大类名称" />
            </view>
          </view>
        </view>

        <view class="list-item" v-if="addTypeIndex === 1">
          <view class="item-label required">所属分类</view>
          <view class="item-value">
            <view class="item-value">
              <input
                v-show="false"
                type="text"
                name="infoSources"
                :value="infoSources[infoSourcesIndex]"
              />
              <picker
                :range="infoSources"
                :value="infoSourcesIndex"
                @change="changeAddType"
              >
                <text :class="{ 'text-gray': infoSourcesIndex === null }">{{
                  infoSourcesIndex === null
                    ? "请选择所属分类"
                    : infoSources[infoSourcesIndex]
                }}</text>
              </picker>
            </view>
          </view>
        </view>

        <view class="list-item" v-if="addTypeIndex === 4">
          <view class="item-label required">分类</view>
          <view class="item-value">
            <view class="item-value">
              <radio-group name="tagType">
                <label
                  class=""
                  v-for="(item, index) in tagType"
                  :key="item.value"
                >
                  <radio :value="item.value" style="transform:scale(0.7)" />
                  {{ item.name }}
                </label>
              </radio-group>
            </view>
          </view>
        </view>

        <view class="list-item">
          <view class="item-label required">是否启用</view>
          <view class="item-value">
            <view class="item-value">
              <radio-group name="isOpen">
                <label
                  class=""
                  v-for="(item, index) in isOpen"
                  :key="item.value"
                >
                  <radio :value="item.value" style="transform:scale(0.7)" />
                  {{ item.name }}
                </label>
              </radio-group>
            </view>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">排序</view>
          <view class="item-value">
            <view class="item-value">
              <input type="text" name="sort" placeholder="0" />
            </view>
          </view>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  onLoad(opts) {
    if (opts.type) {
      this.title = "编辑配置";
      this.isEdit = true;
    } else {
      this.title = "新增配置";
    }
    uni.setNavigationBarTitle({
      title: this.title
    });
  },
  data() {
    return {
      title: "新增配置",
      isEdit: false,
      addTypeIndex: null,
      addTypeList: [
        "资方类型",
        "信息来源",
        "进件种类",
        "客户文档类型",
        "标签管理"
      ],
      isOpen: [
        { value: "1", name: "是" },
        { value: "2", name: "否" }
      ],
      infoSourcesIndex: null,
      infoSources: [
        "来源大类",
        "网络渠道",
        "广告渠道",
        "热线直呼",
        "市场推广",
        "客户录入",
        "其他渠道",
        "客户转介绍"
      ],
      tagType: [
        { value: "1", name: "客户标签" },
        { value: "2", name: "通话标签" }
      ]
    };
  },

  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    changeAddType(e) {
      this.addTypeIndex = e.target.value;
      console.log(this.addTypeIndex)
    },
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
