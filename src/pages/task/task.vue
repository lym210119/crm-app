<template>
	<view class="task-page">
		<scroll-view scroll-y="true" style="height: 100%" class="content">
			<view class="list" v-for="(item, i) in 18" :key="i">
				<view class="list-left">
					<text class="iconfont icon-kefu1"></text>
				</view>
				<view class="list-right">
					<view class="title">今日需联系客户</view>
					<view class="title-small">暂无今日需联系客户</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	
	export default {
		components: {
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
	.task-page {
		display: flex;
		height: 100%;
		width: 100%;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
	}
	.list {
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		align-items: center;
		height: 130upx;
		background-color: #FFFFFF;
		padding: 0 30upx;
		border-bottom: 1px solid #F2F2F2;
	}
	.list-left {
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		background-color: #007AFF;
		border-radius: 50%;
		margin-right: 20upx;

	}
	.list-left .iconfont {
		font-size: 50upx;
		color: #F76260;
	}
	.list-right {
		flex: 1;
	}
	.list-right .title {
		font-weight: 700;
	}
	.list-right .title-small {
		color: #666666;
	}
</style>