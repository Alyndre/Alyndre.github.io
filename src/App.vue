<template>
  <div id="app">
    <vue-particles color="#D8DEE9"
        :particleOpacity="0.7"
        :particlesNumber="70"
        shapeType="circle"
        :particleSize="2"
        linesColor="#D8DEE9"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
      <slide></slide>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  @import "./styles/settings.scss";
  #app {
    background: $nord0;
    font-family: 'Raleway', sans-serif;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    #particles-js {
      height: 100vh;
      width: 100%;
      position: absolute;
    }
  }
</style>
