<template>
	<view>
		<view :class="curTheme" :style="{height:`${statusBarHeight}px`}" class="cal"></view>

		<!-- 设置开始 -->
		<!-- 设置头部 -->
		<view class="fixed-top shadow animated slideInDown" :class="curTheme" v-if="setStatus">
			<view :style="{height:`${statusBarHeight}px`}"></view>
			<view class="flex align-center" style="height: 80rpx;">
				<my-icon iconId="icon-jiantou-copy" class="px-2" @iconTap='quit'></my-icon>
				<text>{{novalName}}</text>
				<text class="flex-1 px-2 font-sm text-ellipsis">章节：{{curChapterTitle}}</text>
			</view>
		</view>

		<!-- 设置底部 -->
		<view style="height: 200rpx;" class="fixed-bottom shadow flex align-center font animated slideInUp"
			:class="curTheme" v-if="setStatus">
			<view class="flex-1 flex flex-column align-center" @tap="changeCatalogStatus(true)">
				<my-icon iconId="icon-xueyuan-mulu" iconSize="55"></my-icon>
				<view>目录</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="isNight">
				<my-icon iconId="icon-yanjing" iconSize="55"></my-icon>
				<view>夜间模式</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeTypeFaceStatus(true)">
				<my-icon iconId="icon-ziti1" iconSize="55"></my-icon>
				<view>字体</view>
			</view>
			<view class="flex-1 flex flex-column align-center" @tap="changeMoreStatus(true)">
				<my-icon iconId="icon-diqiuhuanqiu" iconSize="55"></my-icon>
				<view>更多</view>
			</view>
		</view>
		<!-- 设置结束 -->

		<!-- 目录开始 -->
		<uni-drawer :visible="catalogStatus" @close="changeCatalogStatus(false)">
			<view :style="{height:`${statusBarHeight}px`}"></view>
			<view class="flex align-center justify-center" style="top: 80rpx;">章节选择</view>
			<scroll-view scroll-y :style="{height:`${calHeight - 80}rpx`}">
				<block v-for="item in chapterCatalog" :key='item.id'>
					<view class="px-1 py-2 font text-ellipsis border-bottom rounded"
						:class="chapterIndex + 1 === item.id?'curChapter':''" @tap="toPointChapter(item.id)">
						{{item.title}}
					</view>
				</block>
			</scroll-view>
		</uni-drawer>
		<!-- 目录结束 -->

		<!-- 字体开始 -->
		<view class="fixed-bottom shadow px-3 pt-2  animated slideInUp" style="height: 180rpx;" :class="curTheme"
			v-if="typeFaceStatus">
			<view class="flex">字体：
				<slider @change="changeFontSize" @changing="changeFontSize" class="flex-1" :value="myFontSize" min="20"
					max="50" block-size='16' activeColor="#34495e" backgroundColor="#ecf1f0" />
			</view>
			<view class="flex">间距：
				<slider @change="changeLineHeight" @changing="changeLineHeight" class="flex-1" :value="myLineHeight"
					min="20" max="100" block-size='16' activeColor="#34495e" backgroundColor="#ecf1f0" />
			</view>
		</view>
		<!-- 字体结束 -->

		<!-- 更多设置开始 -->
		<view class="fixed-bottom shadow px-3 animated slideInUp" style="height: 250rpx;" v-if="moreStatus"
			:class="curTheme">
			<view class="flex">亮度：
				<slider class="flex-1" min="0" max="100" :value="brightness" block-size='16' activeColor="#34495e"
					backgroundColor="#ecf1f0" @change="setBrightness" />
			</view>
			<view class="flex font text-light-black" style="justify-content: space-between;">
				<block v-for="item in themes" :key="item.id">
					<view class="flex-1">
						<view :class="item.id" class="border rounded mx-1" style="height: 80rpx;"
							@tap="changeThemeIndex(item.id)"></view>
						<view class="text-center">{{item.name}}</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 更多设置结束 -->

		<!-- 文本开始 -->
		<swiper :style="{height:`${calHeight}rpx`,fontSize:`${myFontSize}px`,lineHeight:`${myLineHeight}px`}"
			:class="curTheme" class="px-2" @tap="changeSetStatus" :current="chapterIndex" @change="swiperChangeChapter">
			<swiper-item v-for="item in LoadedChapters" :key="item.id">
				<scroll-view scroll-y :style="{height:`${calHeight}rpx`}">
					<uni-load-more status="loading" v-if="!item.text"></uni-load-more>
					<rich-text :nodes="item.text"></rich-text>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 文本结束 -->
	</view>
</template>

