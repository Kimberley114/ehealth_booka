<template>
  <div class="home">
<left-menu/>
<right-main/>
  </div>
</template>

<script>
	import LeftMenu from '../components/LeftMenu.vue'
  import RightMain from '../components/RightMain.vue'
	export default {
		name:'Home',
		components:{
      LeftMenu,
      RightMain}
	}


</script>

<style scoped>
#home {
  width:100%;
  background-color: hotpink;
}
</style>