<template>
	<view class="cp">
		<view class="container"  v-for="(item, index) in info" :key="item.id" @click="toShow(item.id)">
			<view class="imgBox">
				<image src="https://img2.baidu.com/it/u=3260703715,260353511&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFit" class="menu-img"></image>
			</view>
			<view class="content">
				<view class="content-inner">
					<text>{{ item.cp_name }}</text>
					<text class="texing">{{ item.texing }}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			info() {
				return this.$store.state.info
			}
		},
		methods: {
			toShow(id) {
				uni.navigateTo({
					url: `/pages/show/show?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.cp {
		padding: 40rpx;
		.container {
			display: flex;
			flex-direction: row;
			border-bottom: 1px solid #e0e0e0;
			.menu-img {
				width: 150rpx;
				height: 150rpx
			}
			.content {
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				.content-inner {
					display: flex;
					flex-direction: column;
					height: 150rpx;
					.texing {
						margin-top: 15rpx;
						display: -webkit-box;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 2; // 此行用于控制从多少行开始，溢出时用省略号替换
					    overflow: hidden;
						font-size: 25rpx
					}
				}
			}
		}
	}
</style>
