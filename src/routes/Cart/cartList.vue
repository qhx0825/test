<template>
	<div class="cartList">
			<van-swipe-cell v-for='item in cList' :key='item.good_id'>
				<van-row type='flex' align='center' >
					<van-col span='4'>
						<div class="checkbox">
					<input type="checkbox" @input="setlist1(item.good_id)" :checked="item.checked"/>
						</div>
					</van-col>
					<van-col span='20'>
						<div>
						<van-card
							:num="item.num"
							:price="item.good.price"
							:desc="item.good.desc"
							:title="item.good.name"
							:thumb="item.good.img"
						>
						
						<template #footer>
							<span @click="sub(item)" class="des">--</span>
							<span @click="add(item)" class="add">+</span>
						</template>
						</van-card>
					</div>
					</van-col>
				</van-row>
			
			
		<template #right>
			<van-button square text="删除" type="danger" class="delete-button" @click='deleteGoods(item)'/>
		</template>
		</van-swipe-cell>
		<div class="send">
			<van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit(list1)">
			<van-checkbox :value="allCheck" @click='clic'>全选</van-checkbox>
			</van-submit-bar>
		</div>
		
	</div>
</template>

<script>
	import { 
		Card,
		Button,
		Tag,
		SubmitBar,
		Checkbox,
		SwipeCell,
		Col, 
		Row,
		Toast,
		Dialog
	} from 'vant';
	import {  mapState , mapMutations  } from 'vuex'
	export default{
		
		components:{
			[Card.name]:Card,
			[Button.name]:Button,
			[Tag.name]:Tag,
			[SubmitBar.name]:SubmitBar,
			[Checkbox.name]:Checkbox,
			[SwipeCell.name]:SwipeCell,
			[Col.name]:Col,
			[Row.name]:Row
		},
		data:function(){
			return{
				list:[],
			}
		},
		computed:{
			...mapState('cart',['cList','allCheck','list1']),
			// ...mapGetters('cart',['all']),
			allPrice(){
				let p = 0
				this.list1.map(ele=>{
					p += ele.num*ele.good.price*100
				})
				return p
			},
			
		},
		watch:{
			
		},
		mounted() {
			this.init()
			this.resetCheck
			console.log(this.allCheck)
			// console.log(this.cList)
		},
		Destroy() {
			this.resetCheck
		},
		methods:{
			...mapMutations('cart',['updateClist','changeCheck','changelist1','changeall','setlist1','deleteClist','resetCheck']),
			init(){
				this.$axios.getCartList().then(res=>{
					this.updateClist(res)
				})
			},
			
			// change(id){
			// 	this.changeCheck(id)
			// 	// console.log(this.cList)
			// 	this.list=[]
			// 	this.cList.map(ele=>{
			// 		// console.log(ele.checked)
			// 		if(ele.checked){
			// 			this.list.push(ele)
			// 			// console.log(this.list)
			// 		}
			// 		this.changelist1(this.list)
			// 	})
			// },
			clic(){
				this.changeall()
			},
			sub(item){
				console.log('减少')
				if(item.num>1){
					item.num--
					let data = {num:item.num,id:item.good_id};
				this.$axios.updateCartNum(data).then(res=>{
					console.log(res)
				})
				}else{
					Toast.fail('数量不能小于1')
				}
				
			},
			add(item){
				console.log('增加')
				item.num++
				let data  = {num:item.num,id:item.good_id}
				this.$axios.updateCartNum(data).then(res=>{
					console.log(res)
				})
			},
			deleteGoods(item){
				// console.log(1)
				Dialog.confirm({
					title: '正在删除',
					message: '您确定要删除此商品吗？',
				})
				.then(() => {
					let data = { id:item._id}
					// console.log(item)
					this.$axios.deleteToCart(data).then(res=>{
						console.log(res)
					if(res.data.err == 0){
						this.deleteClist(item)
					}
				})
					})
				
			},
			onSubmit(list){
				let goods = ''
				list.map(ele=>{
					goods += ';'+ele.good_id
				})
				let data = {goods:goods}
				if(this.list1.length>0){
					this.$axios.submitToCart(data).then(res=>{
					// console.log(res)
					if(res.data.err == 0){
						Toast.success('正在创建订单')
						this.$router.push('/pay')
					}else{
						Toast.fail('订单创建失败')
					}
					})
				}else {Toast.fail('请选择购买的商品')}
				
				
			}
			
			
		}
	}
</script>

<style scoped lang="scss">
	.checkbox{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.delete-button {
		height: 100%;
	}
	.des{
		text-align: center;
		font-weight: 500;
		display: inline-block;
		box-sizing: border-box;
		width: 0.48rem;
		height: 0.48rem;
		border-radius: 20%;
		border: 1px solid black;
		margin-right: 0.266666rem;
	}
	.add{
		text-align: center;
		font-weight: 500;
		display: inline-block;
		box-sizing: border-box;
		width: 0.48rem;
		height: 0.48rem;
		border-radius: 20%;
		border: 1px solid black;
	}
</style>
