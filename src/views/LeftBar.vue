<template>
  <div class="helper">
    <Helper />
  </div>
  <div class="menu">
    <Menu />
  </div>
</template>

<script>
import Helper from "./Helper.vue";
import Menu from "./Menu.vue";
export default {
  name: "LeftBar",
  components: {
    Helper,
    Menu,
  },
};
</script>
<style scoped>
.helper {
  position: fixed;
  z-index: 999;

  margin-top: -25px;
  left: 80px;
}
.menu {

  top: 100px;
  left: 140px;
}
</style>