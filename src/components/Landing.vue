<template>
  <dialog class="invite-container">
    <p>You are cordially invited...</p>

    <a href="#invite" class="modal-trigger" @click="$emit('trigger')">&gt;&gt;</a>
  </dialog>
</template>

<style scoped>
  p, a {
    font-size: 45px;
    text-decoration: none;
    color: #fff;
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
