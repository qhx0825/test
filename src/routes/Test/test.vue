<template>
	<div>
	<div @click="clickMe" class="page" ref='box' :class="{'changed':change===true}">1
	</div>
	<div @click="clickMe" id="inner">
		点我
	</div>	
	</div>
	
</template>

<script>
	export default {
		
		name:'test',
		data:function(){
			return{
				change:false
			}
		},
		mounted: function() {
			this.$refs.box.className += ' page-show'
			console.log(this)
		},
		methods:{
			clickMe(){
				console.log('start');
				setTimeout(()=>{
					console.log('timeout');
				},0);
				this.$nextTick(()=>{
					console.log('nextTick');
					this.$nextTick(()=>{
						console.log('nextTick2')
					});
					setTimeout((()=>{
						console.log('timeout2')
					}))
				})
				console.log('end',this.$data)
				this.$refs.box.className += 'page page-show'
				console.log(this.$refs.box)
				this.$data.change=true
				setTimeout(()=>{
					console.log(this.$refs.box.className)
				},0)
			}
		},
		
		updated:function(){
			console.log(2)
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		background-color: #fff006;
	};
	.page-show{
		color:pink;
	}
	.changed{
		color:brown;
		background-color: #eee8d5;
	}
	
</style>
