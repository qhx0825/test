import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cate from './modules/cate.js'
import cart from './modules/cart.js'

export default new Vuex.Store({
	state:{},
	getters:{},
	mutations:{},
	actions:{},
	modules:{
		cate,
		cart
	}
})