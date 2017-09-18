<template>
  <div class="slide">
    <section>
      <div class="items">
        <div class="inner">
          <home></home>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Home from './Home.vue';
import Me from './Me.vue'
export default {
  name: 'slide',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
  components: {
    'home': Home,
    'me': Me
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  
  .slide {
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
      }
    }
  }
</style>