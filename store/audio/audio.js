import resourecs from "./musicResourecs.js"
let musics = resourecs.musicResourecs
let audio, timeout

export default {
	state: {
		playStatus: false,
		currentPlayIndex: 0,
		durationTime: 10,
		currentTime: 0,
		audioList: []
	},
	getters: {
		audioName(state) {
			let currentIndex = state.currentPlayIndex
			return musics[currentIndex].name
		},
		singerName(state) {
			let currentIndex = state.currentPlayIndex
			let singer = musics[currentIndex].singer
			return singer.name
		},
		singerSynopsis(state) {
			let currentIndex = state.currentPlayIndex
			let singer = musics[currentIndex].singer
			return singer.synopsis
		}
	},
	mutations: {
		// 销毁
		destruction() {
			audio.offPlay()
			audio.offPause()
			audio.offStop()
			audio.offEnded()
			audio.offError()
		},
		audioPlay(state) {
			audio.src = musics[state.currentPlayIndex].src
			audio.play()
		},
		audioPause() {
			audio.pause()
		},
		audioStop() {
			audio.stop()
		},
		audioSeek(state, pos) {
			audio.seek(pos)
		},
		getDurationTime(state, time) {
			state.durationTime = time
		},
		changePlayIndex(state, index) {
			state.currentPlayIndex = index
		},
		changeCurrentTime(state, time) {
			state.currentTime = time
		},
		changePlayStatus(state, Boolean) {
			state.playStatus = Boolean
		},
		getAudioList(state, audioList) {
			for (let item of audioList) {
				state.audioList.push({
					id: item.id,
					audioName: item.name,
					singerName: item.singer.name,
					playStatus: 0 // -1:暂停 | 0:停止 | 1:播放
				})
			}
		}
	},
	actions: {
		init({
			commit,
			dispatch
		}) {
			if (audio) return
			audio = uni.createInnerAudioContext()
			commit('getDurationTime', audio.duration)
			commit('getAudioList', musics)

			// 监听
			audio.onPlay(() => {
				commit('changePlayStatus', true)
				commit('getDurationTime', audio.duration)
			})
			audio.onPause(() => {
				commit('changePlayStatus', false)
			})
			audio.onStop(() => {
				commit('changePlayStatus', false)
			})
			audio.onEnded(() => {
				commit('changePlayStatus', false)
				dispatch('PreOrNext', 'next')
			})
			audio.onError((res) => {
				commit('changePlayStatus', false)
				console.log(res)
			})
			audio.onTimeUpdate(() => {
				commit('changeCurrentTime', audio.currentTime)
			})
		},
		PlayOrPause({
			state,
			commit
		}) {
			if (!state.playStatus) {
				commit('audioPlay')
			} else {
				commit('audioPause')
			}
		},
		PreOrNext({
			state,
			commit
		}, type) {
			commit('audioStop')

			let currentIndex = state.currentPlayIndex
			let lastIndex = musics.length - 1
			switch (type) {
				case 'pre':
					currentIndex === 0 ? commit('changePlayIndex', lastIndex) : commit('changePlayIndex', currentIndex -
						1)
					break
				case 'next':
					currentIndex === lastIndex ? commit('changePlayIndex', 0) : commit('changePlayIndex', currentIndex +
						1)
					break
				default:
					break
			}
			commit('audioPlay')
		},
		sliderToPlay({
			state,
			commit
		}, {
			detail: {
				value: position
			}
		}) {
			let time = position
			commit('audioSeek', position)
			if (!state.playStatus) {
				// commit('audioPlay')
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					commit('changeCurrentTime', time)
				}, 200)
			}
		}
	}
}
