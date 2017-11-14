import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(response)
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

Vue.use(VueAxios, axios)

export default axios;