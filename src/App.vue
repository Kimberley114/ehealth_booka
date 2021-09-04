<template>
 <!-- <colorPicker v-model="color" /> -->
  <div class="mainnav">
    <MainNav />
  </div>

  <div class="helper">
    <Helper />
  </div>

  <div class="home">
    <Home />
  </div>
  <!-- <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div> -->


  <!-- <div class="mainnav">
  <MainNav/>
</div>
<div class="home">
  <Home/>
</div> -->
</template>

<script>
import MainNav from "./views/MainNav.vue";
import Helper from "./views/Helper.vue";
import Home from "./views/Home.vue";
// import Helper from './views/Helper.vue'
export default {
  name: "App",
  components: {
    MainNav,
    Helper,
    Home,
  },
};
</script>


<style>
body {
  font-family: var(--body-font);
}
.mainnav {
  /* position: -webkit-sticky; /* Safari */
  /* position: sticky; */ 
  position: absolute;

  width: 100%;
  height: 140px;
  left: 0px;
  top: 0px;
}
.home {
    background-color: #f1f1f1;
  position: absolute;
  width: 970px;
  height: 1500px;
  left: 450px;
  top: 150px;
}
.helper {

   position: absolute;
    width: 450px;
height: 1500px;
left: 0px;
 top: 150px;
}
</style>>


