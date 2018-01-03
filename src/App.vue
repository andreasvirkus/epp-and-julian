<template>
  <div id="app" class="app-container">
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
  }
</script>

<style>
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
</style>
