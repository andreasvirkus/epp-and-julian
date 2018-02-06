<template>
  <main :class="['content-container', { visible }]">
    <div class="scroll-container">
      <section class="content">
        <h1>To our wedding!</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad modi repellendus, optio eveniet eligendi molestiae?
          Fugiat, temporibus!
        </p>
      </section>

      <our-story />
      <accommodation />
      <about-haapsalu />
      <schedule />
      <rsvp />
    </div>
  </main>
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
    color: #fff;
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
  h1,
  h2,
  h3 {
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
    font-size: 2.5rem;
  }
  h1::after,
  h2::after,
  h3::after {
    content: '';
    display: block;
    width: 130px;
    height: 18px;
    background: url(/static/img/separator.svg) no-repeat center center;
    margin: 0 auto;
  }

  .content-container.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.7s 0.5s, visibility 0s;
  }
  section {
    max-width: 40em;
    width: 100%;
    margin: 2em auto;
  }

  section + section {
    margin-top: 15em;
  }
  section:last-child {
    margin-bottom: 8em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.8em;
    letter-spacing: 1px;
    color: #ecdfdf;
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
