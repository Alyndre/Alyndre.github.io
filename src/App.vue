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
      <home></home>
      <slide></slide>
      <contact></contact>
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
    background: linear-gradient(0deg, $nord6 50%, $nord0 50%);
    &.state1 {
      //background-color: $nord0;
    }
    &.state2 {
      //background-color: $nord6;
    }
    #particles-js {
      height: 100vh;
      width: 100%;
      position: fixed;
    }
  }
</style>
