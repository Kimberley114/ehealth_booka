<template>
<div class="filterpatients"></div>
<div class="appointment">
	<div class="leftcard">
		<CardAppoint/></div>


	<div class="shownumber">
		<div class="current" >
			<div class="numC">{{current}} </div>
			<div class="textC">Current</div>
			</div>
		<div class="history">
			<div class="numH">{{history}} </div>
			<div class="textH">History</div>
		</div>
	</div>
	


</div>
</template>

<script>
import CardAppoint from "./CardAppoint.vue";
export default {
  name: "Appointment",
  components: { CardAppoint },
  data() {
    return {
current: 3,
history:4
	};
  },
};
</script>

<style scoped>
.appointment {
	display: grid;
	grid-template-columns: 2.5fr 1.5fr ;   
	padding: 20px;

}
.shownumber{
	display: grid;
	grid-template-columns: 1fr 1fr ;  
	text-align: center;
	padding-left: 20px;
	
}
.current{
	display: grid;
  grid-template-rows: 1.2fr 1fr;
}
.history{
	display: grid;
  grid-template-rows: 1.2fr 1fr;
}
.numC{
font-size: 300%;
}
.numH{
	font-size: 300%;
}
.textC {
	font-size: 120%
}
.textH {
	font-size: 120%
}
</style>
