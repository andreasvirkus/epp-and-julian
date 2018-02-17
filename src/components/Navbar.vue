<template>
  <nav>
    <nav-link to="#rsvp">RSVP</nav-link>
    <nav-link to="#accommodation">Accommodation</nav-link>
    <nav-link to="#about">About</nav-link>
    <nav-link to="#schedule">Schedule</nav-link>
    <nav-link to="#traditions">Traditions</nav-link>
    <nav-link to="#map">Map</nav-link>
  </nav>
</template>

<script>
  import NavLink from './NavLink'

  export default {
    name: 'navbar',
    components: { NavLink }
  }
</script>

<style>
  nav {
    padding: 1em 10px;
    display: flex;
    max-width: 40em;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media (max-width: 35em) {
    nav {
     font-size: 0.7em;
    }
  }
</style>