<template>
	<view>
		<page-title Theme="geryTheme">图书详情</page-title>
		<view style="background-color: #a8b0c3;height: 250rpx;" class="geryTheme flex align-center py-2">
			<image src="../../static/Rebook/Rebook1.jpg" mode="widthFix" lazy-load class="flex-1 mx-2 rounded"></image>
			<view class="flex-2 mx-2">
				<view style="font-size: 45rpx;">{{name}}</view>
				<view class="font mt-1">作者：{{author}}</view>
				<view class="flex align-center mt-2">
					<button type="default" class="flex-1 mx-2">分享</button>
					<button type="default" class="flex-1 mx-2">收藏</button>
				</view>
			</view>
		</view>

		<view class="shadow" style="height: 1210rpx;">
			<tab-top :tabArr="['详情','目录']" @getTabIndex='getTabIndex'></tab-top>

			<!-- 详情 -->
			<scroll-view scroll-y v-if="tabIndex === 0" style="height: 1129rpx;">
				<view>
					<view class="py-2 flex justify-center text-light-black font-lg">--简介--</view>
					<view class="px-2 font-lg" style="line-height: 80rpx;">{{synopsis}}</view>
				</view>
			</scroll-view>

			<!-- 目录 -->
			<scroll-view scroll-y v-else style="height: 1129rpx;">
				<block v-for="item in chapterCatalog" :key='item.id'>
					<view class="p-2 text-ellipsis border-bottom" hover-class="bg-light" @tap="toReadingPage(item.id)">
						{{item.title}}
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import pageTitle from '@/components/pageTitle.vue'
	import tabTop from '@/components/tabTop.vue'

	import test from '@/common/test.js'

	export default {
		components: {
			pageTitle,
			tabTop
		},
		data() {
			return {
				name: test.name,
				author: test.author,
				synopsis: test.synopsis,
				chapterCatalog: test.chapterCatalog,
				tabIndex: 0
			}
		},
		methods: {
			getTabIndex(index) {
				this.tabIndex = index
			},
			toReadingPage(id){
				
			}
		}
	}
</script>

<style>
	.geryTheme {
		background-color: #a8b0c3;
	}
</style>
