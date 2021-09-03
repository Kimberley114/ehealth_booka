<template>
  <div class="helper"> 
    <el-button @click="show3 = !show3" type="primary" >  Accessibility Helper</el-button>
    <div >
      <el-collapse-transition>
        <div v-show="!show3">
          <div class="transition-box" style= "padding-left: -20px; margin-top: 3px;"><box-icon name='globe' animation='tada-hover'  ></box-icon>Language</div>
          <div class="transition-box"><box-icon name='font-size' animation='tada-hover' ></box-icon>Enlarge text</div>
          <div class="transition-box"><box-icon name='palette' color="red" type='solid' animation='tada-hover'  ></box-icon>Color theme</div>
          <div class="transition-box"><box-icon name='brightness-half' type='solid' animation='tada-hover' ></box-icon>Dark mode</div>
          <div class="transition-box">Simply design</div>
          <div class="transition-box">Voice assistant</div>
          <div class="transition-box"><box-icon name='undo' animation='tada-hover' ></box-icon>Reset all settings</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>

  
</template>

<script>
export default {
  name: "LeftMenu",
  data: () => ({
    show3: true,
  }),
};
</script>
<style>
.transition-box {
  width: 180px;
  height: 10px;
  /* border-radius: 4px; */
  text-align:center;
  color: #409eff;
  height: 50px;

  box-sizing: border-box;
  border-color:#409eff;
  border-style: solid;
  border-width: 2px;

}
.helper{
position: fixed;
 position: absolute;
 top: 20px;
 left: 100px;
 
}
</style>