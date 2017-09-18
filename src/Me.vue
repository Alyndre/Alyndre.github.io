<template>
  <section>
    <p>I'm a young developer based in Spain.</p>
    <p>I make computer stuff. That's the long and short of it.</p>
    <p>I use <span>Sass</span>/<span>Javascript</span> for front-end, <span>Node.js</span> for server, <span>MongoDB</span> for databases and <span>Python</span> with TensorFlow or Keras for AI. Recently I've been playing with <span>Vue.js</span> for front-end.</p>
    <p>I can also work with <span>PHP</span> or <span>Java</span>.</p>
    <p>Finally, I also have an <span>Android</span> game in the <a href="https://play.google.com/store/apps/details?id=com.rawr.colors.android">Play Store</a></p>
  </section>
</template>

<script>
export default {
  name: 'slide',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  section {
    text-align: left;
    margin: 0 auto;
    width: fit-content;
    z-index: 2;
    p {
      color: $nord3;
      width: 45%;
      margin-left: 45%;
      font-size: 1.6rem;
      z-index: 2;
      span {
        color: $nord0;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          background-color: $nord13;
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