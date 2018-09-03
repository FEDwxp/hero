import axios from 'axios';

const myHttp = {};
//给vue的原型添加axios方法
//设置基路径
myHttp.install = function(Vue) {
    axios.defaults.baseURL = 'http://127.0.0.1:3000/';
    Vue.prototype.$http = axios;
};

export default myHttp;