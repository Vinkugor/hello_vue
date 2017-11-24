import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';       //store
import router from './router-config.js';     //路由配置

require('./request-config.js')

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');