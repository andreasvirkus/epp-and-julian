<template>
  <main :class="['content-container', { visible }]">
    <div class="scroll-container" ref="scroll">
      <div class="svg-container" id="top">
        <svg viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
          <path id="svg_line" d="m 1.986,8.91 c 55.429038,4.081 111.58111,5.822 167.11781,2.867 22.70911,-1.208 45.39828,-0.601 68.126,-0.778 28.38173,-0.223 56.76079,-1.024 85.13721,-1.33 24.17379,-0.261 48.42731,0.571 72.58115,0.571"></path>
        </svg>
      </div>

      <navbar />

      <section class="content">
        <h1>To our wedding!</h1>

        <h3 class="center">
          Below you'll find various information about the location, schedule and how to RSVP.
          See you there!
        </h3>
      </section>

      <our-story />
      <rsvp />
      <accommodation />
      <area-map />
      <about-haapsalu />
      <schedule />
      <traditions />
    </div>

    <button @click.prevent="scrollTop" class="back-to-top">
      <img :src="arrow">
    </button>
  </main>
</template>

<script>
  import Rsvp from './Rsvp'
  import Schedule from './Schedule'
  import OurStory from './OurStory'
  import Traditions from './Traditions'
  import Accommodation from './Accommodation'
  import AboutHaapsalu from './AboutHaapsalu'
  import AreaMap from './AreaMap'
  import Navbar from './Navbar'
  import arrow from '../assets/svg/to-top.svg'

  export default {
    name: 'site-content',
    components: {
      OurStory,
      Accommodation,
      AboutHaapsalu,
      Rsvp,
      Schedule,
      Traditions,
      AreaMap,
      Navbar
    },
    props: {
      visible: Boolean
    },
    data () {
      return { arrow }
    },
    methods: {
      scrollTop () {
        this.$refs.scroll.scrollTo({
          'behavior': 'smooth',
          'left': 0,
          'top': document.body.offsetTop
        })
      }
    }
  }
</script>

<style>
  main {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    background: #402f44 url(/static/img/content-bg.blue.jpg) no-repeat center center;
    background-size: cover;
    color: #ecdfdf;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
    height: 100vh;
    overflow: hidden;
  }

  .scroll-container {
    height: 100vh;
    margin-bottom: 5em;
    overflow-y: scroll;
  }
  .svg-container {
    display: none;
  }
  .back-to-top {
    display: block;
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 60px;
    height: 60px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .back-to-top:focus {
    outline: none;
  }
  h1,
  h2 {
    font-family: 'Nightingale', serif;
    text-align: center;
    line-height: 3em;
  }
  h1 {
    font-size: 4rem;
    line-height: 2em;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  h3 {
    font-size: 1.4em;
    line-height: 1.6em;
  }

  .content-container.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.7s 0.5s, visibility 0s;
  }
  section {
    max-width: 50em;
    width: 90%;
    margin: 2em auto;
  }

  section + section {
    margin-top: 5em;
  }
  section:last-child {
    margin-bottom: 8em;
  }

  p {
    font-size: 1em;
    line-height: 1.8em;
    letter-spacing: 1px;
  }
  main h3,
  main p {
    text-align: left;
  }

  main .center {
    text-align: center;
  }

  @media (max-width: 35em) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
    }
  }
</style>
