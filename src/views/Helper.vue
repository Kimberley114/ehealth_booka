<template>
  <div class="helper">
     <el-affix :offset="150">
    <el-button @click="show3 = !show3" type="primary">
      Accessibility Helper</el-button
    >
    <div>
      <el-collapse-transition>
        <div v-show="!show3">
          <div
            class="transition-box"
            style="padding-left: -20px; margin-top: 3px"
          >
            <i class='bx bx-world bx-tada' ></i>Language
          </div>
          <div class="transition-box">
            <i class='bx bx-font-size bx-tada' ></i>Enlarge
            text
          </div>
        <!-- <div class="transition-box"><box-icon name='palette' color="red" type='solid' animation='tada-hover'  ></box-icon>Color theme </div> -->
          <div class="transition-box">

            <colorPicker v-model="color" v-on:change="headleChangeColor" />Color theme
    
          </div>
          <div class="transition-box">
            <i class='bx bxs-brightness-half bx-tada' ></i>Dark mode
          </div>
          <div class="transition-box">Simply design</div>
          <!-- <div class="transition-box">Voice assistant</div> -->
          <div class="transition-box">
            <i class='bx bx-undo bx-tada' ></i>Reset all
            settings
          </div>
        </div>
      </el-collapse-transition>
    </div>
 </el-affix>
  </div>
</template>

<script>
// import Color from '../packages/color-picker/src/color-picker.vue'
export default {
  name: "Helper",
  component:{

  },
  data () {
    return {
    show3: true,
    color: '#409eff',
    }

  },
    methods: {
    headleChangeColor (color) {
      console.log(`color change：${color}`)
      color = color
    }
  }
}
</script>
<style scoped>

.transition-box {

  
  width: 200px;
  height: 10px;
  /* border-radius: 4px; */
  text-align: center;
  color: black;
  height: 50px;
  background-color: white;
  box-sizing: border-box;
  border-color: #409eff;
  border-style: solid;
  border-width: 2px;
}


</style>