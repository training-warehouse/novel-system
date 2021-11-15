<template>
	<text class="iconfont" :class="[iconId,iconColor]" :style="{fontSize:`${iconSize}rpx`}"></text>
</template>

<script>
	export default {
		name: "icon",
		props: {
			iconId: {
				type: String,
				default: ''
			},
			iconColor: {
				style: String,
				default: 'text-dark'
			},
			iconSize: {
				type: String,
				default: "45"
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
