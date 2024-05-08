<template>
  <div class="home">
    <h2 ref="title">{{ msg }}</h2>
    <button @click="btnClick">按钮</button>
    <ref-sub ref="RefSub"></ref-sub>
  </div>
</template>

<script>
// @ is an alias to /src
import RefSub from "@/components/RefSub.vue"

export default {
  name: 'HomeView',
  components: {
    RefSub
  },
  data() {
    return {
      msg: "你好，世界！"
    }
  },
  methods: {
    btnClick() {
      // alert(11111)
      // 获取元素 this.$refs.xxx
      console.log(this.$refs.title);

      // 获取内容
      console.log(this.$refs.title.innerText);

      // 获取子组件元素
      console.log(this.$refs.RefSub);

      // 获取子组件属性
      console.log(this.$refs.RefSub.num);

      // 获取子组件方法
      console.log(this.$refs.RefSub.subFn);
      this.$refs.RefSub.subFn()
    }
  },

}
</script>
