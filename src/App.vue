<template>
  <div id="app" class="app-container">
    <landing />

    <content />

    <overlay />
  </div>
</template>

<script>
  import Landing from './components/Landing'
  import Content from './components/Content'
  import Overlay from './components/Overlay'

  export default {
    name: 'app',
    components: {
      Landing,
      Content,
      Overlay
    }
  }
</script>

<style>
body {
  margin: 0;
}

.app-container {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  font-family: 'Pinyon Script', cursive;
  background-color: #223;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
