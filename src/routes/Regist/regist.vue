<template>
	<div class="regist">
		<navbar></navbar>
		<van-form validate-first>
			<!-- 通过 pattern 进行正则校验 -->
			<van-field
				v-model="username"
				placeholder="输入注册用户名"
			/>
			<!-- 通过 validator 进行函数校验 -->
			<van-field
			type="password"
				v-model="password"
				placeholder="输入密码"
				
			/>
			<!-- 通过 validator 进行异步函数校验 -->
			<van-field
			type="password"
				v-model="password2"
				placeholder="验证密码"
				@change='check'
			/>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
				提交
				</van-button>
			</div>
		</van-form>
		
	</div>
</template>

<script>
	import { Form , Field ,Button, Toast } from 'vant'
	import navbar from '../Cart/navbar.vue'
	export default {
		data() {
			return {
			username: '',
			password: '',
			password2: '',
			};
		},
		components:{
			[Form.name]:Form,
			[Field.name]:Field,
			[Button.name]:Button,
			navbar
		},
		methods: {
			check(){
				if(this.password == this.password2){
					Toast.success('正在注册')
					let data = {
						username:this.username,
						password:this.password,
						password2:this.password2
					}
					console.log(this.$axios.regist)
					this.$axios.regist(data).then(res=>{
						if(res.err==0){	
							Toast.success('注册成功')
							this.$router.push('/login')	
						}else{
							Toast.fail('用户名已存在')
							*
							setTimeout(()=>{
								this.$router.go(0)
							},2000)
							
						}
						})
				}else{
					Toast.fail('密码不一致')
				}
			}
		},
	};
</script>

<style>
</style>
