import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'

Vue.directive('fullpage', function(el, binding) {
  if (window.innerWidth>991){
    $(el).fullpage(binding.value);
  }
});

Vue.use(VueParticles);

new Vue({
  el: '#app',
  render: h => h(App)
})
