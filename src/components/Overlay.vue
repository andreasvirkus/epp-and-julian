<template>
  <div :class="['transition-overlay',
    { visible: animate || reverse },
    { opening: animate || reverse },
    { closing: reverse }]"
    ref="overlay">
    <div class="bg-layer"></div>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  data () {
    return {
      classList: ['closing', 'opening', 'visible']
    }
  },
  props: ['animate', 'reverse'],
  watch: {
    reverse () {
      console.log('$refs', this.$refs)

      setTimeout(() => {
        this.$refs.overlay.classList.remove(...this.classList)
        this.$emit('reversed')
      }, 700)
    }
  }
}
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }

  .transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
  }
  .transition-overlay .bg-layer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-2%);
    height: 100%;
    /* our sprite is composed of 25 frames */
    width: 2500%;
    background: url(/static/img/ink.png) no-repeat 0 0;
    background-size: 100% 100%;
    filter: hue-rotate(300deg) saturate(130%) contrast(130%);
  }

  .transition-overlay.visible {
    opacity: 1;
    visibility: visible;
  }
  .transition-overlay.opening .bg-layer {
    animation: overlay-sequence 0.8s steps(24);
    animation-fill-mode: forwards;
  }
  .transition-overlay.closing .bg-layer {
    animation: overlay-reverse-sequence 0.8s steps(24);
    animation-fill-mode: forwards;
  }

  @keyframes overlay-sequence {
    0% {
      transform: translateY(-50%) translateX(-2%);
    }
    100% {
      transform: translateY(-50%) translateX(-98%);
    }
  }

  @keyframes overlay-reverse-sequence {
    0% {
      transform: translateY(-50%) translateX(-98%);
    }
    100% {
      transform: translateY(-50%) translateX(-2%);
    }
  }
</style>
