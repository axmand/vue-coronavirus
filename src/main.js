//vue 程序入口
import Vue from 'vue';
//组件载入
import App from './App.vue';

const app = new Vue({
    render:h=>h(App)
}).$mount("#app");