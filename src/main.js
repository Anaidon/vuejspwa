import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCFCRUJDvnUV7sAkP8z6bPWoyRt6SPdXT0'
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
