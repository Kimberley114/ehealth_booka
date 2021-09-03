<template>
<!-- <Helper/> -->
<MainNav/>
<Home/>
</template>

<script>
	import MainNav from './views/MainNav.vue'
  import Home from './views/Home.vue'
  // import Helper from './views/Helper.vue'
	export default {
		name:'App',
		components:{
      MainNav,
      Home,
      }
	}
</script>


<style>
  body {
    font-style: var(--body-font);
  }
</style>>


