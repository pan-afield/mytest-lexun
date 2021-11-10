import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import VCharts from 'v-charts'
import eCharts from 'echarts'
import china from 'echarts/map/json/china.json'
import {request} from './request/axios'

eCharts.registerMap('china',china)

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
//全局过滤器
Vue.filter('strFilter',function(value){
  if(!value) return ''
  return value + '哈哈哈'
})
Vue.prototype.$axios = request
Vue.prototype.$echarts = eCharts
Vue.use(VCharts)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
