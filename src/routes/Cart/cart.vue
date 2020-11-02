<template>
	<div class="cart">
		<navbar></navbar>
		<cart></cart>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '../../components/Tabbar/tabbar.vue';
	import navbar from './navbar.vue';
	import cart from './cartList.vue';
	export default{
		components:{
			tabbar,
			navbar,
			cart
		}
		
	}
</script>

<style>
</style>
