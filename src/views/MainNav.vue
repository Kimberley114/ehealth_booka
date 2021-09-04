<template>
  <!-- <div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"> -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"
  />

  <!-- displaying icon -->
  <!-- <box-icon name="body" animation="burst-hover"></box-icon>
  <box-icon name="globe" animation="tada-hover"></box-icon>
  <box-icon
    name="palette"
    color="red"
    type="solid"
    animation="tada-hover"
  ></box-icon>
  <box-icon name="font-size" animation="tada-hover"></box-icon>
  <box-icon name="brightness-half" animation="tada-hover"></box-icon>
  <box-icon
    name="brightness-half"
    type="solid"
    animation="tada-hover"
  ></box-icon>
  <box-icon type='solid' name='color-fill'></box-icon>
  <box-icon name="undo" animation="tada-hover"></box-icon>
  <box-icon name="sun" type="solid" animation="tada-hover"></box-icon>
  <box-icon name="moon" type="solid" animation="tada-hover"></box-icon>
  <box-icon name="search"></box-icon>
  <box-icon name="clinic"></box-icon>
  <box-icon name="calendar"></box-icon>
  <box-icon name="log-out-circle"></box-icon>
  <box-icon name="map"></box-icon>
  <box-icon type="solid" name="credit-card"></box-icon>
  <box-icon name="group"></box-icon>
  <box-icon name="paper-plane"></box-icon>
  <box-icon name="wrench"></box-icon>
  <box-icon name="home" type="solid"></box-icon>
  <box-icon type="solid" name="user"></box-icon>
  <box-icon type="solid" name="lock"></box-icon>
  <box-icon name="walk"></box-icon>
  <box-icon name="car" type="solid"></box-icon>
  <box-icon type="solid" name="parking"></box-icon>
  <box-icon type="solid" name="bus"></box-icon>
  <box-icon name="cycling"></box-icon>
  <box-icon name="happy-alt"></box-icon>
  <box-icon name="help-circle"></box-icon>
  <box-icon name="bookmark-heart"></box-icon>
  <box-icon name="map-alt"></box-icon>
  <hr /> -->
  <!-- top left icon title -->

  <div class="floatleft">
    <div class="floatleft" id="logoimg">
      <img
        @click="routeToHome"
        alt="Vue logo"
        src="../assets/logo.png"
        width="45"
        height="42"
      />
    </div>
    <div>
      <h3 @click="routeToHome" id="theme color">eHealth Booka</h3>
      <h5 @click="routeToHome" id="subtitle">
        Booking Appointment for Your Health
      </h5>
    </div>
    <div class="floatright">
      <!-- top searching box -->

      <el-input
        class="searchbox"
        placeholder="Search a clinic/GP..."
        v-model="input23"
        clearable
        prefix-icon="el-icon-search"
        size="large"
        width='100px'
      >
      </el-input>

      <!-- top login icon -->
      <div class="login">
        <box-icon type="solid" name="user"></box-icon>
        <el-button  type="text" size="medium"> Login</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "MainNa",
  data() {
    return {
      input23: "",
    };
  },
  methods() {
    routeToHome = () => {
      router.push({ name: "Home" });
    };
  },
};
</script>

<style scoped>
#logoimg {
  margin-left: 140px;
  margin-top: 29px;
}
h5 {
  font-family: "Sofia", sans-serif;
  margin-top: -16px;
  width: 100%;
  margin-left: 188px;
  color: grey;
}
h3 {
  color: dodgerblue;
  width: 100%;
   margin-top: 30px;
  margin-left: 143px;
}
.floatleft {
  float: left;
}
.searchbox {
  position: absolute;
  margin-top: -60px;
  margin-left: 500px;
  margin-right: 200px;
  width:51%;
}
.login {
  position: absolute;
  margin-top: -54px;
  margin-left: 1270px;
}

</style>