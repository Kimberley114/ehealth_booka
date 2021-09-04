<template>
  <div class="block">
    <el-slider v-model="value" show-input> </el-slider>
  </div>

  <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
    {{ tag.name }}
  </el-tag>

  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        <template #extra>
          <el-button type="primary" size="medium">返回</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
        <template #extra>
          <el-button type="primary" size="medium">返回</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
        <template #extra>
          <el-button type="primary" size="medium">返回</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
        <template #extra>
          <el-button type="primary" size="medium">返回</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
  <el-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon
  >
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon
  >
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon
  >
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon
  >
  </el-alert>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>

  <el-button type="text" @click="open">点击打开 Message Box</el-button>

  <el-affix :offset="120">
    <el-button type="primary">距离顶部 120px</el-button>
  </el-affix>

  <el-popconfirm
    confirmButtonText="确定"
    cancelButtonText="取消"
    icon="el-icon-info"
    iconColor="red"
    title="这是一段内容确定删除吗？"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
  >
    <template #reference>
      <el-button>删除</el-button>
    </template>
  </el-popconfirm>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>卡片名称</span>
        <el-button class="button" type="text">操作按钮</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </el-card>
  <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="一致性 Consistency" name="1">
      <div>
        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
      </div>
      <div>
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </div>
    </el-collapse-item>
    <el-collapse-item title="反馈 Feedback" name="2">
      <div>
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
      </div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>
    <el-collapse-item title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
      </div>
    </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="4">
      <div>
        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
      </div>
      <div>
        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  name: "Helper",
  data() {
    return {
      activeNames: ["1"],
      value: 0,
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    confirmEvent() {
      console.log("confirm!");
    },
    cancelEvent() {
      console.log("cancel!");
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
