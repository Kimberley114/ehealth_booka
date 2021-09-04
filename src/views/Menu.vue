<template>

<div class="menu" >

  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >  
  <router-link
      to="/myAppointment">
    <el-menu-item index="1">
     <i class='bx bxs-calendar'></i>
      <template #title>  My Appointments</template>
    </el-menu-item></router-link>

    <router-link
      to="/bookAppointment">
    <el-menu-item index="2">
      <i class='bx bx-clinic'></i>
      <template #title>  Book an Appointment</template>
    </el-menu-item></router-link>

     <router-link
      to="/profile">
    <el-menu-item index="3" >
     <i class='bx bx-map'></i>
      <template #title>  Profile</template>
    </el-menu-item></router-link>

     <router-link
      to="/familyMember">
    <el-menu-item index="4">
      <i class='bx bxs-group'></i>
      <template #title>  Family Members</template>
    </el-menu-item></router-link>

     <router-link
      to="/helpCenter" >
    <el-menu-item index="5">
      <i class='bx bxs-help-circle'></i>
      <template #title text-decoration="none">  Help Center</template>
    </el-menu-item></router-link>
  </el-menu>
  </div>

</template>

<script>
export default {
  name: "Menu",
};
</script>
<style scoped>
.menu i {
    font-size: 24px;
    color:'#409eff'
  
}
.menu{
    text-decoration: none;
}
</style>