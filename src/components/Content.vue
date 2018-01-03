<template>
  <div class="content-container">
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
    name: 'content',
    components: {
      OurStory,
      Accommodation,
      AboutHaapsalu,
      Rsvp,
      Schedule
    }
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
  }
  .modal.visible {
    opacity: 1;
    visibility: visible;
  }
</style>
