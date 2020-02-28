<template>
  <view class="lunhu-page">
    <uni-nav-bar
      statusBar="true"
      backgroundColor="#19aa8d"
      color="#fff"
      @clickLeft="startLunHu"
    >
      <view class="navbar-title">张三 先生（10086）</view>
      <view slot="left" class="navbar-left">开始轮呼</view>
      <view slot="right" class="navbar-right">
        <view>下一位</view><view>李斯斯</view></view
      >
    </uni-nav-bar>

    <scroll-view scroll-y="true" style="flex: 1;overflow:hidden;">
      <form class="lunhu-form" @submit="formSubmit">
        <view class="form-item">
          <view class="age">
            年龄： <picker class="picker" :range="ageList" :value="ageIndex" @change="changeAge">{{ageList[ageIndex]}} <text class="iconfont icon-bianji"></text></picker>
          </view>
          <view class="money">
            金额：<picker class="picker" :range="moneyList" :value="moneyIndex" @change="changeMoney">{{moneyList[moneyIndex]}} <text class="iconfont icon-bianji"></text></picker>
          </view>
        </view>
      </form>

    </scroll-view>
  </view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  components: {
    uniNavBar
  },
  data() {
    return {
      ageList: ['18-24岁', '24-55岁', '55-65岁', '65岁以上'],
      ageIndex: 0,
      moneyList: ['暂不确定', '2万元以下', '2~5万元', '5~10万元', '10~30万元', '30~50万元', '50~100万元', '100~300万元', '300~500万元', '500~1000万元', '1000万元以上'],
      moneyIndex: 0
    };
  },
  onLoad(opts) {
    const data = JSON.parse(decodeURIComponent(opts.data));
    console.log(data);
  },
  methods: {
    startLunHu() {
      uni.showToast({
        icon: "none",
        title: "开始轮呼"
      });
    }
  }
};
</script>

<style>
.lunhu-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}

.navbar-title {
  width: 100%;
  text-align: center;
}
.navbar-left {
  margin-left: 16upx;
  font-size: 24upx;
}

.navbar-right view {
  font-size: 24upx;
}
.lunhu-form {
  
  
}
.form-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cccccc;
}
.form-item .age, .form-item .money {
  flex: 1;
  padding: 10upx 30upx;
}
.picker {
  display: inline-block;
}
.picker .icon-bianji {
  margin-left: 20upx;
  font-size: 28upx;
}
</style>
