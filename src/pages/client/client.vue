<template>
	<view class="client-page">
		<global-fab></global-fab>
		<view class="header">
			<view class="sort" :class="{'active': isSort && mask}"  @tap="handleSortOrFilter('sort')">
				排序
				<text class="iconfont icon-arrow-right"></text>
			</view>
			<view class="filter" :class="{'active': !isSort && mask}" @tap="handleSortOrFilter('filter')">
				<text class="iconfont icon-filter"></text>
				高级筛选
			</view>

		</view>
		<view class="mask-wrap" v-show="mask" @tap="mask = false">
			<view class="sort-container" v-show="isSort">
				<view @tap.stop="selectSort('客户名称正序')">客户名称正序</view>
				<view @tap.stop="selectSort('客户名称倒序')">客户名称倒序</view>
				<view @tap.stop="selectSort('创建时间正序')">创建时间正序</view>
				<view @tap.stop="selectSort('创建时间倒序')">创建时间倒序</view>
				<view @tap.stop="selectSort('最后跟进时间正序')">最后跟进时间正序</view>
				<view @tap.stop="selectSort('最后跟进时间倒序')">最后跟进时间倒序</view>
			</view>
			<view class="filter-container" v-show="!isSort">
				<view class="filter-list">
					<view class="filter-list-left">
						<view class="current">
							筛选场景
						</view>
					</view>
					<view class="filter-list-right">
						<view>全部客户</view>
						<view>我负责的客户</view>
						<view>下属负责的客户</view>
						<view>我参与的客户</view>
						<view>我关注的客户</view>
						<view>重点客户</view>
						<view>次重点客户</view>
					</view>
				</view>
				<view class="filter-bottom">
					<view style="color: #007AFF;">自定义筛选</view>
					<view class="filter-btn-group">
						<button type="primary" size="mini" plain="true">重置</button>
						<button type="primary" size="mini">完成</button>
					</view>
				</view>
			</view>
		</view>
		<view class="client-list">

			<!-- #ifdef APP-NVUE -->
			<list class="scroll-v list" enableBackToTop="true" scroll-y loadmoreoffset="15" @loadmore="loadMore()" style="flex: 1">
								<refresh class="refresh" @refresh="onrefresh()" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
					<div class="refresh-view">
						<image class="refresh-icon" :src="refreshIcon" :style="{width: (refreshing || pulling) ? 0: '30px'}" :class="{'refresh-icon-active': refreshFlag}"></image>
						<loading-indicator class="loading-icon" animating="true" v-if="refreshing"></loading-indicator>
						<text class="loading-text">{{refreshText}}</text>
					</div>
				</refresh>
				<cell v-for="(item,i) in listData" :key="i">
					<view class="client-item">
						<view class="title">
							<view class="username"></view>
							<view class="tag" :class="i % 2 == 0 ? 'wrining':'success'"></view>
						</view>
						<view class="info">
							<view class="follow-time">最后跟进时间：<text class="date-time">2020-02-13</text></view>
							<view class="">
								谁谁谁呜呜呜呜
							</view>
						</view>
					</view>
				</cell>
				<cell class="loading-more" v-if="isLoading || listData.length > 7">
					<text class="loading-more-text">{{loadingText}}</text>
				</cell>
			</list>
			<!-- #endif -->

			<!-- #ifndef APP-NVUE -->
			<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y @scrolltolower="loadMore()" style="flex: 1">
				<view v-for="(item,i) in listData" :key="i">
					<view class="client-item">
						<view class="title">
							<view class="username">客户名称</view>
							<view class="tag">初访</view>
						</view>
						<view class="info">
							<view class="info-left">
								<view class="">
									联系人：<text>谁谁谁</text>
								</view>
								<view class="">
									电话： <text>13888889999</text>
								</view>
								<view class="">
									备注： <text>客户备注客户备注</text>
								</view>
								
							</view>
							<view class="info-right">
								<view class="sms">
									<text class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></text>
								</view>
								<view class="phone">
									<text class="iconfont icon-dianhua"></text>
								</view>
								
							</view>
						</view>
						<view class="bottom">
							<view class="follow-time">
								1月14日 14:22
								<text class="tag">电话未接</text>
							</view>
							<view class="icon-group">
								<text class="icon-font"></text>
								<text class="icon-font"></text>
							</view>
						</view>
					</view>
				</view>
				<view class="loading-more" v-if="isLoading || listData.length > 7">
					<text class="loading-more-text">{{loadingText}}</text>
				</view>
			</scroll-view>
			<!-- #endif -->
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				mask: false,
				isSort: true,
				listData: [{
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}, {
					id: 1,
					title: '哈哈哈哈'
				}],
				isLoading: false,
				refreshText: "",
				loadingText: '加载更多...',
				refreshing: false,
				pulling: false,
				refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
			}
		},
		onLoad() {
			// this.getList(0);
		},
		onNavigationBarButtonTap(e) {
			uni.showToast({
				title: '你点击了搜索',
				icon: 'none'
			})
		},
		methods: {
			selectSort(sort) {
				console.log('selectSort')
				this.mask = false
				uni.showToast({
					title: '你选择了 ' + sort,
					icon: 'none'
				})
			},
			handleSortOrFilter(flag) {
				if (flag === 'sort') {
					if (this.isSort && this.mask) {
						this.mask = false
					} else {
						this.mask = true
					}
					this.isSort = true
				} else {
					if (!this.isSort && this.mask) {
						this.mask = false
					} else {
						this.mask = true
					}
					this.isSort = false
				}
			},
			getList(index) {
				// let activeTab = this.newsList[index];
				// let list = [];
				// for (let i = 1; i <= 10; i++) {
				//     let item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);
				//     item.id = this.newGuid();
				//     list.push(item);
				// }
				this.listData = this.listData.concat(this.listData);
			},
			loadMore(e) {
				setTimeout(() => {
					this.getList(this.tabIndex);
				}, 500)
			},
			onpullingdown(e) {
			    // var tab = this.newsList[this.tabIndex];
			    if (this.refreshing || this.pulling) {
			        return;
			    }
			    if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
			        this.refreshFlag = true;
			        this.refreshText = "释放立即刷新";
			    } else {
			        this.refreshFlag = false;
			        this.refreshText = "下拉可以刷新";
			    }
			},
			refreshData() {},
			onrefresh(e) {
			    // var tab = this.newsList[this.tabIndex];
			    if (!this.refreshFlag) {
			        return;
			    }
			    this.refreshing = true;
			    this.refreshText = "正在刷新...";
			
			    setTimeout(() => {
			        this.refreshData();
			        this.pulling = true;
			        this.refreshing = false;
					this.refreshFlag = false;
			        this.refreshText = "已刷新";
			        setTimeout(() => { // TODO fix ios和Android 动画时间相反问题
			            this.pulling = false;
			        }, 500);
			    }, 2000);
			},
		}
	}
