<template>
  <!-- <colorPicker v-model="color" /> -->
  <div class="mainnav">
    <MainNav />
  </div>

  <div class="content">
    <div class="leftBar">
      <LeftBar />
    </div>

    <div class="right-content" >
      <router-view />
   </div> 
  </div>

  <!-- <div class="home">
    <Home />
  </div> -->

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
import LeftBar from "./views/LeftBar.vue";
import Home from "./views/Home.vue";
// import Helper from './views/Helper.vue'
export default {
  name: "App",
  components: {
    MainNav,
    LeftBar,
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
  position: fixed;

  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
}
/* .home {
    background-color: #f1f1f1;
    border-radius: 20px;
  position: absolute;

  width: 970px;
  height: 1500px;
  left: 380px;
  top: 120px;
} */
/* .leftBar {
  position: absolute; 
  width: 450px;s
  height: 1500px;
  left: 0px;
  top: 120px;
} */
.content {
  display: flex;
  /* grid-template-columns: 1fr 2fr;   */
  margin-top:120px;
  margin-left: 60px;
}
.content .leftBar {
  margin-top:100px;
}
.content .right-content {
  margin: 0 auto;
  left: 50%;
border-style: solid;
border-color:dodgerblue;
  border-width: 2px;
  width: 970px;
  height: 630px;
  border-radius: 10px;
  padding:20px;

}
</style>>


