<template>
  <ul
    class="infinite-list"
    v-infinite-scroll="load"
    :infinite-scroll-delay="0"
    style="overflow:auto"
  >
    <li v-for="(i, index) in count" class="infinite-list-item" :key="index">
      {{ i }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>
