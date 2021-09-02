<template>
  <div class="mainNav">

    <div id="logoimg">
      <img alt="Vue logo" src="../assets/logo.png" width="45" height="40" />
    </div>

    <div class="logotitle">
      <p id="theme color">eHealth Booka</p>
      <p id="subtitle">Booking Appointment for Your Health</p>
    </div>

    <input id="searchbox" type="text" name="searchbox" placeholder="Search a clinic/GP..." width="100" height="40">
  
  
  </div>
</template>

<script>
export default {
  name: "MainNa",
};
</script>

<style scoped>
#mainNavi {
  background-color: indianred important!;
  padding: 5px;
  height: 20px;
  width: 100%;
}
.logoimg {
  left: 171px;
  top: 62px;
}
.subtitle {
  color: grey;
}
.searchbox {
    border-color: indianred;
    border-radius: 8px;
}
</style>