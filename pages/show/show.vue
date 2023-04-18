<template>
	<view class="container">
		<view class="introduce">
			<text class="cp-name">{{ newInfo.cp_name }}</text>
			<text>菜品类别：{{ newInfo.type_name }}</text>
			<text>菜品特点：柔软润香，鲜咸适口</text>
		</view>
		<view class="ready">
			<text class="title">需要准备的材料：</text>
			<view class="ready-inner">
				<view class="tiaoliao">
					<text>所需调料：</text>
					<view class="tiaoliao-content">
						<text>{{ newInfo.tiaoliao }}</text>
					</view>
				</view>
				<view class="yuanliao">
					<text>原料：</text>
					<view class="yuanliao-content">
						<text>{{ newInfo.yuanliao }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="method">
			<text class="title">做法：</text>
			<view class="zuofa-content">
				<text>{{ newInfo.zuofa }}</text>
			</view>
		</view>
		<view class="info">
			<text class="title">！！！提示：</text>
			<view class="info-content">
				<text>{{ newInfo.tishi }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newInfo: {}
			};
		},
		onLoad(id) {
			let info = this.$store.state.info
			info.forEach((item, index) => {
				if(item.id == id.id) {
					this.newInfo = item
				}
			})
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 35rpx;
		.introduce {
			display: flex;
			flex-direction: column;
			padding-bottom: 10rpx;
			border-bottom: 1px solid #273713;
			.cp-name {
				height: 50rpx;
				line-height: 60rpx;
				padding-bottom: 10rpx;
				font-size: 40rpx;
				border-bottom: 1px solid #273713;
				text-align: center;
				background-color: #273713;
				color: white
			}
			text {
				margin-top: 20rpx
			}
		}
		.ready {
			margin-top: 20rpx;
			padding-bottom: 10rpx;
			border-bottom: 1px solid #273713;
			.title {
				font-size: 35rpx;
			}
			.ready-inner {
				display: flex;
				flex-direction: row;
				margin-top: 10rpx;
				.tiaoliao {
					width: 50%;
					padding: 10rpx;
					border-right: 1px solid #e0e0e0;
				}
				.yuanliao {
					width: 50%;
					padding: 10rpx;		
				}
			}
		}
		.method {
			margin-top: 20rpx;
			padding-bottom: 10rpx;
			border-bottom: 1px solid #273713;
			.title {
				font-size: 35rpx;
			}
			text {
				font-size: 30rpx
			}
			.zuofa-content {
				margin-top: 20rpx;
			}
		}
		.info {
			margin-top: 20rpx;
			padding-bottom: 10rpx;
			.title {
				font-size: 35rpx;
			}
			.info-content {
				margin-top: 20rpx;
			}
		}
	}
</style>
