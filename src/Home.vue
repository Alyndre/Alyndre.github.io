<template>
  <div class="inner">
    <h1 v-text="title"></h1>
    <transition appear
      v-on:before-appear="subTitleBeforeAppearHook"
      v-on:appear="subTitleAppearHook" >
      <h2 v-text="subtitle"></h2>
    </transition>
    <h2 id="underscore" v-bind:class="{ hidden: hiddenUS}">_</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Daniel Gomez',
      subtitle: '> ',
      lastI: 0,
      hiddenUS: false
    }
  },
  methods: {
    subTitleBeforeAppearHook: function() {},

    subTitleAppearHook: function() {
      var text = "developer";
      //this.subtitle += "developer";
      this.subtitle += text.charAt(this.lastI);
      this.lastI++;
      //clearInterval(interval);
    },
    underscoreBlink: function() {
      this.hiddenUS = !this.hiddenUS;
    }
  },
  mounted() {
    var interval = setInterval(this.subTitleAppearHook, 150);
    setInterval(this.underscoreBlink, 400);
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  

  .inner {
    text-align: left;
    margin: 0 auto;
    width: fit-content;
  }
  h1{
      font-weight: 500;
      font-size: 4rem;
      margin-bottom: 0.5rem;
      margin-top: 0rem;
  }
  h2 {
      font-weight: 300;
      padding-top: 1rem;
      font-size: 2rem;
      display: inline;
      opacity: 1;
      margin-left: -20px;
      &#underscore {
        margin-left: -5px;
      }
      &.hidden {
        opacity: 0;
      }
  }
  h1, h2 {
    color: $nord4;
  }
</style>