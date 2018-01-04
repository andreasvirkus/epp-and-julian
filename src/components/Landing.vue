<template>
  <main class="invite-container">
    <h1>You are cordially invited...</h1>

    <a href="#" class="modal-trigger" @click="$emit('trigger')">→</a>
  </main>
</template>

<script>
  export default {
    name: 'landing'
  }
</script>

<style scoped>
  h1, a {
    font-size: 3rem;
    text-decoration: none;
    color: #fff;
  }

  a {
    display: block;
    transition: transform ease-out 0.2s;
  }

  a:hover {
    transform: translateX(15px);
  }

  main {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    font-family: 'Pinyon Script', cursive;
    background-color: #223;
    flex-direction: column;
  }
</style>
