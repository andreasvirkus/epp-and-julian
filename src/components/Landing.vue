<template>
  <dialog class="invite-container">
    <img :src="stamp">

    <p>You are cordially invited...</p>

    <a href="#invite" class="modal-trigger" @click="$emit('trigger')">&gt;&gt;</a>
  </dialog>
</template>

<script>
  import stamp from '../assets/img/ej_stamp.png'

  export default {
    name: 'landing',
    data () {
      return { stamp }
    }
  }
</script>

<style scoped>
  p, a {
    font-size: 45px;
    text-decoration: none;
    color: #35495E;
    font-family: 'Nightingale', serif;
    width: 90%;
    max-width: 20em;
    line-height: 101px;
    margin: 1em 0 0;
  }

  a {
    display: block;
    transition: transform ease-out 0.2s;
    font-family: 'Nightingale';
    padding: 0 2em;
    margin-top: 0;
  }

  a:hover {
    transform: translateX(15px);
  }

  img {
    width: 125px;
    transform: rotate(27deg);
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
    background-image: url(/static/img/paper-bg.jpg);
    flex-direction: column;
    padding: 0;
    border: none;
  }
</style>
