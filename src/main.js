import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import Slide from './Slide.vue'

Vue.use(VueParticles);

Vue.component('slide', Slide);

new Vue({
  el: '#app',
  render: h => h(App)
})
