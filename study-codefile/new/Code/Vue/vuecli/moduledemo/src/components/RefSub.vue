<template>
    <div class="">
        {{ num }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        };
    },
    methods: {
        subFn() {
            console.log(123);
        }
    },
}
</script>

<style lang="less" scoped></style>