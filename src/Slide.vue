<template>
  <div class="slide">
    <section>
      <div class="items">
        <div class="inner">
          <p>I'm a young developer based in Spain.</p>
          <p>I make computer stuff. That's the long and short of it.</p>
          <p>I use <span>Vue</span> for front-end, <span>Node.js</span> for server, <span>MongoDB</span> for databases and <span>Python</span> with TensorFlow or Keras for AI.</p>
          <p> I can also work with the good, most established <span>PHP</span> or <span>Java</span> too.</p>
        </div>
      </div>
    </section>
  </div>
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
  
  .slide {
    //background-color: $nord5;
    position: relative;
    height: 100vh;
    width: 100%;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    section {
      text-align: center;
      width: 100%;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      .items {
        width: 100%;
        .inner {
          text-align: left;
          margin: 0 auto;
          width: fit-content;
          z-index: 2;
          p {
            color: $nord3;
            width: 40%;
            margin-left: 50%;
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
          }
        }
      }
    }
  }
</style>