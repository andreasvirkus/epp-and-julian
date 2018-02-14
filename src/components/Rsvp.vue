<template>
  <section id="rsvp">
    <h2>RSVP</h2>

    <h3>Please let us know before the <strong>31st of March</strong> if you wish to join us for the celebration of our marriage.</h3>

    <p>Talk or write to Epp:
      <a href="mailto:epp.olekors@gmail.com">
        epp.olekors@gmail.com
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a>,
      <a href="tel:+3725171469">
        +372 5171469
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a></p>
    <p>Talk or write to Julian:
      <a href="mailto:julian.linke@web.de">
        julian.linke@web.de
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a>,
      <a href="tel:+37253940512">
        +372 53940512
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a></p>

    <!-- <div v-if="submitted">
      Thanks! We'll see you then!
    </div>

    <form v-else name="submitRsvp" action="/?rsvp" netlify>
      <label>Name <input type="text"></label>
      <label>Accompany <input type="text"></label>
      <label>Culinary preference <input type="text"></label>
      <label>Name <input type="text"></label>
    </form> -->
  </section>
</template>

<script>
  import stamp from '../assets/img/ej_stamp.png'

  // TODO: Enter password before displaying RSVP form
  export default {
    name: 'rsvp',
    data () {
      return { stamp }
    },
    computed: {
      submitted () {
        return /[?&]rsvp/.test(location.search)
      }
    }
  }
</script>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: flex;
  }

  label + label {
    margin-top: 1em;
  }

  input {
    flex: 1;
    border: none;
    border-bottom: 1px solid #fefefe;
    background: none;
    color: #fff;
    margin-left: 2em;
  }
  input:focus {
    outline: none;
  }

  strong {
    color: #cde3ed;
  }
</style>
