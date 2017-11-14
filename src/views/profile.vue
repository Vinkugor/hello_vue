<template>
    <div id="app">
        <h1 @click="goOther()">{{ msg }}{{$route.params.name}}</h1>
        <h2>{{name}} - {{all}} - {{getLength}}</h2>
        <button @click="changeText()">Push Arr</button>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions,
    } from 'vuex'
    import * as types from '../store/types'
    export default {
        name: "app",
        data() {
            return {
                msg: "这是Profile页面"
            };
        },
        created() {
            
        },
        beforeRouteUpdate(to, from, next) {
            next();
        },
        computed: {
            ...mapState({
                name: 'name',
            }),
            ...mapState('profile', {
                all: 'all',
            }),
            ...mapGetters('profile', {
                getLength: 'getLength'
            })
        },
        methods: {
            ...mapMutations('profile', {
                changeText: types.PROFILE_CHANGE_TEXT
            }),
            goOther() {
                this.$router.push("/" + Date.now());
            },
        }
    };
</script>

<style lang="scss">
    
</style>
