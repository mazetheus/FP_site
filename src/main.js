import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
