import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 注册
export default{
	namespaced:'cart',
	state:{
		cList:[],
		allCheck:false,
		list1:[],
		goodsNum:''
	},
	getters:{
	
	},
	//mutations 修改state 更新页面
	mutations:{
		updateClist(state,payload){
			state.cList = payload
			state.cList.map(ele=>{
				ele.checked = false
				state.list1 = []
				state.allCheck = false
				state.goodsNum = state.cList.length
				// console.log
			})
		},
		changeCheck(state,payload){
			state.cList.map(ele=>{
				if(ele.good_id == payload){
					ele.checked = !ele.checked
				}
			})
		},
		changeall(state){
			state.allCheck = !state.allCheck
			if(state.allCheck){
				state.cList.map(ele=>{
					ele.checked = true
				})
				state.list1 = state.cList
			}else{
				state.cList.map(ele=>{
					ele.checked = false
				})
				state.list1 = []
			}
		},
		setlist1(state,payload){
			state.cList.map(ele=>{
				if(ele.good_id == payload){
					ele.checked = !ele.checked
				}
				state.list1 = []
				state.cList.map(ele=>{
					if(ele.checked){
						state.list1.push(ele)
					}
				})
				if(state.list1.length < state.cList.length){
					state.allCheck = false
				}else if(state.list1.length == state.cList.length){
					state.allCheck = true
				}
			})
		},
		deleteClist(state,payload){
			state.cList.forEach((ele,idx)=>{
				// console.log()
				if(ele.good_id == payload.good_id){
					state.cList.splice(idx,1)
				}
			})
			if(state.list1.length >= state.cList.length){
				state.allCheck = true
			}
		},
		reserCheck(state){
			state.allCheck = false
		}
	},
	//actions 后端交互 获取值更新state
	actions:{
		
	}
}