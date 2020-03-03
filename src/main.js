//vue 程序入口
import Vue from 'vue';
//组件载入
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.prototype.mapInstance = {};
Vue.prototype.features = {};
Vue.prototype.Patientfeatures = {};

const app = new Vue({
    render:h=>h(App)
}).$mount("#app");