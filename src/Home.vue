<template>
  <div id="home">
    <section id="me">
      <div class="items">
        <div class="inner">
          <h1 v-text="title"></h1>
          <transition appear
            v-on:before-appear="subTitleBeforeAppearHook"
            v-on:appear="subTitleAppearHook" >
            <h2 v-text="subtitle"></h2>
          </transition>
          <h2 id="underscore" v-bind:class="{ hidden: hiddenUS}">_</h2>
        </div>
      </div>
    </section>
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
    subTitleBeforeAppearHook: function() {
      //console.log("ba");
    },

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
  
  #home {
    //background-color: $nord0;
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
        }
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
    }
  }
</style>