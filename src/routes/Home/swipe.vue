<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		<van-swipe-item v-for='i in swipeList' :key='i.id'>
			<img v-lazy='i.src' />
		</van-swipe-item>
		
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Lazyload } from 'vant'
	Vue.use(Lazyload)
	export default{
		components:{
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem
		},
		data:function(){
			return {
				swipeList:[
					{id:1,src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/128114/1/10242/85464/5f3e706aE5173228e/350c585815b743cf.jpg!cr_1125x445_0_171!q70.jpg.dpg'},
					{id:2,src:'//imgcps.jd.com/ling4/10020712408834/5aS55YWL5oqY5omj6ZKc5oOg/5pS-5b-D5peg5b-n6LSt/p-5c130ba282acdd181d94966e/07142371/cr_1125x445_0_171/s1125x690/q70.jpg'},
					{id:3,src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/142547/35/7849/179012/5f5748e9E677be362/86b80918a8d2b0d8.jpg!q70.jpg.dpg'}
				]
			}
		}
	}
</script>

<style>
</style>
