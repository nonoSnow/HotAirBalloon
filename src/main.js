import Vue from 'vue'
import App from './App.vue'
import {router} from './router'

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 配置请求的根路径
// axios.defaults.baseURL="http://127.0.0.1:8000/"
// axios.defaults.baseURL="http://127.0.0.1:5050/"
axios.defaults.baseURL="http://nonominiback.applinzi.com/"
Vue.use(VueAxios,axios)

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 全局过滤器 日期 的制作
import {date} from './filter'
Vue.filter("date",date);

// 注入store
import {store} from './store'
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
