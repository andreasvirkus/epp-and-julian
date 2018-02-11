<template>
  <div id="app" :class="['app-container', { overlay: !contentVisibility }]">
    <landing @trigger="triggerOverlay" />

    <site-content :visible="contentVisibility" />

    <overlay :animate="animate" :reverse="reverse" @reversed="reverse = false; animate = false; contentVisibility = false" />
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
        frames: 25,
        resize: false,
        reverse: false,
        animate: false,
        frameProportion: 1.78, // PNG frame aspect ratio
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

        // transitionLayer.addClass('visible opening');
        setTimeout(() => {
          this.contentVisibility = true
        }, 400)

        window.onhashchange = () => {
          this.contentVisibility && this.animate && !window.location.hash && this.reverseOverlay()
        }
      },
      reverseOverlay () {
        this.contentVisibility = false
        this.reverse = true
      },
      init () {
        // set transitionBackground dimensions
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        let unitHeight, unitWidth

        if (windowWidth / windowHeight > this.frameProportion) {
          unitWidth = windowWidth
          unitHeight = unitWidth / this.frameProportion
        } else {
          unitHeight = windowHeight * 1.2
          unitWidth = unitHeight * this.frameProportion
        }

        // transitionBackground.css({
        //   'width': unitWidth * this.frames + 'px',
        //   'height': unitHeight + 'px'
        // })

        this.resize = false
      }
    },
    mounted () {
      this.init()

      window.addEventListener('resize', () => {
        if (!this.resize) {
          this.resize = true
          !window.requestAnimationFrame ? setTimeout(this.init, 300) : window.requestAnimationFrame(this.init)
        }
      })
    }
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
