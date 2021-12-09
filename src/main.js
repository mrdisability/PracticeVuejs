import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/styles.css';
//import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).mount('#app')

//BootstrapVue doesnt support Vuejs3 yet
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
