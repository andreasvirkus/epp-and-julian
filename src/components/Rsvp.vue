<template>
  <section>
    <h2>RSVP</h2>

    <div v-if="submitted">
      Thanks! We'll see you then!
    </div>

    <form v-else name="submitRsvp" action="/?rsvp" netlify>
      <label>Name <input type="text"></label>
      <label>Accompany <input type="text"></label>
      <label>Culinary preference <input type="text"></label>
      <label>Name <input type="text"></label>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'rsvp',
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
</style>
