<template>
	<view>
		<block v-for="(mitem,mindex) in bookList" :key="mindex">
			<view style="height: 320rpx;" class="border-bottom flex align-center p-1" hover-class="bg-light">
				<image :src="mitem.imgurl" mode="aspectFill" class="rounded mx-2" style="width: 250rpx;height: 250rpx;">
				</image>
				<view class="flex-1" style="height: 100%;">
					<view class="font-md font-weight-bold py-2">{{mitem.name}}</view>
					<view class="font text-light-black">{{mitem.synopsis}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "bookList",
		props: {
			bookList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
