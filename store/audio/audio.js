import resourecs from "./musicResourecs.js"
let musics = resourecs.musicResourecs
let audio

export default {
	state: {
	},
	getters: {

	},
	mutations: {
		// 监听
		addAudioEvent(){
			audio.onPlay(()=>{
				
			})
			audio.onPause(()=>{
				
			})
			audio.onStop(()=>{
				
			})
			audio.onEnded(()=>{
				
			})
			audio.onError((res)=>{
				console.log(res.errMsg)
				console.log(res.errCode)
			})
		},
		// 销毁
		destruction(){
			audio.offPlay()
			audio.offPause()
			audio.offStop()
			audio.offEnded()
			audio.offError()
		}

	},
	actions: {
		init({commit}){
			if(audio){
				return
			}
			audio = uni.createInnerAudioContext()
			commit('addAudioEvent')
		}
	}
}
