<template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading"
  >
    指令方式
  </el-button>
  <el-button type="primary" @click="openFullScreen2"> 服务方式 </el-button>
</template>

<script>
import { useLoading } from "../element3";
import { ref } from "vue";

export default {
  setup() {
    const loading = useLoading();
    const fullscreenLoading = ref(false);
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2000);
    };

    const openFullScreen2 = () => {
      const loadingInstance = loading({
        // lock: true,
        // target: e.target,
        text: "Loading...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loadingInstance.close();
      }, 2000);
    };

    return {
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
    };
  },
};
</script>
