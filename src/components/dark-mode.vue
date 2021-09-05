<template>
  <DarkMode @change-mode="myColorModeHandler">
    <template v-slot="{ mode }">
      Color mode: {{ mode }}
    </template>
  </DarkMode>
</template>

<script>
export default {
  // ...
  methods: {
    myColorModeHandler (mode) {
      // action here
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
