<template>
  <el-button plain @click="open1">
    可自动关闭
  </el-button>
  <el-button plain @click="open2">
    不会自动关闭
  </el-button>
</template>

<script>
import { h } from "vue";
import { useNotify } from "../element3";
export default {
  setup() {
    const $notify = useNotify();
    const open1 = () => {
      $notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        ),
      });
    };

    const open2 = () => {
      $notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0,
      });
    };

    return { open1, open2 };
  },
};
</script>
