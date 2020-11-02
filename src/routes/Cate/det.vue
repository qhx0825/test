<template>
	<div class="det">
		<div class="goodCard"  v-for = 'item in list' :key='item._id' @click="turndetail(item._id)">
			<van-image :src ="item.img" />
			<span v-text="item.desc"></span>
		</div>
	</div>
</template>

<script>
	import { Image as VanImage, Lazyload } from 'vant'
	export default {
		props:{
			list:{
				type:Array,
				required:true
			}
		},
		components:{
			[VanImage.name]:VanImage,
			[Lazyload.name]:Lazyload
		},
		methods:{
			turndetail(id){
				// console.dir(this.$router);
				this.$router.push('/detail/'+id)
			}
		}
	}
</script>

<style scoped lang="scss">

	.goodCard{
		float: left;
		width: 30%;
		border: 1px  solid #ccc;
		display: flex;
		flex-direction: column;
		margin: 2px 2px;
		box-sizing: border-box;
		span{
			height: 0.48rem;
			text-align: center;
			margin: 5px 0;
			font-size: 0.32rem;
		}
	}
</style>
