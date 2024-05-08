<template>
  <div class="home">
    <button @click="btnClick(1)" :style="{background:num==1?'pink':''}">Abtn</button>
    <button @click="btnClick(2)" :style="{background:num==2?'pink':''}">Bbtn</button>
    <button @click="btnClick(3)" :style="{background:num==3?'pink':''}">Cbtn</button>
    <Abtn v-if="num==1"></Abtn>
    <Bbtn v-else-if="num==2"></Bbtn>
    <Cbtn v-else></Cbtn>
  </div>
</template>

<script>
// @ is an alias to /src
import Abtn from '@/components/btns/Abtn'
import Bbtn from '@/components/btns/Bbtn'
import Cbtn from '@/components/btns/Cbtn'

export default {
  name: 'HomeView',
  components: {
    Abtn,
    Bbtn,
    Cbtn
  },
  data(){
    return {
      num: 1
    }
  },
  methods: {
    btnClick (num) {
      console.log(num)
      this.num = num
    }
  }
}
</script>
