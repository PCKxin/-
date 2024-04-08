<template>
  <div class="home">
    <h2 ref="title">{{ msg }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      msg:"hello world"
    };
  },
  methods: {
    btnClick(){
      console.log("btn clicked");
      // $refs获取元素
      console.log(this.$refs.title)
      // 修改元素内容
      this.$refs.title.innerText = "hello vue";
      
    }
  }
}
</script>
