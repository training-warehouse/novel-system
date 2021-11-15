import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import myIcon from '@/components/myIcon.vue'
Vue.config.productionTip = false
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight
Vue.component('myIcon', myIcon)
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
