<template>
  <main class="invite-container">
    <div class="center">
      <h1>You are cordially invited...</h1>

      <a href="#0" class="modal-trigger">→</a>
    </div>
  </main> <!-- .cd-main-content -->
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
</style>