<script>
	import test from '@/common/test.js'
	import unit from '@/common/unit.js'
	import htmlParser from '@/common/html-parser'

	import uniLoadMore from '@/components/uni-load-more/uni-load-more'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'

	export default {
		components: {
			uniLoadMore,
			uniDrawer
		},
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				novalName: test.name,
				chapterCatalog: test.chapterCatalog,
				calHeight: 0,
				testChapter: test.content,
				setStatus: false,
				typeFaceStatus: false,
				LoadedChapters: [], // 已加载的章节
				chapterIndex: 0, // 当前章节标识,
				catalogStatus: false,
				brightness: 0, // 亮度，
				moreStatus: false,
				myFontSize: uni.getStorageSync('myFontSize') ? uni.getStorageSync('myFontSize') : "20",
				myLineHeight: uni.getStorageSync('myLineHeight') ? uni.getStorageSync('myLineHeight') : "45",
				themes: [{
					id: 'blueTheme',
					name: '天蓝'
				}, {
					id: 'eyeHelpTheme',
					name: '护眼'
				}, {
					id: 'lightGretTheme',
					name: '淡灰'
				}, {
					id: 'morningTheme',
					name: '早晨'
				}, {
					id: 'nightTheme',
					name: '夜间'
				}],
				themeIndex: uni.getStorageSync('themeIndex') === 3 ? 3 : uni.getStorageSync('themeIndex')
			}
		},
		computed: {
			curChapterTitle() {
				return this.chapterCatalog[this.chapterIndex].title
			},
			curTheme() {
				return this.themes[this.themeIndex].id
			}
		},
		methods: {
			changeSetStatus() {
				if (!this.setStatus) {
					if (this.typeFaceStatus || this.moreStatus) {
						this.changeTypeFaceStatus(false)
						this.changeMoreStatus(false)
						return
					}
				}

				this.setStatus = !this.setStatus
			},
			init(id) {
				let currentIndex = this.chapterCatalog.findIndex(item => item.id === Number(id))
				this.changeIndex(currentIndex)
				this.preLoad()
				this.deplyLoad()
			},
			// 预加载
			preLoad() {
				test.chapterCatalog.forEach(item => this.LoadedChapters.push({
					id: item.id,
					title: item.title,
					text: ''
				}))
			},
			// 延迟加载
			deplyLoad() {
				let index = this.chapterIndex
				if (this.LoadedChapters[index].text === '') {
					setTimeout(() => this.LoadedChapters[index].text = htmlParser(test.content[index].text), 1000)
				}
			},
			changeIndex(index) {
				this.chapterIndex = index
			},
			swiperChangeChapter(e) {
				this.changeIndex(e.detail.current)
				this.deplyLoad()
			},
			changeCatalogStatus(bol) {
				this.catalogStatus = bol
				if (this.catalogStatus) {
					this.changeSetStatus()
				}
			},
			toPointChapter(id) {
				let currentIndex = this.chapterCatalog.findIndex(item => item.id === id)
				if (this.chapterIndex !== currentIndex) {
					this.changeIndex(currentIndex)
					this.deplyLoad()
					this.changeCatalogStatus(false)
				}
			},
			changeFontSize(e) {
				this.myFontSize = e.detail.value.toString()
				uni.setStorageSync('myFontSize', this.myFontSize)
			},
			changeLineHeight(e) {
				this.myLineHeight = e.detail.value.toString()
				uni.setStorageSync('myLineHeight', this.myLineHeight)
			},
			changeTypeFaceStatus(bol) {
				this.typeFaceStatus = bol
				if (this.typeFaceStatus) this.changeSetStatus()
			},
			changeMoreStatus(bol) {
				this.moreStatus = bol
				if (this.moreStatus) this.changeSetStatus()
			},
			getBrightness() {
				uni.getScreenBrightness({
					success: e => this.brightness = Math.floor(e.value) * 100
				})
			},
			setBrightness(e) {
				let val = e.detail.value
				uni.setScreenBrightness({
					value: val / 100
				})
			},
			changeThemeIndex(id) {
				let currentIndex = this.themes.findIndex(theme => theme.id === id)
				this.themeIndex = currentIndex

				uni.setStorageSync('themeIndex', this.themeIndex)
			},
			isNight() {
				this.themeIndex !== 4 ? this.changeThemeIndex('nightTheme') : this.changeThemeIndex('morningTheme')
			},
			quit() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		created() {
			let height = unit.getSystemHeight() - unit.Torpx(this.statusBarHeight)
			this.calHeight = Math.floor(height)
			this.getBrightness()
		},
		onLoad(e) {
			this.init(e.chapterId)
		}
	}
</script>

<style>
	.curChapter {
		background-color: #8395a7;
		color: #FFFFFF;
	}
</style>
