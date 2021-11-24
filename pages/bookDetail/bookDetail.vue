<template>
	<view>
		<page-title Theme="geryTheme">图书详情</page-title>
		<view style="background-color: #a8b0c3;height: 250rpx;" class="geryTheme flex align-center py-2">
			<image src="../../static/Rebook/Rebook1.jpg" mode="widthFix" lazy-load class="flex-1 mx-2 rounded"></image>
			<view class="flex-2 mx-2">
				<view style="font-size: 45rpx;">西游记</view>
				<view class="font mt-1">作者：吴承恩</view>
				<view class="flex align-center mt-2">
					<button type="default" class="flex-1 mx-2">分享</button>
					<button type="default" class="flex-1 mx-2">收藏</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageTitle from '@/components/pageTitle.vue'

	export default {
		components: {
			pageTitle
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.geryTheme{
	background-color: #a8b0c3;
}
</style>
