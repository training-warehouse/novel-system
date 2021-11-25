<template>
	<view class="flex align-center border" style="height: 80rpx;justify-content: space-around;">
		<block v-for="(item,index) in tabArr" :key="index">
			<view class="flex flex-column align-center justify-between" style="height: 80rpx;"
				@tap="changeTabIndex(index)">
				<view class="pt-1 text-light-black animated faster" :class="tabIndex === index ? 'font-weight-bold pluse':''">{{item}}</view>
				<view class="rounded animated zoomIn faster"
					style="width: 80rpx;height: 8rpx;background-color: #fb5f39;" v-if="tabIndex === index"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "tabTop",
		props: {
			tabArr: Array,
			default: () => []
		},
		data() {
			return {
				tabIndex: 0
			};
		},
		methods: {
			changeTabIndex(index) {
				this.tabIndex = index
				this.$emit('getTabIndex', this.tabIndex)
			}
		}
	}
</script>

<style>

</style>
