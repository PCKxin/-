<template>
  <div class="about">
    <h3>{{ num }}</h3>
    <button @click="cutFn">递减</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    cutFn() {
      this.num--
    }
  },
}
</script>

<style lang="less" scoped></style>
