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
          <input type="text" placeholder="请输入账号" v-model="account" />
        </view>
        <view class="input-item">
          <input type="password" placeholder="请输入密码" v-model="password" />
        </view>
      </template>
      <template v-else>
        <view class="input-item">
          <input
            type="number"
            maxlength="11"
            placeholder="请输入手机号"
            v-model="phone"
          />
          <text class="get-sms-code">获取验证码</text>
        </view>
        <view class="input-item">
          <input
            type="number"
            maxlength="6"
            placeholder="请输入验证码"
            v-model="smsCode"
          />
        </view>
      </template>
      <button type="primary" @tap="bindLogin">登录</button>

      <view class="phone-login" @tap="changeLoginType">{{
        loginTypeText
      }}</view>
      <view>{{ account }}</view>
      <view>{{ password }}</view>
      <view>{{ account && password }}</view>
    </view>
  </view>
</template>

<script>
import uniStatusBar from "@/components/uni-status-bar/uni-status-bar.vue";
import service from "../../service.js";
import { mapState, mapMutations } from "vuex";
export default {
  computed: mapState(["forcedLogin"]),
  components: {
    uniStatusBar
  },
  data() {
    return {
      account: "",
      password: "",
      phone: "",
      smsCode: "",
      loginTypeText: "手机验证码登录",
      loginType: 1
    };
  },
  methods: {
    bindLogin() {
      /**
       * 客户端对账号信息进行一些必要的校验。
       * 实际开发中，根据业务需要进行处理，这里仅做示例。
       */
      if (this.account.length < 5) {
        uni.showToast({
          icon: "none",
          title: "账号最短为 5 个字符"
        });
        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: "none",
          title: "密码最短为 6 个字符"
        });
        return;
      }
      /**
       * 下面简单模拟下服务端的处理
       * 检测用户账号密码是否在已注册的用户列表中
       * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
       */
      const data = {
        account: this.account,
        password: this.password
      };
      // const validUser = service.getUsers().some(function(user) {
      //   return data.account === user.account && data.password === user.password;
      // });
      // if (validUser) {
        this.toMain(this.account);
      // } else {
        // uni.showToast({
        //   icon: "none",
        //   title: "用户账号或密码不正确"
        // });
      // }
    },
    toMain(userName) {
      this.login(userName);
      /**
       * 强制登录时使用reLaunch方式跳转过来
       * 返回首页也使用reLaunch方式
       */
      if (this.forcedLogin) {
        uni.reLaunch({
          url: "../index/index"
        });
      } else {
        uni.navigateBack();
      }
    },
    ...mapMutations(["login"]),
    changeLoginType() {
      this.loginType = this.loginType === 1 ? 2 : 1;
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
.login-form .input-item > input {
  flex: 1;
  font-size: 32upx;
}
.get-sms-code {
  color: #19aa8d;
}
.login-form > button {
  background-color: #19aa8d;
  margin: 0;
}
.phone-login {
  margin-top: 30upx;
  color: #333333;
}
</style>
