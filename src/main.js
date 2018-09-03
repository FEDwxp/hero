import Vue from 'vue';

import App from './App.vue';
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 引人入css样式
import './assets/css/index.css';
//引入路由
import router from './routers'

import myHttp from './plugins/myHttp';
Vue.use(myHttp)
new Vue({
    el: '#app',
    render: h => h(App),
    router
})