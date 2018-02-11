<template>
  <section>
    <h2></h2>
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1M75KTyBh-5mRZC_pWPFLN3W673rlUz6j&hl=et&format=png&maptype=roadmap&size=480x360"
      frameborder="0"
      style="border:0"
      width="640"
      height="260"></iframe>
 </section>
</template>

<script>
  export default {
    name: 'area-map'
  }
</script>

<style>
  hr {
    margin: 50px 0;
    overflow: visible;
    padding: 0;
    border: none;
    color: #fff;
    text-align: center;
  }

  hr::after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
  }
</style>
