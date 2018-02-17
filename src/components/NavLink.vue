<template>
  <a :href="to" :title="title" class="content-link">
    <slot></slot>
    <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
  </a>
</template>

<script>
  export default {
    name: 'nav-link',
    props: ['to', 'title']
  }
</script>

<style>
  a.content-link {
    color: #cde3ed;
    outline: 0;
    text-decoration: none;
    position: relative;
    display: inline-block;
    line-height: 2.2;
    font-weight: 700;
    padding-bottom: 2px;
  }
  a.content-link svg.link-svgline {
    position: absolute;
    top: 100%;
    left: 0;
    overflow: hidden;
    margin: 0;
    width: 100%;
    height: 20px;
    transition: stroke-dashoffset 0.3s ease-in-out;
    transform: translateY(-90%);
    fill: none;
    stroke: #68acc8;
    stroke-width: 5;
    stroke-dasharray: 400px;
    stroke-dashoffset: 400px;
  }
  a.content-link:hover svg.link-svgline {
    stroke-dashoffset: 0;
  }
</style>