<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`,paddingTop:`60rpx`}" class="bg-white"></view>
		<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white"></view>
		<view class="flex align-center position-fixed bg-white w-100" :style="{height:`60rpx`,top:`${statusBarHeight}px`,zIndex:100}">
			<my-icon iconId="icon-jiantou-copy" class="mx-2" @iconTap="quit"></my-icon>
			<view class="font-lg">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "pageTitle",
		data() {
			return {
				statusBarHeight: this.$statusBarHeight
			};
		},
		methods: {
			quit() {
				console.log('aaaa')
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>

</style>
