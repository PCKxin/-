<template>
    <div class="">
        user
        {{ $route.query.id }}
    </div>
</template>
    
<script>
export default {
    data () {
        return {

        }
    },
    created(){
        console.log(this.$route.query.id)
    }
}
</script>
 
<style lang = "less" scoped>
    
</style>