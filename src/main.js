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
