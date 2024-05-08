<template>
  <div class="">
    <h2>{{ title }}</h2>
    <button @click="btnClick">修改标题</button>
  </div>
</template>

<script>

// 引入vuex的辅助函数, 用于简化vuex的使用
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' 

export default {
  data() {
    return {
      
    }
  },
  computed: {
    // title() {
    //   return this.$store.state.title
    //   // return this.$store.getters.getTitle
    // }
    ...mapState(['title'])
  },
  methods: {
    btnClick() {
      // this.$store.commit('tochangeTitle', 'vuexs')
      this.$store.commit('tochangeTitle', {name: 'vuexs'})
    }
  },

}

</script>