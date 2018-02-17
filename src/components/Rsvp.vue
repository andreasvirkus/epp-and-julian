<template>
  <section id="rsvp">
    <h2>RSVP</h2>

    <h3>Please let us know before the <strong>31st of March</strong> if you wish to join us for the celebration of our marriage.</h3>

    <p>Talk or write to Epp:
      <nav-link to="mailto:epp.olekors@gmail.com">epp.olekors@gmail.com</nav-link>,
      <nav-link to="tel:+3725171469">+372 5171469</nav-link>
    </p>
    <p>Talk or write to Julian:
      <nav-link to="mailto:julian.linke@web.de">julian.linke@web.de</nav-link>,
      <nav-link to="tel:+37253940512">+372 53940512</nav-link>
    </p>

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
  import NavLink from './NavLink'
  import stamp from '../assets/img/ej_stamp.png'

  // TODO: Enter password before displaying RSVP form
  export default {
    name: 'rsvp',
    components: { NavLink },
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