</script>

<style>
	.client-page {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	.header {
		
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 0 32upx;
		height: 80upx;
		border-bottom: 1px solid #F1F1F1;
		background-color: #FFFFFF;
	}
	.sort.active, .filter.active {
		color: #007AFF;
	}
	.mask-wrap {
		position: absolute;
		top: 82upx;
		left: 0;
		right: 0;
		bottom: 0;
		
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}
	.sort-container, .filter-container {
		
		background-color: #FFFFFF;
	}
	.sort-container > view {
		line-height: 80upx;
		padding: 0 36upx;
		border-bottom: 1px solid #F2F2F2;
	}
	.sort-container > view:last-child {
		border: none;
	}
		
	.filter-list {
		display: flex;
		flex-direction: row;
		height: 600upx;
	}
	.filter-list-left {
		flex: 1;
		background-color: #f6f7f8;
	}
	.filter-list-left> view {
		line-height: 80upx;
		padding: 0 36upx
	}
	.filter-list-left> view.current {
		color: #007AFF;
		background-color: #FFFFFF;
	}
	.filter-list-right {
		flex: 2
	}
	.filter-list-right> view {
		line-height: 80upx;
		margin-left: 80upx;
		border-bottom: 1px solid #F2F2F2;
	}
	.filter-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		padding: 0 36upx;
		border-top: 1px solid #F2F2F2;
	}
	.filter-btn-group {
		display: flex;
		flex-direction: row;
	}
		
	.filter-btn-group>button {
		margin: 0 10upx;
	}
	
	.header .iconfont {
		font-size: 22upx;
		vertical-align: middle;
		margin: 0 8upx;
		color: #CCCCCC;
	}

	.client-list {
		flex: 1;
		width: 750upx;
		display: flex;
		overflow: hidden;
		/* margin-top: 20upx; */
	}

	.client-item {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin: 20upx;
		padding: 20upx;
	}
	.client-item>.title, .client-item> .info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.client-item> .info {
		padding-bottom: 20upx;
		border-bottom: 1px solid #F1F1F1;
	}
	.client-item>.title>.username {
		font-size: 32upx;
		font-weight: 700;
		color: #333333;
	}

	.client-item:nth-of-type(even) {
		background-color: #007AFF;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
	.title>.tag {
		padding: 0 30upx;
		border-radius: 50upx;
		font-weight: 700;
		background-color: #e6f0fc;
		color: #3f69f2;
	}

	.info-right {
		display: flex;
		flex-direction: row;
		
	}
	.info-right .sms, .info-right .phone {
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 50%;
		background-color: #007AFF;
		margin: 0 10upx;
		text-align: center;
	}
	.info-right .iconfont{
		font-size: 40upx;
		color: #fff;
	}
</style>
