<template>
	<div class="cate">
		<div class="cate-tab">
			<tab :list="cateList"></tab>
			
		</div>
		<div class="cate-det">
		<det :list='goodList'></det>
		</div>
		
		<tabbar></tabbar>
	</div>
	
</template>

<script>
	import { mapState , mapMutations } from 'vuex'
	import tabbar from '../../components/Tabbar/tabbar.vue'
	import tab from './tab.vue'
	import det from './det.vue'
	export default{
		components:{
			tabbar,
			tab,
			det
		},
		data:function(){
			return{
				cateList:[],
				goodList:[],
				bKey:''
			}
		},
		computed:{
			...mapState('cate',['cateObj','aKey']),
		},
		watch:{
			aKey(){
				console.log('akey')
				this.getList(this.cateList[this.aKey].cate)
			}
		},
		mounted() {
			console.log(this.aKey)
			this.init()
			
		},
		methods:{
			...mapMutations('cate',['updateCateObj','updateGoodList']),
			// async init(){
			// 	await this.$axios.getAllCates({}).then(res=>{
			// 	this.cateList = res ;
			// })
			// },
			// getGoodList(){
			// 	if(this.cateObj[this.aKey]){
			// 		this.goodList = this.cateObj[this.aKey]
			// 	}else{
			// 		console.log('1')
					// this.$axios.getCateGoodList({this.cateList[this.aKey].cate}).then(res=>{
					// 	this.goodList = res;
					// 	this.updateCateList({idx:this.aKey,arr:res})
					// 	}
						// )
			async init() {
				this.cateList = await this.$axios.getAllCates({})
				this.getList(this.cateList[0].cate)
			},
		// 根据cate品类来筛选商品列表
			getList(cate) {
			// 判断cateObj中，有没有缓存数据
			// 如果有，直接使用 this.goodList = this.cateObj
			// 如果没有，再调接口
				if (this.cateObj[this.aKey]) {
					this.goodList = this.cateObj[this.aKey]
				} 
				else {
					this.$axios.getCateGoodList({cate}).then(res=>{
					console.log('商品列表', res)
					this.goodList = res
				// 调接口成功时，要把得到的数据缓存到vuex中去
					this.updateCateObj({idx: this.aKey, arr: res})
				})
				}
			}
		
		}
		
	}
</script>

<style lang="scss" scoped>
		.cate-tab{
		float: left;
		}
		.cate-det{
		float: right;
		width:7.466666rem
		}
	
	
</style>
