<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
    
<script>
export default {
    data () {
        return {

        }
    },
    // 组件守卫
    beforeRouteEnter(to, from, next) {
      console.log("组件守卫")
      if(to.path == '/about'){
        if(from.path == '/about'){
          next()
        }else{
          console.log("path不是/about，不能进入/user")
          next('about')
        }
      }else{
        next()
      }
    },
}
</script>
 
<style lang = "less" scoped>
    
</style>
