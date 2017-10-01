<template>
  <div class="slide">
    <section>
      <div class="items">
        <home v-if="count == 1"></home>
        <me v-else-if="count == 2"></me>
        <contact v-else-if="count == 3"></contact>
      </div>
    </section>
  </div>
</template>

<script>
import Home from './Home.vue';
import Me from './Me.vue'
import Contact from './Contact.vue'
export default {
  name: 'slide',
  props: ['slideCount'],
  data() {
    return {
      count : this.slideCount
    }
  },
  methods: {
  },
  mounted() {
  },
  components: {
    'home': Home,
    'me': Me,
    'contact': Contact
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  
  .slide {
    position: relative;
    height: 100%;
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