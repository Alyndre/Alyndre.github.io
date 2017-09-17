import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import Home from './Home.vue'
import Slide from './Slide.vue'
import Contact from './Contact.vue'

Vue.use(VueParticles);

Vue.component('home', Home);
Vue.component('slide', Slide);
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
