<template>
  <div class="">
    <h3>{{ num }}</h3>
    <button @click="addFn">累加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5,
    }
  },
  methods: {
    addFn() {
      this.num++
    }
  }
}
</script>

<style lang="less" scoped></style>