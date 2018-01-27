<template>
  <dialog class="invite-container">
    <p>You are cordially invited...</p>

    <a href="#invite" class="modal-trigger" @click="$emit('trigger')">&gt;&gt;</a>
  </dialog>
</template>

<script>
  export default {
    name: 'landing'
  }
</script>

<style scoped>
  p, a {
    font-size: 3rem;
    text-decoration: none;
    color: #fff;
    /* font-family: 'Nightingale', serif; */
  }

  a {
    display: block;
    transition: transform ease-out 0.2s;
    font-family: 'Nightingale';
  }

  a:hover {
    transform: translateX(15px);
  }

  dialog {
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
    padding: 0;
    border: none;
  }
</style>
