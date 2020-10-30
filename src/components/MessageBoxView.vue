<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
import { useAlert, useMessage } from "../element3";
export default {
  setup() {
    const $alert = useAlert();
    const $message = useMessage();

    function open() {
      $alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          $message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    }

    return {
      open,
    };
  },
};
</script>
