<template>
  <div :class="['content-container', { visible }]">
    <section class="content">
      <h1>To our wedding</h1>

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
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    margin-bottom: 5em;
    opacity: 0;
    visibility: hidden;
    background: #402f44 url(/static/img/content-bg.jpg) no-repeat center center;
    background-size: cover;
    color: #fff;
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
    font-family: 'Slabo 27px', serif;
    text-align: center;
  }
  .content-container h1,
  .content-container h2,
  .content-container h3 {
    font-family: 'IM Fell Double Pica', serif;
    /* font-family: 'Slabo 27px', serif; */
    text-align: center;
  }
  .content-container h1 {
    font-size: 4rem;
  }
  .content-container h2 {
    font-size: 3rem;
  }
  .content-container h3 {
    font-size: 2.5rem;
  }
  .content-container h1::after,
  .content-container h2::after,
  .content-container h3::after {
    content: '';
    display: block;
    width: 130px;
    height: 18px;
    background: url(/static/img/separator.svg) no-repeat center center;
    margin: .2em auto 0;
  }

  .content-container h2::after,
  .content-container h3::after {
    width: 95px;
    margin-top: 0;
  }

  .content-container.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.7s 0.5s, visibility 0s;
  }
  .content-container section {
    max-width: 40em;
    width: 100%;
    margin: 1em auto;
  }

  p {
    font-size: 1.2em;
    line-height: 1.4em;
    letter-spacing: 1px;
    color: #ecdfdf;
  }
</style>
