import axios from './axios.js'
export function regist(data){
	return axios({
		url:'/jd/regist',
		method:'POST',
		data
	})
}

export function login(data){
	return axios({
		url:'/jd/login',
		method:'POST',
		data,
	})
}

export function getAllCates(params){
	return axios({
		methods:'GET',
	url:'/jd/getAllCates',
	params
	})
}


export function getCateGoodList(params){
	return axios({
	methods:'GET',
	url:'/jd/getCateGoodList',
	params
	})
}
export function getHotGoodList(params){
	return axios({
		url:'/jd/getHotGoodList',
		method:'GET',
		params,
	})
}
export function getGoodDetail(params){
	return axios({
		url:'/jd/getGoodDetail',
		method:'GET',
		params,
	})
}
export function addToCart(data){
	return axios({
		url:'/jd/addToCart',
		method:'POST',
		data,
	})
}
export function getCartList(params){
	return axios({
		url:'/jd/getCartList',
		method:'GET',
		params,
	})
}

export function updateCartNum(data){
	return axios({
		url:'/jd/updateCartNum',
		method:'POST',
		data,
	})
}

export function deleteToCart(params){
	return axios({
		url:'/jd/deleteToCart',
		method:'GET',
		params,
	})
}
export function submitToCart(data){
	return axios({
		url:'/jd/submitToCart',
		method:'POST',
		data,
	})
}
export default{
	regist,
	login,
	getHotGoodList,
	getAllCates,
	getCateGoodList,
	getGoodDetail,
	addToCart,
	getCartList,
	updateCartNum,
	deleteToCart,
	submitToCart
	
}