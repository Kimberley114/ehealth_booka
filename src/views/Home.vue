<template>
	<div >
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
import Calender from "../components/Calender.vue"
	export default {
		name:'Home',
		components:{
			Appointment,
			Calender
      }
	}


</script>

<style scoped>


</style>