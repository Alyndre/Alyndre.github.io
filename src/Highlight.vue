<template>
  <span v-bind:class="clas" v-on:mouseover="color">{{ text }}</span>
</template>

<script>
export default {
  name: 'Highlight',
  props: ['text'],
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
</style>