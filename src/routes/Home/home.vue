<template>
	<div class="home">
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
	<div class="search">
	<van-search
	disabled
	show-action
	shape="round"
	:placeholder="places"
	>
	</van-search>	
	</div>
	<div class="searchBtn" @click="onlogin">登录</div>
	<div class="swipe">
		<swipe></swipe>
	</div>
	<div class="clear"></div>
	<div class="showimg">
		<div class="show-img"><img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/132944/20/9619/137784/5f5b178eE4ba3b301/3c5b18f733fc8ab0.png!q70.jpg.dpg"/></div>
		<div class="show-img"><img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/132040/25/9458/120046/5f5b1396E6404439a/1ac51631b12422a7.png!q70.jpg.dpg"/></div>
		<div class="show-img"><img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/141841/24/8216/141451/5f5b4d09E5b29a987/37b9c2fefbe42b95.png!q70.jpg.dpg"/></div>
	</div>
	<div class="oList">
		<olist></olist>
	</div>
	<div class="oShare">
		<share></share>
	<van-list
		offset='50'
		:immediate-check='false'
		v-model="loading"
		:finished="finished"
		finished-text="没有更多了"
		@load="onLoad"
	>
		<shareList :good='list'></shareList>
	</van-list>
	</div>
	</van-pull-refresh>
	<tabbar></tabbar>
	</div>
	
</template>

<script>
	import { Search,PullRefresh,List } from 'vant';
	import tabbar from '../../components/Tabbar/tabbar.vue';
	import swipe from '@/routes/Home/swipe.vue';
	import olist from './list.vue';
	import share from './share.vue';
	import shareList from './shareList.vue'
	export default{
		components:{
			tabbar,
			swipe,
			olist,
			share,
			shareList,
			[Search.name]:Search,
			[PullRefresh.name]:PullRefresh,
			[List.name]:List
		},
		data:function(){
			return {
				placesList:[{id:1,task:'空调'},{id:2,task:'冰箱'},{id:3,task:'热水器'}],
				list:[],
				page:1,
				loading: false,
				finished: false,
				refreshing: false,
			}
		},
		computed:{
			places:function(){
				let p = Math.floor(Math.random()*3)
				return this.placesList[p].task
			}
		},
		mounted(){
			this.load()
		},
		methods:{
			load(){
				let params = {
					hot: false,
					page: this.page,
					size: 6
				}
				this.$axios.getHotGoodList(params).then(res=>{
				console.log('res',res);
				if(this.refreshing){
					this.list = res.list
					this.refreshing = false
					this.finished = false
				}else{
					this.list = [...this.list,...res.list]
					this.loading = false
				}
				if(this.list.length>=res.total){
					this.finished = true
				}
				})
			},
			onLoad() {
				this.page++;
				console.log('onload')
				this.load()
			},
			onRefresh(){
				this.page = 1
				console.log('onrefresh')
				this.load()
			},
			onSubmit(){
				
			},
			onlogin(){
				this.$router.push('/login')
			}
		}
		
	}
</script>

<style lang="scss">
	.home{
		position: relative;
		.van-search{
			height: 4rem;
			border-bottom-left-radius: 50%;
			border-bottom-right-radius: 50%;
			background:linear-gradient(0deg,#f1503b,#c82519 50%)
		}
		.van-search__content{
			position: relative;
			top:-40%
		}
		.searchBtn{
			height: 0.64rem;
			line-height: 0.64rem;
			font-size: 0.4rem;
			position: absolute;
			top: 0.34rem;
			right: 0.16rem;
			// float: right;
		}
		.swipe{
			position: absolute;
			top: 1.28rem;
			width: 100%;
			img{
				display: inline-block;
				width: 95%;
				margin-left: 2.5%;
				border-radius: 0.266666rem
			}
		}
		.clear{
			clear: both;
		}
		.showimg{
			display: flex;
			margin-top: 1.28rem;
			.show-img{
				flex: 1;
				img{
					width: 100%;
				}
			}
		}
	}
</style>
