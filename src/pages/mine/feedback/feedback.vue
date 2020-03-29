<template>
  <view class="feedback-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <form>
        <view class="list-item" style="margin: 20upx 0;">
          <view class="item-label required">问题类型</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="issueType"
              :value="issueTypeList[issueTypeIndex]"
            />
            <picker
              :range="issueTypeList"
              :value="issueTypeIndex"
              @change="changeIssueType"
            >
              <text :class="{ 'text-gray': issueTypeIndex === null }">{{
                issueTypeIndex === null
                  ? "请选择问题类型"
                  : issueTypeList[issueTypeIndex]
              }}</text>
              <text class="iconfont icon-arrow-right1"></text>
            </picker>
          </view>
        </view>
        
        <view class="list-item">
          <view class="item-label required">
            手机号码
          </view>
          <view class="item-value">
            <input type="text" placeholder="填写后方便我们与您联系">
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label">建议描述</view>
          <view class="item-value textarea-container">
            <textarea @input="changeTextareaLength($event)" :maxlength="500" placeholder="对我们的产品和服务，您还有什么建议吗？您希望我们为您解决什么问题？请告诉我们..." />
            <text class="textarea-length">{{textareaLength}}/500</text>
          </view>
        </view>
        <view class="uni-list">
          <view class="uni-list-cell cell-pd">
            <view class="uni-uploader">
              <view class="uni-uploader-head">
                <view class="uni-uploader-title">上传图片 <text class="title-small">最多上传4张，提供问题截图10M以内</text></view>
                <view class="uni-uploader-info">{{ imageList.length }}/4</view>
              </view>
              <view class="uni-uploader-body">
                <view class="uni-uploader__files">
                  <block v-for="(image, index) in imageList" :key="index">
                    <view class="uni-uploader__file">
                      <image
                        class="uni-uploader__img"
                        :src="image"
                        :data-src="image"
                        @tap="previewImage"
                      ></image>
                      <text
                        class="iconfont icon-gary"
                        @tap.stop="removeImage"
                      ></text>
                    </view>
                  </block>
                  <view class="uni-uploader__input-box">
                    <view class="uni-uploader__input" @tap="chooseImage"></view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>

        <view class="submit-btn">提交</view>
      </form>
    </scroll-view>
  </view>
</template>

