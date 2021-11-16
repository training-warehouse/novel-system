<template>
	<view class="fixed-bottom mx-2 mb-1 rounded"
		style="height: 160rpx;margin-bottom: 120rpx; background-color: #d1ccc0;opacity: 0.9;">
		<!-- 进度部分 -->
		<view class="flex align-center justify-center font" style="color: #7a8388;height: 65rpx;">
			<!-- 总时长 -->
			<view>00:00</view>
			<!-- 进度条 -->
			<view style="width: 500rpx;">
				<slider block-size="16" activeColor="#e48267" backgroundColor="#eef2f3" />
			</view>
			<!-- 当前播放时间 -->
			<view>00:00</view>
		</view>

		<view style="height: 95rpx;" class="flex align-center justify-between mx-2">
			<!-- 音频相关信息 -->
			<view class="font" style="color: #424651;">
				<view>歌手-The One</view>
				<view>歌曲-暗香</view>
			</view>
			<!-- 音频按钮 -->
			<view>
				<my-icon iconId="icon-shangyishou" iconSize="75"></my-icon>
				<my-icon iconId="icon-ziyuan" iconSize="75" class="mx-2"></my-icon>
				<my-icon iconId="icon-xiayishou" iconSize="75"></my-icon>
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
	export default {
		name: "myAudio",
		data() {
			return {

			};
		},
		computed: {
			...mapState({
			}),
		},
		methods:{
			...mapMutations([
				'destruction'
			]),
			...mapActions([
				'init'
			])
		},
		mounted() {
			this.init()
		},
		destroyed() {
			this.destruction()
		}
	}
</script>

<style>

</style>
