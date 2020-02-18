<template>
	<view class="work-page">
		<scroll-view scroll-y="true" style="height: 100%">
			<view class="section-container">
				<view class="section-item" v-for="(item, i) in workList" :key="item.id">
					<view class="section-title">{{item.title}}</view>
					<view class="gird-item-box">
						<uni-grid :column="4" :highlight="true" :show-border="false" @change="change">
							<uni-grid-item v-for="(item2, index2) in item.submenu" :index="index2" :key="index2">
								<view class="grid-item-box">
									<view class="icon-box" :style="'background-color:' + item2.color">
										<text class="iconfont" :class="item2.icon"></text>	
									</view>
									<!-- <image :src="item2.icon" class="image" mode="aspectFill" /> -->
									<text class="text">{{ item2.text }}</text>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				workList: [],
				itemBgColor: ['#4681f6', '#ec7958', '#75cd8e', '#aed47a', '#f09943', '#f6d551', '#63bdb6']
			}
		},
		onLoad() {
			this.getWorkList()
		},
		methods: {
			getWorkList() {
				// uni.showLoading({
				// 	title: "正在加载数据..."
        // })
        this.$minApi.getWorkMenu().then(res => {
          // uni.hideLoading();
					// this.workList = res.data;
					
					res.data.forEach(item => {
						item.submenu.forEach(item2 => {
							item2.color = this.itemBgColor[Math.floor(Math.random() * this.itemBgColor.length)]
						})
					});
					console.log(res.data)
					this.workList = res.data;
        }).catch(err => {
          this.tips = "网络错误，小程序端请检查合法域名";
        })
				// uni.request({
				// 	url: '/static/mock/work-list.json',
				// 	data: {},
				// 	success: res => {
				// 		console.log(res)
				// 		this.workList = res.data.data;
				// 	},
				// 	fail: () => {
				// 		this.tips = "网络错误，小程序端请检查合法域名";
				// 	},
				// 	complete() {
				// 		uni.hideLoading();
				// 	}
				// });
			}
		}
	}
</script>

<style>
	.work-page {
		display: flex;
		height: 100%;
		width: 100%;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
	}
	.section-item {
		margin-bottom: 20upx;
		/* padding: 0 32upx 28upx 32upx; */
		border-top: 1upx solid #E5E5E5;
		border-bottom: 1upx solid #E5E5E5;
		background-color: #FFFFFF;
	}

	.section-title {
		margin: 0 32upx;
		line-height: 90upx;
		border-bottom: 1upx solid #F1F1F1;
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
	.icon-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		background-color: #63bdb6;
		border-radius: 50%;
	}
	.icon-box .iconfont {
		color: #FFFFFF;
		font-size: 40upx;
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