<script>
import permision from "@/common/permission.js";
var sourceType = [["camera"], ["album"], ["camera", "album"]];
var sizeType = [["compressed"], ["original"], ["compressed", "original"]];
export default {
  data() {
    return {
      issueTypeList: ['功能异常', '客户服务', '产品建议', '其他'],
      issueTypeIndex: null,
      textareaLength: 0,
      imageList: [],
      sourceTypeIndex: 2,
      sourceType: ["拍照", "相册", "拍照或相册"],
      sizeTypeIndex: 2,
      sizeType: ["压缩", "原图", "压缩或原图"],
      countIndex: 8,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  onUnload() {
    (this.imageList = []),
      (this.sourceTypeIndex = 2),
      (this.sourceType = ["拍照", "相册", "拍照或相册"]),
      (this.sizeTypeIndex = 2),
      (this.sizeType = ["压缩", "原图", "压缩或原图"]),
      (this.countIndex = 8);
  },
  methods: {
    changeIssueType(e) {
      this.issueTypeIndex = e.target.value;
    },
    changeTextareaLength(e) {
      var length = e.detail.value.length;
      if (length > 500) {
        return
      }
      this.textareaLength = length
    },
    removeImage() {
      uni.showModal({
        title: "提示",
        content: "是否删除该图片？",
        success: res => {
          if (res.confirm) {
          }
        }
      });
    },
    sourceTypeChange: function(e) {
      this.sourceTypeIndex = parseInt(e.target.value);
    },
    sizeTypeChange: function(e) {
      this.sizeTypeIndex = parseInt(e.target.value);
    },
    countChange: function(e) {
      this.countIndex = e.target.value;
    },
    chooseImage: async function() {
      // #ifdef APP-PLUS
      // TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
      if (this.sourceTypeIndex !== 2) {
        let status = await this.checkPermission();
        if (status !== 1) {
          return;
        }
      }
      // #endif

      if (this.imageList.length === 4) {
        let isContinue = await this.isFullImg();
        console.log("是否继续?", isContinue);
        if (!isContinue) {
          return;
        }
      }
      uni.chooseImage({
        sourceType: sourceType[this.sourceTypeIndex],
        sizeType: sizeType[this.sizeTypeIndex],
        count:
          this.imageList.length + this.count[this.countIndex] > 4
            ? 4 - this.imageList.length
            : this.count[this.countIndex],
        success: res => {
          this.imageList = this.imageList.concat(res.tempFilePaths);
        },
        fail: err => {
          // #ifdef APP-PLUS
          if (err["code"] && err.code !== 0 && this.sourceTypeIndex === 2) {
            this.checkPermission(err.code);
          }
          // #endif
          // #ifdef MP
          uni.getSetting({
            success: res => {
              let authStatus = false;
              switch (this.sourceTypeIndex) {
                case 0:
                  authStatus = res.authSetting["scope.camera"];
                  break;
                case 1:
                  authStatus = res.authSetting["scope.album"];
                  break;
                case 2:
                  authStatus =
                    res.authSetting["scope.album"] &&
                    res.authSetting["scope.camera"];
                  break;
                default:
                  break;
              }
              if (!authStatus) {
                uni.showModal({
                  title: "授权失败",
                  content:
                    "Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",
                  success: res => {
                    if (res.confirm) {
                      uni.openSetting();
                    }
                  }
                });
              }
            }
          });
          // #endif
        }
      });
    },
    isFullImg: function() {
      return new Promise(res => {
        uni.showModal({
          content: "已经有4张图片了,是否清空现有图片？",
          success: e => {
            if (e.confirm) {
              this.imageList = [];
              res(true);
            } else {
              res(false);
            }
          },
          fail: () => {
            res(false);
          }
        });
      });
    },
    previewImage: function(e) {
      var current = e.target.dataset.src;
      uni.previewImage({
        current: current,
        urls: this.imageList
      });
    },
    async checkPermission(code) {
      let type = code ? code - 1 : this.sourceTypeIndex;
      let status = permision.isIOS
        ? await permision.requestIOS(sourceType[type][0])
        : await permision.requestAndroid(
            type === 0
              ? "android.permission.CAMERA"
              : "android.permission.READ_EXTERNAL_STORAGE"
          );

      if (status === null || status === 1) {
        status = 1;
      } else {
        uni.showModal({
          content: "没有开启权限",
          confirmText: "设置",
          success: function(res) {
            if (res.confirm) {
              permision.gotoAppSetting();
            }
          }
        });
      }

      return status;
    }
  }
};
</script>

<style>
.feedback-page {
  height: 100%;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
  background-color: #ffffff;
}
/* .item-label {
  font-size: 32upx;
} */
.item-label.required::after {
  content: "*";
  color: red;
}
.item-value {
  flex: 1;
  text-align: right;
  /* font-size: 32upx; */
}

.item-value input {
  /* padding-right: 20upx; */
  text-align: right;
}
.text-gray {
  color: gray;
}

.icon-arrow-right1 {
  color: #bbbbbb;
  font-size: 30upx;
}
.list-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
}
.list-textarea>.item-value {
  width: 100%;
}
.list-textarea .item-label {
  padding: 0 30upx;
  height: 80upx;
  line-height: 80upx;
}
.list-textarea textarea {
  width: 100%;
  height: 200upx;
  font-size: 32upx;
  padding: 0 30upx 30upx;
  text-align: left;
  box-sizing: border-box;
}
.textarea-container {
  position: relative;
}
.textarea-length {
  position: absolute;
  right: 30upx;
  bottom:0;
  color: grey;
}

.title-small {
  margin-left: 20upx;
  font-size: 24upx;
  color: grey;
}
.cell-pd {
  padding: 22upx 30upx;
}

.list-pd {
  margin-top: 50upx;
}
.uni-uploader__input-box {
  border: 1upx dashed #d9d9d9;
}
.uni-uploader__file {
  position: relative;
  border: 1upx dashed #d9d9d9;
}
.icon-gary {
  position: absolute;
  top: -5upx;
  right: -5upx;
  color: #cccccc;
  width: 50upx;
  height: 50upx;
  line-height: 50upx;
  font-size: 50upx;
}
.submit-btn {
  font-size: 32upx;
  /* letter-spacing: 1em; */
  margin: 30upx;
  background-color: #19aa8d;
  color: #ffffff;
  text-align: center;
  border-radius: 10upx;
  line-height: 80upx;
}
</style>
