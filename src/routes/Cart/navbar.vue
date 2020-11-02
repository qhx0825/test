<template>
	<van-nav-bar
		:placeholder="tr"
		left-text="返回"
		left-arrow
		@click-left="onClickLeft"
	/>
</template>

<script>
	import { NavBar,Toast } from 'vant';
	export default{
		components:{
			[NavBar.name]:NavBar
		},
		data:function(){
			return {
				tr:true
			}
		},
		methods: {
			onClickLeft() {
				Toast('返回');
				this.$router.go(-1)
			},
		},
	}
</script>

<style>
</style>
