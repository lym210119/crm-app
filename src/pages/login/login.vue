<template>
	<view class="login-page">
		<uni-status-bar></uni-status-bar>
		<image class="login-logo" src="../../static/login-logo.png" mode="widthFix" lazy-load=""></image>
		<view class="login-title">登录</view>
		
		<view class="login-form">
			<input type="text" class="uni-input common-input" placeholder="用户名/手机号" />
			<input type="password" class="uni-input common-input" placeholder="请输入密码" />
			<button type="primary">登录</button>
		</view>
	</view>
</template>

<script>
	import	uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue'
	export default {
		components: {
			uniStatusBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.login-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.login-title {
		text-align: center;
		font-size: 36upx;
		font-weight: 400;
	}
	.login-logo {
		width: 250upx;
		margin: 0 auto;
	}
	.login-form {
		padding: 20upx;
	}
</style>
