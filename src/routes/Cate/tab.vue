<template>
	<div class="tab">
		<van-sidebar v-model="activeKey">
			<van-sidebar-item :title="i.cate_zh"  v-for='i in list' :key='i._id'/>
		</van-sidebar>
	</div>
</template>

<script>
	import { mapState , mapMutations } from 'vuex'
	import { Sidebar, SidebarItem } from 'vant';
	export default {
		props:{
			list:{type:Array,required:true}
		},
		components:{
			[Sidebar.name]:Sidebar,
			[SidebarItem.name]:SidebarItem
		},
		data() {
			return {
				activeKey: 0,
			}
		},
		computed:{
			...mapState('cate',['aKey'])
		},
		watch:{
			activeKey:function(){
				this.updateActiveKey(this.activeKey)
			}
		},
		methods:{
			...mapMutations('cate',['updateActiveKey'])
		}
	}
</script>

<style>
</style>
