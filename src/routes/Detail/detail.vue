<template>
	<div class="detail">
		<navbar></navbar>
		<div>
			<div class="img">
				<img :src="de.img" />
			</div>
			<div class="desc">
				<span v-text="de.desc">
					</span>
				<p class="price">
					<span>￥</span>
					<span v-text="de.price">
					</span>
				</p>
			</div>
		</div>
		<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
		<van-goods-action-icon icon="cart-o" text="购物车" />
		<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
		<van-goods-action-button type="warning" text="加入购物车" />
		<van-goods-action-button type="danger" text="立即购买" @click='add'/>
	</van-goods-action>
	</div>
	
</template>

<script>
	import {GoodsAction,
			GoodsActionIcon,
			GoodsActionButton,
			Toast,
			Dialog  
	} from 'vant'
	import navbar from '../Cart/navbar.vue';
	export default {
		components:{
			[GoodsAction.name]:GoodsAction,
			[GoodsActionIcon.name]:GoodsActionIcon,
			[GoodsActionButton.name]:GoodsActionButton,
			navbar
		},
		data:function(){
			return{
				de:{},
				id:this.$route.params.id
			}
		},
		mounted() {
			this.init()
		},
		methods:{
			init(){
					// console.log(this.$route)
				this.$axios.getGoodDetail({good_id:this.$route.params.id}).then(res=>{
					this.de = res
					console.log('1',this.de)
				})
			},
			add(){
				let data = {
					num:1,
					good_id:this.de._id
				}
				this.$axios.addToCart(data).then(res=>{
					console.log(res)
					if(res == 1){
					// Toast.success('商品已添加至购物车')
					Dialog.confirm({
						title: '商品已添加至购物车',
						message: '跳转至购物车提交订单',
					})
						.then(() => {
							// on confirm
						this.$router.replace('/cart')
						})
						.catch(() =>{
						this.$router.go(-1)
						})
					}else {
						Toast.fail('添加失败')
					}
					
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.desc{
		display: flex;
		flex-direction: column;
		span{
			font-size: 0.48rem;
		}
		.price{
			margin-top: 0;
			color:red;
		}
	}
	
</style>
