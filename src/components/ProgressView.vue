<template>
  <el-progress :percentage="50"></el-progress>
  <el-progress :percentage="100" :format="format"></el-progress>
  <el-progress :percentage="100" status="success"></el-progress>
  <el-progress :percentage="100" status="warning"></el-progress>
  <el-progress :percentage="50" status="exception"></el-progress>
</template>

<script>
export default {
  setup() {
    const format = (percentage) => {
      return percentage === 100 ? "Full" : `${percentage}%`;
    };
    return {
      format,
    };
  },
};
</script>

<style></style>
