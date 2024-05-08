<template>
  <div class="home">
    <!-- <h2>{{ $store.state.num }}</h2> -->
    <h2>{{ num }}</h2>
    <h2>{{ getNum }}</h2>
    <h3>{{ $store.state.title }}</h3>
    <Abtn></Abtn>
    <Bbtn></Bbtn>
  </div>
</template>

<script>
// @ is an alias to /src
import Abtn from '@/components/btns/Abtn.vue';
import Bbtn from '@/components/btns/Bbtn.vue';

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import managenum from '@/store/modules/managenum.js'

export default {
  name: 'HomeView',
  components: {
    Abtn,
    Bbtn
  },
  data() {
    return {
      // num: 0
    }
  },
  computed: {
    // num() {
    //   // return this.$store.state.num
    //   return this.$store.getters.getNum
    // }

    ...mapState(['num']),
    ...mapGetters(['getNum'])
  },

}
</script>
