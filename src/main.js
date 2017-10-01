import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import Slide from './Slide.vue'

Vue.directive('fullpage', function(el, binding) {
  $(el).fullpage(binding.value);
});

Vue.use(VueParticles);

Vue.component('slide', Slide);

new Vue({
  el: '#app',
  render: h => h(App)
})
