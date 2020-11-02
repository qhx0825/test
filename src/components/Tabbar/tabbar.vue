<template>
	<div class="tabbar">
		<van-tabbar route :placeholder='t'>
		<van-tabbar-item icon="home-o" to='/'>主页</van-tabbar-item>
		<van-tabbar-item icon="shop-o" to='/cate' dot>详情</van-tabbar-item>
		<van-tabbar-item icon="shopping-cart-o" to='/cart' :badge="goodsNum">购物车</van-tabbar-item>
		<van-tabbar-item icon="user-o" to='/user'>我的</van-tabbar-item>
	</van-tabbar>
	</div>
	
</template>

<script>
	import { Tabbar, TabbarItem } from 'vant';
	import { mapState } from 'vuex'
	export default{
		components:{
			[Tabbar.name]:Tabbar,
			[TabbarItem.name]:TabbarItem
		},
		data:function(){
			return{
				t:true
			}
		},
		computed:{
			...mapState('cart',['goodsNum'])
		}
	}
</script>

<style>
</style>
