<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>

  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    function next() {
      if (active.value++ > 2) {
        active.value = 0;
      }
    }
    return { active, next };
  },
};
</script>
