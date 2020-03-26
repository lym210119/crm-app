<template>
  <!-- 批量导入 -->
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label">请下载模版</view>
          <view class="item-value" style="flex:none;">
            <button class="btn-primary">下载模版</button>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">导入位置</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="importPosition"
              :value="importPosition[importPositionIndex]"
            />
            <picker
              :range="importPosition"
              :value="importPositionIndex"
              @change="changeImportPosition"
            >
              <text :class="{ 'text-gray': importPositionIndex === null }">{{
                importPositionIndex === null
                  ? "请选择导入位置"
                  : importPosition[importPositionIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">信息来源</view>
          <view class="item-value" @tap="getInfoSource">
            <input
              v-show="false"
              type="text"
              name="infoSource"
              :value="infoSourceValue"
            />
            <text :class="{ 'text-gray': !infoSourceLabel }">{{
              infoSourceLabel ? infoSourceLabel : "请选择信息来源"
            }}</text>
          </view>
          <!-- <text class="iconfont icon-arrow-right1"></text> -->
        </view>
        <view class="list-item">
          <view class="item-label required">所在城市</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="city"
              :value="cityList[cityIndex]"
            />
            <picker :range="cityList" :value="cityIndex" @change="changeCity">
              <text :class="{ 'text-gray': cityIndex === null }">{{
                cityIndex === null ? "请选择所在城市" : cityList[cityIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">上传文件</view>
          <view class="item-value" style="flex: none">
            <button class="btn-success" @tap="uploadFile">上传文件</button>
          </view>
        </view>

        <button
          ref="submitBtn"
          class="submit-btn btn-primary"
          form-type="submit"
        >
          提交
        </button>
      </form>
      <w-picker
        v-if="infoSourceList.length != 0"
        mode="linkage"
        :level="2"
        @confirm="onInfoSource"
        ref="linkage"
        :linkList="infoSourceList"
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
      importPositionIndex: null,
      importPosition: ["有效线索", "公海客户"],
      infoSourceValue: "",
      infoSourceLabel: "",
      infoSourceList: [],
      cityIndex: null,
      cityList: ["武汉", "北京", "上海", "广州"]
    };
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    uploadFile() {
      uni.chooseImage({
        success: chooseImageRes => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: "https://www.example.com/upload", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              user: "test"
            },
            success: uploadFileRes => {
              console.log(uploadFileRes.data);
            }
          });

          uploadTask.onProgressUpdate(res => {
            console.log("上传进度" + res.progress);
            console.log("已经上传的数据长度" + res.totalBytesSent);
            console.log(
              "预期需要上传的数据总长度" + res.totalBytesExpectedToSend
            );

            // 测试条件，取消上传任务。
            if (res.progress > 50) {
              uploadTask.abort();
            }
          });
        }
      });
    },
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    },
    changeImportPosition(e) {
      this.importPositionIndex = e.target.value;
    },
    changeCity(e) {
      this.cityIndex = e.target.value;
    },
    getInfoSource() {
      this.$minApi.getDepartment().then(res => {
        console.log(res);
        this.infoSourceList = res.data;
        setTimeout(() => {
          this.$refs.linkage.show();
        }, 50);
      });
    },
    onInfoSource(e) {
      console.log(e);
      this.infoSourceValue = e.checkValue.join(",");
      this.infoSourceLabel = e.checkArr.join(" | ");
    }
  }
};
</script>

<style>
.submit-btn {
  margin: 30upx;
}
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
