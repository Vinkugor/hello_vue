import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import IndexComp from './views/index.vue'; //引入页面
// import NotFoundComp from './views/404.vue';
// import ProfileComp from './views/profile.vue';

//懒加载
const IndexComp = resolve => require(['./views/index.vue'],resolve)
const NotFoundComp = resolve => require(['./views/404.vue'],resolve)
const ProfileComp = resolve => require(['./views/profile.vue'],resolve)

const routes = [{
        path: '/',
        component: IndexComp,
    },
    {
        path: '/:name',
        component: ProfileComp,
    },
    {
        path: '*',
        alias: '/404',
        component: NotFoundComp,
    },
];

//创建路由
const router =  new VueRouter({
    mode: 'history',
    routes,
});

export default router