<template>
	<view class="content">
		<view class="text-area">
			<view class="imgBox">
				<image class="content-img" src="https://static.iamxk.com/wp-content/uploads/2019/09/743b8dec-60a7-4250-8c32-299b419cbbba.jpg" mode="aspectFill"></image>
			</view>	
			<view class="inner" @click="changeIfShow">
				<text>
					{{ text }}
				</text>
			</view>
		</view>
		
		<view class="inputArea" v-if="ifShow">
			<input type="text" class="inputNode" placeholder="请输入食品或菜名!" v-model="food">
			<button type="primary" @click="searchFood">查询</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: 'Open',
				food: '',
				ifShow: false
			}
		},
		onLoad() {
			
		},
		methods: {
			changeIfShow() {
				this.ifShow = !this.ifShow
				if(this.ifShow === true) {
					this.text = 'Close'
				}
				else {
					this.text = 'Open'
				}
			},
			getData() {
				this.$store.dispatch('getInfo', this.food)
			},
			searchFood() {
				this.getData()
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.text-area {
			.imgBox {
				display: flex;
				justify-content: center;
			}
			.content-img {
				width: 650rpx;
				height: 450rpx;
				margin-top: 30rpx;
			}
			.inner {
				margin: 0 auto;
				width: 200rpx;
				height: 50rpx;
				margin-top: 20rpx;
				padding: 12rpx;
				text-align: center;
				border: 1px solid #3c3f48;
				border-radius: 10rpx;
				font-size: 36rpx;
				color: #3c3f48;
			}
		}
		
		.inputArea {
			display: flex;
			justify-content: center;
			margin-top: 30rpx;
			.inputNode {
				width: 430rpx;
				height: 30rpx;
				padding: 20rpx;
				border: 1px solid #3c3f48;
				border-radius: 10rpx;
			}
			button {
				margin: 0;
				background-color: #273713;
			}
		}
	}

	
</style>
