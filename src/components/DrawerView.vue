<template>
  <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
    点我打开
  </el-button>

  <el-drawer title="我是标题" v-model:visible="drawer" :with-header="false">
    <span>我来啦!</span>
  </el-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
