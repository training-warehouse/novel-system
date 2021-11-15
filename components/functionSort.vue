<template>
	<view class="flex align-center justify-between mx-3 my-4">
		<block v-for="(item,index) in functionSortArr" :key="index">
			<view class="flex flex-column align-center">
				<my-icon :iconId="item.iconId" :iconColor="item.iconColor" iconSize="65"></my-icon>
				<text class="mt-2 font text-light-black">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "functionSort",
		props: {
			functionSortArr: {
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
