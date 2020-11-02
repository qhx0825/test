<template>
	<div class="list">
		<van-swipe class="my-swipe" indicator-color="white">
		<van-swipe-item>
			<div class="list1">
				<div class="list1_" v-for='i in imgList' :key='i.id'><img :src="i.src"/><span v-text="i.text"></span></div>
			</div>
		</van-swipe-item>
		<van-swipe-item>
			<div class="list2">
				
			</div>
		</van-swipe-item>
		
		</van-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	export default{
		components:{
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem
		},
		data:function(){
			return{
				imgList:[
					{id:1,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',text:'京东商城'},
					{id:2,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png',text:'数码电器'},
					{id:3,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png',text:'京东服饰'},
					{id:4,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png',text:'京东生鲜'},
					{id:5,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png',text:'京东到家'},
					{id:6,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png',text:'充值缴费'},
					{id:7,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png',text:'9.9元拼'},
					{id:8,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png',text:'领券'},
					{id:9,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png',text:'领金贴'},
					{id:10,src:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png',text:'PLUS会员'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.list1{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	.list1_{
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.32rem;
		img{
			margin-top: 0.266666rem;
			width: 1.066666rem;
		};
		span{
			margin-top: 0.16rem;
		}
	}
	
}
</style>
