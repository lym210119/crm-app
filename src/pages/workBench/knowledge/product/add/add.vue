<template>
  <!-- 修改通关项 -->
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">产品名称</view>
          <view class="item-value">
            <input
              type="text"
              name="productName"
              placeholder="请输入产品名称"
            />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">资方类型/名称</view>
          <view class="item-value" @tap="getZifang">
            <input
              v-show="false"
              type="text"
              name="zifang"
              :value="zifangValue"
            />
            <text :class="{ 'text-gray': !zifangLabel }">{{
              zifangLabel ? zifangLabel : "请选择资方类型/名称"
            }}</text>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">城市</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="city"
              :value="cityList[cityIndex]"
            />
            <picker @change="changeCity" :value="cityIndex" :range="cityList">
              <text :class="{ 'text-gray': cityIndex === null }">{{
                cityIndex === null ? "请选择所在城市" : cityList[cityIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label required">进件种类</view>
          <view class="uni-list">
            <checkbox-group name="intoType">
              <label
                class="uni-list-cell uni-list-cell-pd"
                v-for="(item, index) in intoType"
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
    <w-picker
      v-if="zifangList.length != 0"
      mode="linkage"
      :level="2"
      @confirm="onZifang"
      ref="linkage"
      :linkList="zifangList"
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
  onLoad(opts) {
    if (opts.type) {
      this.title = "更新产品";
    } else {
      this.title = "添加产品";
    }
    uni.setNavigationBarTitle({
      title: this.title
    });
  },
  data() {
    return {
      title: "",
      zifangValue: "",
      zifangLabel: "",
      zifangList: [],
      cityIndex: null,
      cityList: ["武汉", "北京", "上海", "广州"],
      intoType: [
        { value: "1", name: "抵押" },
        { value: "2", name: "全款房" },
        { value: "3", name: "房贷月供贷" },
        { value: "4", name: "全款车抵贷" },
        { value: "5", name: "按揭车贷" },
        { value: "6", name: "公积金" }
      ]
    };
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    changeCity(e) {
      this.cityIndex = e.detail.value;
    },
    getZifang() {
      this.$minApi.getDepartment().then(res => {
        console.log(res);
        this.zifangList = res.data;
        setTimeout(() => {
          this.$refs.linkage.show();
        }, 50);
      });
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
