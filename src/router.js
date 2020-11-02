import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const Home = ()=>import('@/routes/Home/home.vue')
const Cate = ()=>import('@/routes/Cate/cate.vue')
const Cart = ()=>import('@/routes/Cart/cart.vue')
const User = ()=>import('@/routes/User/user.vue')
const Detail = ()=>import('@/routes/Detail/detail.vue')
const Login = ()=>import('@/routes/Login/login.vue')
const Regist = ()=>import('@/routes/Regist/regist.vue')
const Pay = ()=>import('@/routes/Pay/pay.vue')
const Test = ()=>import('@/routes/Test/test.vue')
const router = new VueRouter({
	mode: 'hash',
	routes:[
		{path:'/',components:{alive:Home}},
		{path:'/cate',components:{alive:Cate}},
		{path:'/cart',component:Cart},
		{path:'/user',components:{alive:User}},
		{path:'/detail/:id',component:Detail},
		{path:'/login',component:Login},
		{path:'/regist',component:Regist},
		{path:'/pay',component:Pay},
		{path:'/test',component:Test},
		{path:'/*',redirect:'/'}
	]
})
// 全局的路由守卫
// 把原来没有条件限制的路由跳转，添加上限制条件
router.beforeEach((to, from, next)=>{
  // 仅对购物车页面进行拦截
  if(to.path === '/cart') {
    // 用token表示用户是否已经登录
    let token = localStorage.getItem('token')
    if(token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
  
})
export default router