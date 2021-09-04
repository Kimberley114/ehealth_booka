<template>
 <el-affix :offset="160">

  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >  
  <router-link
      to="/home/appointment">
    <el-menu-item index="1">
      <box-icon name="calendar"></box-icon>
      <template #title>  My Appointments</template>
    </el-menu-item></router-link>

    <router-link
      to="/home/search">
    <el-menu-item index="2">
      <box-icon name="clinic"></box-icon>
      <template #title>  Book an Appointment</template>
    </el-menu-item></router-link>

     <router-link
      to="/home/profile">
    <el-menu-item index="3" >
      <box-icon name="map"></box-icon>
      <template #title>  Profile</template>
    </el-menu-item></router-link>

     <router-link
      to="/home/familyMember">
    <el-menu-item index="4">
      <box-icon name="group"></box-icon>
      <template #title>  Family Members</template>
    </el-menu-item></router-link>

     <router-link
      to="/home/helperCenter">
    <el-menu-item index="5">
      <box-icon name="help-circle"></box-icon>
      <template #title>  Help Center</template>
    </el-menu-item></router-link>
  </el-menu>
   </el-affix >
</template>

<script>
export default {
  name: "Menu",
};
</script>