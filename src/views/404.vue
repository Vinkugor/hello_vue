<template>
    <div id="app">
        <h1 @click="goOther()">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                msg: "这是404页面!"
            };
        },
        methods: {
            goOther() {
                this.$router.push("/");
            }
        }
    };
</script>

<style lang="scss">
    
</style>
