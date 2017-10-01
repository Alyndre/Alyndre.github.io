<template>
  <div id="home" class="inner">
    <h1 class="chevron">> </h1>
    <transition appear
      v-on:before-appear="textBeforeAppearHook"
      v-on:appear="textAppearHook" >
      <h1 v-text="title"></h1>
    </transition>
    <h1 id="underscore" v-bind:class="{ hidden: hiddenUS}">_</h1>
    <div class="dark-background">
      <div class="medium-transition"></div>
    </div>
    <scroll v-bind:set-dir="down" v-bind:color="dark"></scroll>
  </div>
</template>

<script>
import Scroll from './Scroll.vue';
export default {
  name: 'home',
  data() {
    return {
      //text: 'Hello!',
      title: ' ',
      lastI: 0,
      hiddenUS: false,
      down: 'down',
      dark: 'dark'
    }
  },
  methods: {
    textBeforeAppearHook: function() {},

    textAppearHook: function() {
      var text = "Hello!";
      this.title += text.charAt(this.lastI);
      this.lastI++;
    },
    underscoreBlink: function() {
      this.hiddenUS = !this.hiddenUS;
    }
  },
  mounted() {
    var interval = setInterval(this.textAppearHook, 200);
    setInterval(this.underscoreBlink, 400);
  },
  components: {
    'scroll': Scroll
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  

  .inner {
    text-align: center;
    margin: 0 auto;
    width: fit-content;
  }
  h1 {
      font-weight: 500;
      padding-top: 1rem;
      font-size: 4rem;
      display: inline;
      opacity: 1;
      &#underscore {
        margin-left: -5px;
      }
      &.hidden {
        opacity: 0;
      }
      &.chevron {
        font-weight: 300;
      }
  }
  h1 {
    color: $nord4;
  }

  .dark-background{
    position: absolute;
    top:0px;
    left:0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: $nord0;
    .medium-transition {
      position: absolute;
      bottom:-100px;
      border-bottom: 200px solid $nord4;
      border-left: 100vw solid $nord0;
      @media (max-width: 991px) {
        bottom:0.85%;
      }
    }
  }
  .scroll {
    right: 55px;
    bottom: 15px;
  }
</style>