<template>
  <div id="contact" class="inner">
    <p>Wanna say hi? <a href="mailto:dgm844@gmail.com">Send me an email!</a></p>
    <p>Or you can check my code on <a href="https://github.com/alyndre"><i class="fa fa-github" aria-hidden="true"></i></a> or see my profile at <a href="https://www.linkedin.com/in/daniel-gomez-moreno-0b906012a/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></p>
  
    <div class="light-background">
      <div class="medium-transition"></div>
    </div>
    <scroll v-bind:set-dir="up" v-bind:color="dark"></scroll>
  </div>
</template>

<script>
import Scroll from './Scroll.vue';
export default {
  name: 'contact',
  data() {
    return {
      up: 'up',
      dark: 'dark',
    }
  },
  components: {
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
      width: 45%;
      margin-left: 10%;
      font-size: 1.6rem;
      color: $nord1;
    }
  }

  .light-background{
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $nord6;
    .medium-transition {
      position: absolute;
      top:-100px;
      border-bottom: 200px solid $nord6;
      border-left: 100vw solid $nord4;
    }
  }
  .scroll {
    &.up {
      top: 15px;
      left: 55px;
    }
  }
</style>