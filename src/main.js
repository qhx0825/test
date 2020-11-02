import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import api from '@/utils/api.js'
import store from '@/store/index.js'
Vue.config.productionTip = false

Vue.prototype.$axios = api
new Vue({
	router,
	store,
	render: h => h(App),
	methods:{
		
	}
}).$mount('#app')
