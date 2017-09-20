<template>
  <div class="inner">
    <h1 class="chevron">> </h1>
    <transition appear
      v-on:before-appear="textBeforeAppearHook"
      v-on:appear="textAppearHook" >
      <h1 v-text="title"></h1>
    </transition>
    <h1 id="underscore" v-bind:class="{ hidden: hiddenUS}">_</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      //text: 'Hello!',
      title: ' ',
      lastI: 0,
      hiddenUS: false
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
    var interval = setInterval(this.textAppearHook, 150);
    setInterval(this.underscoreBlink, 400);
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
</style>