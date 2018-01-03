<template>
  <div :class="['transition-overlay', { visible: animate }, { opening: animate }]">
    <div class="bg-layer"></div>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  props: {
    animate: Boolean
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
  }

  .transition-overlay.visible {
    opacity: 1;
    visibility: visible;
  }
  .transition-overlay.opening .bg-layer {
    animation: overlay-sequence 0.8s steps(24);
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
</style>
