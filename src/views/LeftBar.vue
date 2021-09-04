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
  position: absolute;
  z-index: 999;
  top: 0;
  top: 20px;
  left: 80px;
}
.menu {
  position: absolute;
  top: 100px;
  left: 140px;
}
</style>