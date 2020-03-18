<template>
  <view class="login-page">
    <uni-status-bar></uni-status-bar>
		<div class="login-head">
			<image
				class="login-logo"
				src="/static/login-logo.png"
				mode="widthFix"
				lazy-load=""
			></image>
			<view class="login-title">登录</view>
			<view class="login-title-small">使用您的账号登录锦衣卫助贷系统</view>
		</div>
	
    <view class="login-form">
			<template v-if="loginType === 1">
				<view class="input-item">
					<input
						type="text"
						placeholder="请输入账号"
					/>
				</view>
				<view class="input-item">
					<input
						type="password"
						placeholder="请输入密码"
					/>
				</view>
			</template>
			<template v-else>
				<view class="input-item">
					<input
						type="number"
						maxlength="11"
						placeholder="请输入手机号"
					/>
					<text class="get-sms-code">获取验证码</text>
				</view>
				<view class="input-item">
					<input
						type="number"
            maxlength="6"
						placeholder="请输入验证码"
					/>
				</view>
			</template>
      <button type="primary" :disabled="disabled">登录</button>

      <view class="phone-login" @tap="changeLoginType">{{
        loginTypeText
      }}</view>
    </view>
  </view>
</template>

<script>
import uniStatusBar from "@/components/uni-status-bar/uni-status-bar.vue";
export default {
  components: {
    uniStatusBar
  },
  data() {
    return {
      disabled: true,
			loginTypeText: "手机验证码登录",
			loginType: 1
    };
  },
  methods: {
    changeLoginType() {
			this.loginType = this.loginType === 1 ? 2:1
      this.loginTypeText =
        this.loginTypeText === "手机验证码登录" ? "账号登录" : "手机验证码登录";
    }
  }
};
</script>

<style>
.login-page {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
  padding: 20upx;
  box-sizing: border-box;
  background-color: #ffffff;
}
.login-title {
  text-align: center;
  font-size: 36upx;
  font-weight: 400;
}
.login-head {
	text-align: center;
	margin: 100upx 0;
}
.login-logo {
  width: 250upx;
  margin: 0 auto;
}
.login-form {
  padding: 20upx;
}
.login-form .input-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 86upx;
  line-height: 86upx;
	border-radius: 8upx;
	padding: 0 30upx;
  border: 1upx solid #ccc;
  margin-bottom: 30upx;
}
.login-form .input-item >input {
	flex: 1;
  font-size: 32upx;
}
.get-sms-code {
	color: #19aa8d;
}
.login-form > button {
  background-color: #19aa8d;
}
.phone-login {
  margin-top: 30upx;
  color: #333333;
}
</style>
