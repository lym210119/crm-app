<template>
	<view class="mine-page">

		<navigator url="" class="header">
			<image class="avatar" src="../../static/60x60.png" mode=""></image>
			<view class="userinfo">
				<view class="username">校长</view>
				<view class="infodata">完善资料 <text>45%</text></view>
				<view class="level-container">
					<view class="level-box">
						<text class="iconfont icon-dengji" style="padding-left: 0;"></text>
						<text>等级1</text>
					</view>
					<view class="new-box">
						<text class="iconfont icon-xunzhang"></text>
						<text>新兵</text>
					</view>
					<view class="integral-box">
						<text class="iconfont icon-jifen"></text>
						<text>积分 25</text>
					</view>
				</view>
			</view>
			<view class="iconfont icon-arrow-right1">	
			</view>
		</navigator>
		<navigator url="" class="navigator-item service-manager">
			<view class="iconfont icon-kefu1">
			</view>
			<view class="title">
				我的专属服务经理
			</view>
			<view class="iconfont icon-arrow-right1">
			</view>
		</navigator>
		
		<view class="grid-container">
			<uni-grid :column="4" :highlight="true" borderColor="#f2f2f2" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		
		<navigator url="" class="navigator-item satisfaction">
			<view class="iconfont icon-kefu1">
			</view>
			<view class="title">
				客户满意度调查
			</view>
			<view class="right-text">
				客户满意度问卷
				<text class="iconfont icon-arrow-right1"></text>
			</view>
		</navigator>
		
		<navigator url="/pages/mine/qichacha/qichacha" class="navigator-item company-info">
			<view class="iconfont icon-kefu1">
			</view>
			<view class="title">
				企业工商查询
			</view>
			<view class="right-text">
				企业信用信息尽在...
				<text class="iconfont icon-arrow-right1"></text>
			</view>
		</navigator>
		
		<!-- <side-fab></side-fab> -->
		<navigator url="/pages/login/login">去登录页面</navigator>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	// import sideFab from '@/components/side-fab.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
			// sideFab
		},
		data() {
			return {
				list: [{
						url: '/static/c1.png',
						text: 'Grid 1',
						badge: '0',
						type: "primary"
					},
					{
						url: '/static/c2.png',
						text: 'Grid 2',
						badge: '1',
						type: "success"
					},
					{
						url: '/static/c3.png',
						text: 'Grid 3',
						badge: '99',
						type: "warning"
					},
					{
						url: '/static/c4.png',
						text: 'Grid 4',
						badge: '2',
						type: "error"
					},
					{
						url: '/static/c5.png',
						text: 'Grid 5'
					},
					{
						url: '/static/c6.png',
						text: 'Grid 6'
					},
					{
						url: '/static/c7.png',
						text: 'Grid 7'
					},
					{
						url: '/static/c8.png',
						text: 'Grid 8'
					},
					{
						url: '/static/c9.png',
						text: 'Grid 9'
					},
					{
						url: '/static/c9.png',
						text: 'Grid 9'
					},
					{
						url: '/static/c9.png',
						text: 'Grid 9'
					},
					{
						url: '/static/c9.png',
						text: 'Grid 9'
					}
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* height: 160upx; */
		padding: 20upx;
		background-color: #19aa8d;
		border-bottom: 1px solid #F2F2F2;
		color: #FFFFFF;
	}
	.header .avatar {
		width: 120upx;
		height: 120upx;
		margin-right: 20upx;
		border-radius: 50%;
	}
	.header .userinfo {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.userinfo .username {
		font-size: 32upx;
		font-weight: 400;
	}
	.userinfo .infodata {
		font-size: 22upx;
		color: #F6F7F8;
	}
	
	.level-container {
		display: flex;
		flex-direction: row;
		
	}
	.level-container text:not(.iconfont) {
		padding: 0 10upx;
		font-size: 22upx;
		color: #F6F7F8;
	}
	.level-container text.iconfont {
		font-size: 28upx;
		vertical-align: middle;
		color: #FFFFFF;
	}
	.navigator-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 86upx;
		padding: 0 20upx;
		background-color: #FFFFFF;
		border-bottom: 1px solid #F2F2F2;
	}
	.satisfaction {
		margin-top: 16upx;
	}
	.right-text {
		color: #BBBBBB;
		font-size: 28upx;
	}
	.navigator-item .title {
		flex: 1;
		margin-left: 10upx;
		font-size: 30upx;
		font-weight: 400;
	}
	.navigator-item .icon-kefu1 {
		color: #e64e09;
		font-size: 60upx;
	}
	.icon-arrow-right1 {
		color: #BBBBBB;
		font-size: 30upx;
	}
	
	.grid-container {
		margin-top: 16upx;
		background-color: #FFFFFF;
	}
	.grid-item-box {
		flex: 1;
		/* position: relative;
*/
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
	.image {
		width: 50upx;
		height: 50upx;
	}
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
</style>
