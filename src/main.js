//vue 程序入口
import Vue from 'vue';
//组件载入
import App from './App.vue';
//跨域请求
import axios from 'axios';

Vue.prototype.mapInstance = {};
//跨域
axios.defaults.headers.post["Content-type"]="application/json";
Vue.prototype.$axios=axios;

const app = new Vue({
    render:h=>h(App)
}).$mount("#app");