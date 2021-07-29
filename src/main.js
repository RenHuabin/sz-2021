import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter("toImg",(url,params)=>{
  return url.replace(/w\.h/,params)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
