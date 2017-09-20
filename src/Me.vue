<template>
  <div class="inner">
    <p>I'm Dani, a young developer based in Spain.</p>
    <p>I make computer stuff. That's the long and short of it.</p>
    <p>I use <span v-bind:class="clas" v-on:mouseover="color">Sass</span>/<span v-bind:class="clas" v-on:mouseover="color">Javascript</span> for front-end, <span v-bind:class="clas" v-on:mouseover="color">Node.js</span> for server, <span v-bind:class="clas" v-on:mouseover="color">MongoDB</span> for databases and <span v-bind:class="clas" v-on:mouseover="color">Python</span> with TensorFlow or Keras for AI. Recently I've been playing with <span v-bind:class="clas" v-on:mouseover="color">Vue.js</span> for front-end and <span v-bind:class="clas" v-on:mouseover="color">Ionic</span> for mobile.</p>
    <p>I can also work with <span v-bind:class="clas" v-on:mouseover="color">PHP</span> or <span v-bind:class="clas" v-on:mouseover="color">Java</span>.</p>
    <p>Finally, I have an <span v-bind:class="clas" v-on:mouseover="color">Android</span> game in the <a href="https://play.google.com/store/apps/details?id=com.rawr.colors.android">Play Store</a></p>
  </div>
</template>

<script>
export default {
  name: 'slide',
  data() {
    return {
      clas: 's1'
    }
  },
  methods: {
    color: function(event) {
      var x = Math.floor(Math.random() * 5 + 1);
      this.clas= 's'+x;
    }
  },
  mounted() {
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
      span {
        color: $nord0;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
        &.s1:hover {
          background-color: $nord11;
        }
        &.s2:hover {
          background-color: $nord12;
        }
        &.s3:hover {
          background-color: $nord13;
        }
        &.s4:hover {
          background-color: $nord14;
        }
        &.s5:hover {
          background-color: $nord15;
        }
      }
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>