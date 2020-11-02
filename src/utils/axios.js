import axios from 'axios'
// 当接口异常时，弹出提示框
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
const baseURL='http://localhost:8002'
const instance = axios.create({
  baseURL,
  timeout: 7000,//超过请求时间 请求终端
  headers: {}
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  
    // 加token鉴权（识别你是谁）
    // 在发送请求之前，在headers中加上token，发送给后端
    // 后端使用这个token来验证你的身份
    config.headers.Authorization = localStorage.getItem('token')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	//对返回数据处理
	console.log(response)
	let res = null
	if(response.status === 200){
		if(response.data ){
			if(response.config.url=='/jd/regist'){
				res = response.data
			}else if(response.data.data ){
				res = response.data.data;
			}else{
				res = response
			}
			
		}
	}
	
	return res
    
  }, function (error) {
    // 对响应错误做点什么
	Toast('请求错误');
    return Promise.reject(error);
  });
  export default instance