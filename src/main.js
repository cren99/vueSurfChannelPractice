import Vue from 'vue'
import mock from './mock-data.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  surfers: mock,
  favorites: [

  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
