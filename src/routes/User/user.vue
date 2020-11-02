<template>
	<div class="user">
		<navbar></navbar>
		<div class="preson">
			个人中心
			<div class="box">
				<img src="//storage.360buyimg.com/i.imageUpload/78696168616966656e673131313131353636373937323133333639_big.jpg" alt="头像">
				<div><p>一坪海岸线</p><p>impossible Vue vuex V-cli</p></div>
			</div>
			<van-cell title="收货地址管理" is-link value="管理我的收货地址" />
			<van-cell title="账户安全" is-link value="账户安全管理" />
		</div>
		<div>
			<van-grid :column-num="3">
				<van-grid-item icon="coupon" text="意见反馈" />
				<van-grid-item icon="bag" text="京东客户端" />
				<van-grid-item icon="close" text="退出登录" />
				<!-- <van-grid-item icon="photo-o" text="文字" /> -->
			</van-grid>
		</div>
	<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '../../components/Tabbar/tabbar.vue';
	import { Cell, CellGroup,Grid, GridItem ,Icon  } from 'vant';
	// import { Grid, GridItem } from 'vant';

	import navbar from '../Cart/navbar.vue';
	export default{
		components:{
			tabbar,
			[Cell.name]:Cell,
			[CellGroup.name]:CellGroup,
			navbar,
			[Grid.name]:Grid,
			[GridItem.name]:GridItem,
			[Icon.name]:Icon
		}
	}
</script>

<style scoped lang="scss">
.box{
	display: flex;
	box-sizing: border-box;
	border: 1px #ccc solid;
	padding: 0.266666rem 0;
	justify-content: space-around;
	img{
		border: 1px solid #ccc;
		display: block;
		width: 3rem;
		height: 3rem;
	}
	p{	
		border-bottom: 1px solid pink;
		font-size: 0.48rem;
	}
}
</style>
