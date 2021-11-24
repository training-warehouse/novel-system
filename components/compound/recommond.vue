<template>
	<view>
		<list-header>
			<template #title>
				猜你喜欢
			</template>
			<template #tips>
				更多推荐
			</template>
		</list-header>
		<view class="flex align-center">
			<block v-for="(item,index) in Rebooks" :key="index">
				<view class="flex flex-column align-center flex-1 position-relative" @tap="toBookDetail(index)">
					<image :src="item.src" mode="widthFix" class="w-100"></image>
					<text class="font my-1 text-light-black">{{item.name}}</text>
					<my-icon iconId="icon-erji" iconColor="text-light-white" iconSize="35" class="position-absolute"
						style="left: 50rpx;top:20rpx"></my-icon>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import listHeader from '@/components/listHeader.vue'

	export default {
		name: "recommond",
		props: {
			Rebooks: {
				type: Array,
				default: () => []
			}
		},
		components: {
			listHeader
		},
		data() {
			return {

			};
		},
		methods: {
			toBookDetail(bookID) {
				if (bookID === 0) {
					uni.navigateTo({
						url: '/pages/bookDetail/bookDetail'
					})
				}
			}
		}
	}
</script>

<style>

</style>
