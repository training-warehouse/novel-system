<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`,paddingTop:`60rpx`}" :class="Theme"></view>
		<view :style="{height:`${statusBarHeight}px`}" class="fixed-top" :class="Theme"></view>
		<view class="flex align-center position-fixed w-100" :class="Theme"
			:style="{height:`60rpx`,top:`${statusBarHeight}px`,zIndex:100}">
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
		props: {
			Theme: {
				type: String,
				default: 'bg-white'
			}
		},
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
