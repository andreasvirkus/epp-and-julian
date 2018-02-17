import Vue from 'vue'
import App from './App'
import NavLink from './components/NavLink'

Vue.config.productionTip = false
Vue.component(NavLink)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
