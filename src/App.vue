<template>
  <div id="app" class="state1">
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
      <slide v-bind:slide-count="1"></slide>
      <slide v-bind:slide-count="2"></slide>
      <slide v-bind:slide-count="3"></slide>
      <div class="backgrounds">
        <div class="dark-background">
          <div class="light-transition"></div>
        </div>
        <div class="light-background">
          <div class="medium-transition"></div>
        </div>
        <div class="medium-background">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scrollY: 0,
      state: 0
    }
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY;
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
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
    height: 100%;
    width: 100%;
    //background: linear-gradient(-10deg, $nord6 50%, $nord0 50%);
    .backgrounds {
      position: absolute;
      top:0;
      z-index: -1;
      width: 100%;
      overflow: hidden;
      .light-background, .dark-background, .medium-background {
        width: 100%;
        height: 100vh;
        position: relative;
      }
      .light-background {
        background-color: $nord4;
        z-index: 2;
      }
      .dark-background {
        background-color: $nord0;
        z-index: 3;
      }
      .medium-background {
        background-color: $nord6;
        z-index: 1;
      }
      .light-transition, .dark-transition, .medium-transition {
        position: absolute;
        //height: 100px;
        //width: 100%;
        bottom:-100px;
      }
      .light-transition {
        border-bottom: 200px solid $nord4;
	      border-left: 100vw solid $nord0;
      }
      .medium-transition {
        border-bottom: 200px solid $nord6;
	      border-left: 100vw solid $nord4;
      }
      .dark-transition {

      }
    }
    #particles-js {
      height: 100vh;
      width: 100%;
      position: fixed;
    }
  }
</style>
