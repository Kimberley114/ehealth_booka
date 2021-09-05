<template>
  <div class="card">
    <div class="bookdate">
      <div class="bookdate1">{{ bookday }}</div>
      <div class="bookdate2">{{ bookdate }}</div>
    </div>
    <div class="bookdetails">
      <i class="bx bx-time-five"></i> {{ booktime }}
      <hr />
      <i class="bx bx-clinic"></i> {{ place }}
      <hr />
      <i class="bx bx-smile"></i> {{ doctor }}
      <hr />
      <i class="bx bx-phone"></i> {{ phone }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAppoint",
  data() {
    return {
      bookday: "16",
      bookdate: "June 2020",
      place: "Monash Uni Health Services - Clayton",
      doctor: "Dr. azhi Lam",
      booktime: "2:00 PM",
      phone: "020439662"
    };
  },
};
</script>
<style scoped>
.card {
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  border-style: solid;
  border-color: grey;
  border-radius: 10px;
  border-width: 1px;
}
.bookdate {
  text-align: center;
  display: grid;
  grid-template-rows: 2fr 1fr;
  background-color: grey;
  color: white;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-style: groove;

}
.bookdate1 {
  font-size: 250%;
}
.bookdetails {
  color: black;
  padding: 20px;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: groove;
  border-right-style: groove;
}
</style>