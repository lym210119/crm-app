<template>
  <view class="userinfo-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <view class="avatar-container" @tap="changeAvatar">
        <image class="avatar-img" :src="avatar"></image>
        <text class="avatar-text">修改头像</text>
      </view>
      <view class="item-list">
        <view class="item">
          <view class="item-label">姓名</view>
          <view class="item-input">
            <input type="text" placeholder="请输入姓名" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">性别</view>
          <view class="item-input">
            <picker @change="changeGender" :value="genderIndex" :range="gender">
              <view :class="genderIndex === null ? 'text-grey' : ''">{{
                genderIndex === null ? '未设置' : gender[genderIndex]
              }}</view>
            </picker>
          </view>
        </view>
        <view class="item">
          <view class="item-label">手机</view>
          <view class="item-input">
            <input type="number" placeholder="请输入手机" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">邮箱</view>
          <view class="item-input">
            <input type="email" placeholder="请输入邮箱" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">部门</view>
          <view class="item-input">
            <input type="email" placeholder="请输入部门" />
          </view>
        </view>
        <view class="item">
          <view class="item-label">岗位</view>
          <view class="item-input">
            <input type="email" placeholder="请输入岗位" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      avatar: 'https://picsum.photos/90/90',
      file: '',
      gender: ['先生', '女士'],
      genderIndex: null,
    }
  },
  onNavigationBarButtonTap(e) {
    console.log(e)
  },
  methods: {
    changeAvatar() {
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        // sourceType: ['album'], // 从相册选择
        success: res => {
          console.log(res)
          console.log(JSON.stringify(res.tempFilePaths))
          this.avatar = res.tempFilePaths[0]
          this.file = res.tempFiles
          // uni.uploadFile({
          //   url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: 'file',
          //   formData: {
          //     user: 'test',
          //   },
          //   success: (uploadFileRes) => {
          //     console.log(uploadFileRes.data)
          //   },
          // })
        },
      })
    },
    changeGender(e) {
      console.log(e)
      this.genderIndex = e.target.value
    },
  },
}
</script>

<style>
.userinfo-page {
  height: 100%;
}
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30upx 0;
}
.avatar-img {
  width: 180upx;
  height: 180upx;
  border-radius: 50%;
  border: 10upx solid #ffffff;
}
.avatar-text {
  font-size: 24upx;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin: 0 30upx;
  padding: 0 30upx;
  height: 100upx;
  position: relative;
}
.item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #cccccc;
}
.item-input {
  flex: 1;
  text-align: right;
}
.item-input input {
  width: 100%;
  text-align: right;
}
.text-grey {
  color: grey;
}
</style>
