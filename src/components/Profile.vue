<template>

this is profile page
<i class='bx bxs-palette bx-tada' 
      v-bind:style="`color: ${mode}`"
      v-on:click="myColorModeHandler"
     ></i>
  <DarkMode>
    <template v-slot="{ mode }">
      Color mode: {{ mode }}
    </template>
  </DarkMode>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'

export default {

  name: 'Profile',
  components: {
    DarkMode
  },


  methods: {
    myColorModeHandler: function (e) {
      console.log(e)
    }
  }
}

</script>

<style>
:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32;
  --color: #ddd8ca;
}

body {
  background-color: var(--bg);
  color: var(--color);
}
</style>

