<template>
  <div id="slide">
    <section id="me">
      <div class="items">
        <h1 class="animated fadeInUp">{{ title }}</h1>
        <h2 class="animated fadeInUp">{{ subtitle }}</h2>
      </div>
    </section>
  </div>
</template>w

<script>
export default {
  name: 'slide',
  data() {
    return {
      title: 'Daniel Gomez',
      subtitle: '> developer'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/settings.scss";
  
  #slide {
    height: 100vh;
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
      h1{
          font-weight: 500;
          font-size: 4rem;
          margin-bottom: 0.5rem;
          margin-top: 0rem;
      }
      h2 {
          font-weight: 300;
          margin-top: 1rem;
          font-size: 2rem;
      }
      h1, h2 {
        color: $nord4;
      }
    }
  }
</style>