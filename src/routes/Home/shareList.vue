<template>
	<div class="shareList van-clearfix" >
		<div class="shareBox" v-for="(i,index) in good" :key='index'>
			<img :src="i.img" />
			<span class="sp" v-text="i.desc"></span>
			<div class="abox">
				<div class="dbox">
					<span>￥</span>
					<span v-text="i.price"></span>
				</div>
				<div class="cbox">
					<span>看相似</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		props:{
			good:{type:Array,required:true}
		}
	}
</script>

<style lang="scss">
	.shareList{
		width: 9rem;
		margin: 0 auto;
		.shareBox{
			float: left;
			width: 50%;
			img{
				display: block;
				width: 100%;
			}
			.sp{
				display: -webkit-box;
				font-size: 0.346666rem;
				line-height: 0.346666rem;
				height: 0.826666rem;
				box-sizing: border-box;
				text-overflow: ellipsis;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-break: break-all;
				color: #232326;
				margin-top: 5px;
				line-height: 16px;
				margin-bottom: 3px;
				padding: 0 4px;
			}
			.abox{
				display: flex;
				justify-content: space-between;
				padding-bottom: 0.666666rem
			}
			.dbox{
				display: flex;
				&>span:nth-child(1),&>span:nth-child(2){
					color: #f23030;
					display: inline-block;
					padding: 0 5px 0 4px;
					position: relative;
					top: 1px;
					height: 0.666666rem;
					line-height: 0.666666rem;
					font-family: JDZhengHT-EN-Regular;
					font-size: 0.346666rem;
				}
			}
			.cbox{
				display: flex;
				&>span:nth-child(1){
					font-size: 0.346666rem;
					box-sizing: border-box;
					border: 1px solid #ccc;
					// float: right;
					
				}
			}
		}
	}
</style>
