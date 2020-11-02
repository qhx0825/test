<template>
	<div class="pay">
		<navbar></navbar>
		正在支付
	</div>
</template>

<script>
	import navbar from '../Cart/navbar.vue';
	import {Dialog , Toast } from 'vant'
	export default {
		components:{
			navbar
		},
		mounted() {
			setTimeout(this.payConfirm(),2000)
		},
		methods:{
			payConfirm(){
				Dialog.confirm({
				title: '订单创建成功',
				message: '确认支付',
			})
				.then(() => {
					Toast.success('支付成功')
				this.$router.replace('/')
				})
				.catch(() =>{
				// this.$router.go(-1)
				
				})
			}
			
		}
	}
</script>

<style>
</style>
