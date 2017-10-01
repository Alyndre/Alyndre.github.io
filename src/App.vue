<template>
  <div id="app">
      <vue-particles color="#919BAF"
        :particleOpacity="0.7"
        :particlesNumber="70"
        shapeType="circle"
        :particleSize="2"
        linesColor="#919BAF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
      <div id="fullpage" v-fullpage="fullpageOptions">
        <slide class="section active" v-bind:slide-count="1"></slide>
        <slide class="section" v-bind:slide-count="2"></slide>
        <slide class="section" v-bind:slide-count="3"></slide>
      </div>
  </div>
</template>

<script>
import Slide from './Slide.vue'
export default {
  name: 'app',
  data () {
    return {
      fullpageOptions: {
        css3: true,
        verticalCentered: false
      }
    }
  },
  components: {
    'slide': Slide
  }
}
</script>

<style lang="scss">
  @import "./styles/settings.scss";
  #app {
    font-family: 'Raleway', sans-serif;
    position: relative;
    //overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100%;
    //background: linear-gradient(-10deg, $nord6 50%, $nord0 50%);
    @media (max-width: 991px) {
      position: absolute;
      height: 100%;
      #fullpage {
        height: 100%;
      }
    }
    #particles-js {
      height: 100vh;
      width: 100%;
      position: fixed;
      pointer-events: none;
      z-index: 1;
    }
    a {
      text-decoration: none;
      color: $nord10;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
