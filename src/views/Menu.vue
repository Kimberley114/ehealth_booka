<template>

<div class="menu" >
  <el-affix :offset="250">
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >  
  <router-link
      to="/myAppointment">
    <el-menu-item index="1" class="menuitem">
     <i class='bx bxs-calendar'>  <p>  My Appointments</p></i>  
    </el-menu-item></router-link>

    <router-link
      to="/bookAppointment">
    <el-menu-item index="2" class="menuitem">
      <i class='bx bx-clinic'> <p>  Book an Appointment</p></i>
    </el-menu-item></router-link>

     <router-link
      to="/profile">
    <el-menu-item index="3" class="menuitem">
     <i class='bx bx-map'> <p>  Profile</p></i>  
    </el-menu-item></router-link>

     <router-link
      to="/familyMember">
    <el-menu-item index="4" class="menuitem">
      <i class='bx bxs-group'>   <p>  Family Members</p></i> 
    </el-menu-item></router-link>

    <router-link
      to="/helpCenter" >
    <el-menu-item index="5" class="menuitem"> 
      <i class='bx bxs-help-circle' ><p>Help Center</p> </i>
    </el-menu-item></router-link>

  </el-menu>
  </el-affix >
  </div>

</template>

<script>
export default {
  name: "Menu",
};
</script>
<style scoped>
.menu i {
    font-size: 20px;
    color:'#409eff'
}

.el-menu-vertical-demo p {
text-decoration:none;
font-family: "Helvetica Neue";
font-size: 14px;
}


</style>