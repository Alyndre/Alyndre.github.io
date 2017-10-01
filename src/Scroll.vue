<template>
  <span class="scroll" v-bind:class="[direction, c]"></span>
</template>

<script>
export default {
  props: ['setDir', 'color'],
  name: 'scroll',
  data() {
    return {
      direction: this.setDir,
      c: this.color
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
  
    span {
      position: absolute;
      display: block;
      width: 30px;
      height: 50px;
      margin-left: -15px;
      border-radius: 50px;
      box-sizing: border-box;
      &::before {
        position: absolute;
        top: 10px;
        left: 50%;
        content: '';
        width: 6px;
        height: 6px;
        margin-left: -3px;
        border-radius: 100%;
        box-sizing: border-box;
      }
      &.dark {
        border: 2px solid $nord1;
        &::before {
          background-color: $nord1;
        }
      }
      &.light {
        border: 2px solid $nord4;
        &::before {
          background-color: $nord4;
        }
      }
      &.down {
        &::before {
          -webkit-animation: scrolldown 2s infinite;
          animation: scrolldown 2s infinite;
        }
      }
      &.up {
        &::before {
          -webkit-animation: scrollup 2s infinite;
          animation: scrollup 2s infinite;
        }
      }
    }
    @keyframes scrolldown {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      80% {
        transform: translate(0, 20px);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes scrollup {
      100% {
        transform: translate(0, 0);
        opacity: 0;
      }
      80% {
        opacity: 1;
      }
      40% {
        transform: translate(0, 20px);
        opacity: 0;
      }
      0% {
        opacity: 0;
      }
    }
</style>