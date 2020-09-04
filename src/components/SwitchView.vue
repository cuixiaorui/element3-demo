<template>
  <div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(true);
    return { value };
  },
};
</script>

<style></style>
