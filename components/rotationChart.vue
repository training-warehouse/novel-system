<template>
	<view class="m-2">
		<swiper indicator-dots autoplay circular style="height: 380rpx;" indicator-active-color="#ffffff"
			@change="getCurrentImgIndex">
			<swiper-item v-for="(item,index) in imgArr" :key="index">
				<image :src="item.src" mode="aspectFill" class="w-100 animated" :class="currentImgIndex == index ? 'my-animate':''" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "rotationChart",
		props: {
			imgArr: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				currentImgIndex: 0
			};
		},
		methods: {
			getCurrentImgIndex(e) {
				this.currentImgIndex = e.detail.current
			}
		}
	}
</script>

<style>
</style>
