<template>
	<view>
		<page-title>音乐详情</page-title>
		<!-- 歌曲信息 -->
		<view class="d-inline-block w-100 text-center py-4">
			<view>
				<text class="font">歌曲：</text>
				<text class="font-weight-bold">{{audioName}}</text>
			</view>
			<view>
				<text class="font">歌手：</text>
				<text class="font-weight-bold">{{singerName}}</text>
			</view>
		</view>

		<!-- 歌曲图片 -->
		<view style="height: 420rpx;" class="flex align-center justify-center">
			<image src="../../static/music/music1.png" mode="widthFix" lazy-load
				style="border-radius: 35rpx;box-shadow: 0 2rpx 6rpx 0;"></image>
		</view>

		<!-- 进度部分 -->
		<view class="flex align-center justify-center font" style="color: #7a8388;height: 65rpx;">
			<!-- 总时长 -->
			<view>{{durationTime|formatTime}}</view>
			<!-- 进度条 -->
			<view style="width: 500rpx;">
				<slider block-size="16" activeColor="#e48267" backgroundColor="#eef2f3" :max="durationTime"
					:value="currentTime" @change="sliderToPlay" @changing="sliderToPlay" />
			</view>
			<!-- 当前播放时间 -->
			<view>{{currentTime|formatTime}}</view>
		</view>

		<!-- 按钮部分 -->
		<view>
			<view class="flex align-center justify-center" style="padding-top: 60rpx;">
				<view class="mr-3">
					<my-icon iconId="icon-shangyixiang" iconSize="85"></my-icon>
				</view>
				<view class="mx-5">
					<my-icon iconId="icon-bofang1" iconSize="80"></my-icon>
				</view>
				<view class="ml-2">
					<my-icon iconId="icon-xiayixiang" iconSize="85"></my-icon>
				</view>
			</view>
			
			<view class="flex align-center justify-center font text-light-black" style="padding-top: 100rpx;">
				<view class="flex flex-column align-center">
					<my-icon iconId="icon-icon--" iconSize="60"></my-icon>
					<text class="pt-1">播放列表</text>
				</view>
				<view class="flex flex-column align-center" style="padding: 0 80rpx;">
					<my-icon iconId="icon-aixinfengxian" iconSize="60"></my-icon>
					<text class="pt-1">收藏</text>
				</view>
				<view class="flex flex-column align-center">
					<my-icon iconId="icon-yejianmoshi" iconSize="60"></my-icon>
					<text class="pt-1">夜间模式</text>
				</view>
			</view>
		</view>
		
		<view class="fixed-bottom shadow p-2" style="height: 260rpx;border-radius: 30rpx;">
			<view class="flex justify-between">
				<view>
					<view>
						<text class="font">歌曲：</text>
						<text class="font-weight-bold">{{audioName}}</text>
					</view>
					<view>
						<text class="font">歌手：</text>
						<text class="font-weight-bold">{{singerName}}</text>
					</view>
				</view>
				<my-icon iconId="icon-jieshao" iconSize="65"></my-icon>
			</view>
			
			<view>
				<view class="font-md pt-2">歌手简介：</view>
				<view class="text-ellipsis w-100">
				{{singerSynopsis}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'

	import pageTitle from '@/components/pageTitle.vue'
	import unit from '@/common/unit.js'

	export default {
		components: {
			pageTitle
		},
		filters: {
			formatTime(num) {
				return unit.formatTime(num)
			}
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				durationTime: ({
					audio
				}) => audio.durationTime,
				currentTime: ({
					audio
				}) => audio.currentTime,
			}),
			...mapGetters([
				'audioName',
				'singerName',
				'singerSynopsis'
			])

		},
		methods: {
			// ...mapMutations([

			// ]),
			...mapActions([
				'sliderToPlay'
			])
		}
	}
</script>

<style>

</style>
