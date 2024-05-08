<template>
    <button @click="cutFn">递减</button>
</template>
    
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        cutFn() {
            this.$store.commit('tocut',1)
            this.$store.dispatch('asynctocut',1)
        }
    }
}
</script>
 
<style lang = "less" scoped>
    
</style>