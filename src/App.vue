<template>
  <div id="app" :class="['app-container', { overlay: !contentVisibility }]">
    <landing @trigger="triggerOverlay" />

    <site-content :visible="contentVisibility" />

    <overlay :animate="animate" />
  </div>
</template>

<script>
  import Landing from './components/Landing'
  import Content from './components/Content'
  import Overlay from './components/Overlay'

  export default {
    name: 'app',
    data () {
      return {
        animate: false,
        contentVisibility: false
      }
    },
    components: {
      Landing,
      'site-content': Content,
      Overlay
    },
    methods: {
      triggerOverlay () {
        this.animate = true
        this.contentVisibility = true
      }
    }
    // mounted () {
    //   window.onhashchange = () => {
    //     console.log('back event')
    //     if (this.contentVisibility && this.animate) {
    //       this.animate = false
    //       this.contentVisibility = false
    //     }
    //   }
    // }
  }
</script>

<style>
  /* html {
    margin-left: calc(100vw - 100%);
  } */

  @font-face {
    font-family: 'Nightingale';
    src: url('/static/fonts/nightingale.ttf');
    src: url('/static/fonts/nightingale.ttf') format('truetype'),
      url('/static/fonts/nightingale.otf') format('opentype');
  }

  body {
    margin: 0;
  }

  .app-container {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .app-container.overlay {
    height: 100vh;
    overflow: hidden;
  }
</style>
