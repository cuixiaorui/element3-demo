<template>
  <el-button type="text" @click="dialogVisible = true"
    >点击打开 Dialog</el-button
  >

  <el-dialog
    title="提示"
    width="30%"
    :before-close="handleClose"
    v-model:visible="dialogVisible"
  >
    <template v-slot:default>
      <span>这是一段信息</span>
    </template>
    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from "vue";
import { useConfirm } from "../element3";
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  setup() {
    const dialogVisible = ref(false);
    const $confirm = useConfirm();
    const handleClose = (done) => {
      $confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    };

    return {
      dialogVisible,
      handleClose,
    };
  },
};
</script>
