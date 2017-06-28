import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'
import VueBar from 'vuebar';

Vue.filter('currency', currency)
Vue.use(VueBar);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
