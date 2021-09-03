<template>
<box-icon name='body' animation='burst-hover' ></box-icon>
<box-icon name='globe' animation='tada-hover'  ></box-icon>
<box-icon name='palette' color="red" type='solid' animation='tada-hover'  ></box-icon>
<box-icon name='font-size' animation='tada-hover' ></box-icon>
<box-icon name='brightness-half' animation='tada-hover'  ></box-icon>
<box-icon name='brightness-half' type='solid' animation='tada-hover' ></box-icon>
<box-icon name='undo' animation='tada-hover' ></box-icon>
<box-icon name='sun' type='solid' animation='tada-hover' ></box-icon>
<box-icon name='moon' type='solid' animation='tada-hover' ></box-icon>
<box-icon name='search' ></box-icon>
<box-icon name='clinic' ></box-icon>
<box-icon name='calendar' ></box-icon>
<box-icon name='log-out-circle'></box-icon>
<box-icon name='map'></box-icon>
<box-icon type='solid' name='credit-card'></box-icon>
<box-icon name='group'></box-icon>
<box-icon name='paper-plane'></box-icon>
<box-icon name='wrench'></box-icon>
<box-icon name='home' type='solid' ></box-icon>
<box-icon type='solid' name='user'></box-icon>
<box-icon type='solid' name='lock'></box-icon>
<box-icon name='walk'></box-icon>
<box-icon name='car' type='solid' ></box-icon>
<box-icon type='solid' name='parking'></box-icon>
<box-icon type='solid' name='bus'></box-icon>
<box-icon name='cycling'></box-icon>
<box-icon name='happy-alt'></box-icon>
<box-icon name='help-circle'></box-icon>
<box-icon name='bookmark-heart'></box-icon>
<box-icon name='map-alt'></box-icon>
 <div id="logoimg">
      <img alt="Vue logo" src="../assets/logo.png" width="45" height="40" />
    </div>

    <div class="logotitle">
      <p id="theme color">eHealth Booka</p>
      <p id="subtitle">Booking Appointment for Your Health</p>
    </div>

    <input id="searchbox" type="text" name="searchbox" placeholder="Search a clinic/GP..." >
  

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
height: 172px;
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
    margin-top: 5px;
margin-bottom: 5px;
width:200px;
}
</style>