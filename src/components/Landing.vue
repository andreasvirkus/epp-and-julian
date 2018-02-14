<template>
  <dialog class="invite-container">
    <img :src="stamp" alt="Our wedding stamp">
    <p>You are cordially invited...</p>

    <a href="#invite" class="modal-trigger" @click="$emit('trigger')">
      <img :src="arrow" alt="To the invite &gt; &gt;" class="content-trigger">
    </a>
  </dialog>
</template>

<script>
  import stamp from '../assets/img/ej_stamp.png'
  import arrow from '../assets/img/ejw-arrow.png'

  export default {
    name: 'landing',
    data () {
      return { stamp, arrow }
    }
  }
</script>

<style scoped>
  p, a {
    font-size: 1.2em;
    text-decoration: none;
    color: #fff;
    font-family: 'Libre Baskerville', serif;
    width: 90%;
    max-width: 20em;
    margin: 1em 0;
  }

  a {
    display: block;
    transition: transform ease-out 0.2s;
    font-size: 45px;
    font-family: 'Nightingale', serif;
    margin-top: 0;
  }

  a:hover {
    transform: translateX(15px);
  }

  dialog > img {
    width: 125px;
    transform: rotate(27deg);
  }

  img.content-trigger {
    width: 200px;
  }

  dialog {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
    font-family: 'Pinyon Script', cursive;
    background-color: #15203B;
    background: #15203B url(/static/img/paper-bg.jpg) center no-repeat;
    background-size: cover;
    flex-direction: column;
    padding: 0;
    border: none;
  }

  @media (max-width: 35em) {
    p, a {
      margin: 0;
      padding: 0;
      font-size: 30px;
      line-height: 70px;
    }
  }
</style>
