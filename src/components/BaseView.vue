<template>
  <div class="base-view">
    <h1>{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, renderSlot } from "vue";
export default {
  props: ["title"],
};
</script>

<style>
.base-view {
  border: 1px solid pink;
  padding: 20px;
}
</style>
