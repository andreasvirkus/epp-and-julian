<template>
  <div :class="['content-container', { visible }]">
    <section class="content">
      <h1>Some introductory content</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ad modi repellendus, optio eveniet eligendi molestiae?
        Fugiat, temporibus!
      </p>
    </section>

    <our-story />
    <accommodation />
    <about-haapsalu />
    <rsvp />
    <schedule />
  </div>
</template>

<script>
  import OurStory from './OurStory'
  import Accommodation from './Accommodation'
  import AboutHaapsalu from './AboutHaapsalu'
  import Rsvp from './Rsvp'
  import Schedule from './Schedule'

  export default {
    name: 'site-content',
    components: {
      OurStory,
      Accommodation,
      AboutHaapsalu,
      Rsvp,
      Schedule
    },
    props: {
      visible: Boolean
    }
  }
</script>

<style>
  .content-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    background: #402f44 url(/static/img/content-bg.jpg) no-repeat center center;
    background-size: cover;
    color: #fff;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .content-container.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.7s 0.6s, visibility 0s;
  }
  .content-container section {
    max-width: 40em;
    width: 100%;
    margin: 1em auto;
  }
</style>
