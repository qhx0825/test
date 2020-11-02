<template>
	<div class="login">
		<navbar></navbar>
		<van-form @submit="onSubmit">
			<van-field
				v-model="username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 16px;">
			<van-button round block type="info" native-type="submit">
				登录
				</van-button>
			</div>
		</van-form>
	<p class="pbox">
		<span>忘记密码</span>
		<router-link to="/regist" tag="span">立即注册</router-link>
	</p>	
	</div>
</template>

<script>
	import { Form , Field ,Button,Toast } from 'vant'
	import navbar from '../Cart/navbar.vue'
	import { mapMutations } from 'vuex'
	export default{
		components:{
			[Form.name]:Form,
			[Field.name]:Field,
			[Button.name]:Button,
			navbar
		},
		data() {
			return {
				username: '',
				password: '',
			};
		},
		computed:{
			...mapMutations('cart',['updateClist'])
		},
		methods: {
			onSubmit() {
				let data = {
					username:this.username,
					password:this.password
				}
				// console.log( data);
				this.$axios.login(data).then(res=>{
					console.log(res);
					if(res){
					localStorage.setItem('token',res.token)
					this.$axios.getCartList().then(res=>{
						console.log(res)
						this.updateClist(res)
					})
					this.$router.replace('/')
					}else{
						Toast.fail('密码错误')
					}
				})
				
				},
		},
	}
</script>

<style scoped lang="scss">
	.pbox{
		display: flex;
		justify-content: space-around;
		span{
			font-size: 0.48rem;
			display: block;
		}
	}
</style>
