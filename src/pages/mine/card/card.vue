<template>
	<view class="mine-card-page">
		<scroll-view scroll-y="true" style="height: 100%">
			<view class="head-tips">
				<view class="tips"
					>免费用户暂不可用名片，你可查看示例小程序的名片效果</view
				>
				<view class="btn-view">
					查看效果
				</view>
			</view>
			<view class="card-progress">
				<view class="progress-info">
					名片完整度 <text class="rate">2%</text>
					<text class="small">（击败全国 0% 用户）</text>
				</view>
				<progress percent="20" stroke-width="6"></progress>
			</view>
			<view class="card-item">
				<view class="card-head">
					<view class="card-head-left">名片信息</view>
					<view class="card-head-right">
						编辑
						<text class="iconfont icon-arrow-right1"></text>
					</view>
				</view>
				<view class="card-content"> </view>
			</view>
			<view>1</view>
			<view>2</view>
			<view>3</view>
			<view>4</view>
			<view>5</view>
			<view>6</view>
			<view>7</view>
			<view>8</view>
			<view>9</view>
			<view>10</view>
			<view>11</view>
			<view>12</view>
			<view>13</view>
			<view>14</view>
			<view>15</view>
			<view>16</view>
			<view>17</view>
			<view>18</view>
			<view>19</view>
			<view>20</view>
			<view>21</view>
			<view>22</view>
			<view>23</view>
			<view>24</view>
			<view>25</view>
			<view>26</view>
			<view>27</view>
			<view>28</view>
			<view>29</view>
			<view>30</view>
		</scroll-view>
	</view>
</template>

<script>
export default {};
</script>

<style>
.mine-card-page {
	height: 100%;
}
.head-tips {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: #e7f7fd;
	padding: 25upx;
}
.head-tips .tips {
		line-height: 1.6;
}
.head-tips .btn-view {
	margin-left: 20upx;
	padding: 10upx 20upx;
	white-space:nowrap;
	border: 1upx solid #3d86b9;
	color: #3d86b9;
	border-radius: 8upx;
}
.card-progress {
	display: flex;
	flex-direction: column;
	padding: 25upx;
	background-color: #ffffff;

}
.progress-info {
		color: #333;
}
.progress-info .rate{
	margin: 0 20upx;
	font-size: 42upx;
	color: #4a7794;
}
.progress-info .small {
	font-size: 24upx;
}
.card-progress progress {
	padding: 30upx 0;
}
.card-item {
	mr
}
</style>
