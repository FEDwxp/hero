import Vue from 'vue'
import App from './App.vue'
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 引人入css样式
import './assets/css/index.css';

new Vue({
    el: '#app',
    render: h => h(App)
})