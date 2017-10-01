<template>
  <div id="me" class="inner">
    <p>I'm Dani, a young developer based in Spain.</p>
    <p>I make computer stuff. That's the long and short of it.</p>
    <p>I use <highlight text="Sass"></highlight>/<highlight text="Javascript"></highlight> for front-end, <highlight text="Node.js"></highlight> for server, <highlight text="MongoDB"></highlight> for databases and <highlight text="Python"></highlight> with TensorFlow or Keras for AI. Recently I've been playing with <highlight text="Vue.js"></highlight> for front-end and <highlight text="Ionic"></highlight> for mobile.</p>
    <p>I can also work with <highlight text="PHP"></highlight> or <highlight text="Java"></highlight>.</p>
    <p>Finally, I have an <highlight text="Android"></highlight> game in the <a href="https://play.google.com/store/apps/details?id=com.rawr.colors.android">Play Store</a></p>
  
    <div class="medium-background">
      <div class="dark-transition"></div>
      <div class="light-transition"></div>
    </div>
    <scroll v-bind:set-dir="up" v-bind:color="light"></scroll>
    <scroll v-bind:set-dir="down" v-bind:color="dark"></scroll>
  </div>
</template>

<script>
import Highlight from './Highlight.vue';
import Scroll from './Scroll.vue';
export default {
  name: 'slide',
  data() {
    return {
      clas: 's1',
      down: 'down',
      up: 'up',
      dark: 'dark',
      light: 'light'
    }
  },
  methods: {
    
  },
  mounted() {
  },
  components: {
    'highlight': Highlight,
    'scroll': Scroll
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  
  .inner {
    text-align: left;
    margin: 0 auto;
    width: fit-content;
    p {
      color: $nord2;
      width: 45%;
      margin-left: 45%;
      font-size: 1.6rem;
      z-index: 2;
      
    }
  }

  .medium-background{
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: $nord4;
    .dark-transition {
      position: absolute;
      top:-100px;
      border-bottom: 200px solid $nord4;
      border-left: 100vw solid $nord0;
    }
    .light-transition {
      position: absolute;
      bottom:-100px;
      border-bottom: 200px solid $nord6;
      border-left: 100vw solid $nord4;
    }
  }
  .scroll {
    &.down {
      right: 55px;
      bottom: 15px;
    }
    &.up {
      top: 15px;
      left: 55px;
    }
  }
</style>