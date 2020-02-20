<template>
	<view class="task-page">
		<scroll-view scroll-y="true" style="height: 100%" class="content">
			<view class="list" v-for="(item, i) in dataList" :key="i">
				<view class="list-left">
					<text class="iconfont" :class="item.icon"></text>
				</view>
				<view class="list-right">
					<view class="title">{{item.title}}</view>
					<view class="title-small">{{item.desc}}</view>
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
				dataList: [
					{
						icon: 'icon-kefu1',
						title: '今日需联系客户',
						desc: '暂无今日需联系客户'
					},
					{
						icon: 'icon-kefu1',
						title: '分配给我的线索',
						desc: '暂无分配给我的线索'
					},
					{
						icon: 'icon-kefu1',
						title: '分配给我的客户',
						desc: '暂无分配给我的客户'
					},
					{
						icon: 'icon-kefu1',
						title: '待进入公海的客户',
						desc: '暂无待进入公海的客户'
					},
					{
						icon: 'icon-kefu1',
						title: '即将续贷的客户',
						desc: '暂无即将续贷的客户'
					},
					{
						icon: 'icon-kefu1',
						title: '待审核的合同',
						desc: '营销经理提交了新的合同，正在等待您的审批'
					},
					{
						icon: 'icon-kefu1',
						title: '待审核的回款',
						desc: '暂无待审核的回款'
					},
					{
						icon: 'icon-kefu1',
						title: '即将过生日的客户',
						desc: '暂无即将过生日的客户'
					},
				]
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