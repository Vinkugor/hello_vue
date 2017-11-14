<template>
    <div id="app">
        <h1 @click="goOther()">{{ msg }}{{ token }}{{strJoin}}</h1>
        <button @click="addCount()">Token++</button>
        <div>
            <input type="text" v-model="name" />
            <button @click="submit()">Submit</button>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
    } from 'vuex'
    import * as types from '../store/types'
    export default {
        name: "app",
        data() {
            return {
                msg: "这是Index页面",
                name: null,
            };
        },
        computed: {
            ...mapState([
                'token'
            ]),
            ...mapGetters([
                'strJoin',
            ])
        },
        created() {
            
        },
        methods: {
            ...mapActions({
                testAction: 'testAction',
            }),
            goOther() {
                this.$router.push({
                    path: 'abc',
                    query: {
                        plan: 'private'
                    }
                })
            },
            addCount() {
                this.$store.commit(types.CHANGE_TEXT)
                this.testAction().then(() => {
                    // console.log(this.$router)
                })
            },
            submit() {
                this.$store.commit(types.SUBMIT_NAME, this.name)
                this.$router.push({
                    path: 'FORM_SUBMIT',
                })
            }
        }
    };
</script>

<style lang="scss">
    
</style>
