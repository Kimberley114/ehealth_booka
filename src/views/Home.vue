<template>
	<div >
		<router-view></router-view>
		<!-- <div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/appointment">Appointments</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/calender">Calenders</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div> -->
	</div>
  <div>

  </div>
</template>

<script>
import Appointment from "../components/Appointment.vue"
import Search from "../components/Search.vue"
import FamilyMember from "../components/FamilyMember.vue"
import HelpCenter from "../components/HelpCenter.vue"
import Profile from "../components/Profile.vue"
	export default {
		name:'Home',
		components:{
			Appointment,
			FamilyMember,
			HelpCenter,
			Profile,
			Search


      }
	}


</script>

<style scoped>


</style>