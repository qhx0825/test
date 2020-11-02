export default{
	namespaced:true,
	state:{
		cateObj:{},
		aKey:'',
		goodList:[]
	},
	getters:{
		
	},
	mutations:{
		updateCateObj(state,payload){
			state.cateObj[payload.idx] = payload.arr
		},
		updateActiveKey(state,payload){
			state.aKey = payload
			console.log(state.aKey)
		},
		updateGoodList(state,payload){
			state.goodList = payload
		}
	},
	actions:{
		
	},
}