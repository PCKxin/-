<template>
    <button @click="addFn">累加</button>
</template>
    
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        addFn() {
            // .commit 作用是 触发 mutations 中的方法 
            this.$store.commit('toadd')
            this.$store.dispatch('asynctoadd')
        }
    }
}
</script>
 
<style lang = "less" scoped>
    
</style>