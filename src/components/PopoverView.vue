<template>
  <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <el-button>hover 激活</el-button>
    </template>
  </el-popover>

  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <el-button>click 激活</el-button>
    </template>
  </el-popover>

  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <template #reference>
      <el-button @click="visible = !visible">手动激活</el-button>
    </template>
  </el-popover>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const visible = ref(false);
    return {
      visible,
    };
  },
};
</script>
