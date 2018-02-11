<template>
  <section>
    <h2>RSVP</h2>

    <h3>Please let us know before the <strong>31st of March</strong> if you wish to join us for the celebration of our marriage.</h3>

    <p>Talk or write to Epp:
      <a href="mailto:epp.olekors@gmail.com">
        epp.olekors@gmail.com
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a>,
      <a href="tel:+3725171469">
        +372 5171469
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a></p>
    <p>Talk or write to Julian:
      <a href="mailto:julian.linke@web.de">
        julian.linke@web.de
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a>,
      <a href="tel:+37253940512">
        +372 53940512
        <svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg>
      </a></p>

    <!-- <div v-if="submitted">
      Thanks! We'll see you then!
    </div>

    <form v-else name="submitRsvp" action="/?rsvp" netlify>
      <label>Name <input type="text"></label>
      <label>Accompany <input type="text"></label>
      <label>Culinary preference <input type="text"></label>
      <label>Name <input type="text"></label>
    </form> -->
  </section>

  <!-- <section id="invitation" class="panel inview" name="The Invitation" style="height: 800px;">
    <div class="b" style="height: 800px;"></div>
    <div class="c" style="margin-top: 208px;">
      <div class="caption">
        <p>Join them in celebrating the life they’ve built together and all the happiness that awaits.</p>
        <p class="pass-inst">Guests, please enter your password to RSVP.</p>
      </div>

      <form id="password" action="password.php" method="get" _lpchecked="1">
        <input type="text" id="field" name="pass" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmJJREFUWAntV7uKIkEUvbYGM4KID3wEIgjKRLLpKGLgFwiCfslGhkb7IbLgAzE1GhMxWxRRBEEwmEgDERWfW6fXuttq60a2wU6B1qlzb9U5fatsKROJVigUArvd7oeAyePx6Af3qGYymT7F2h8Wi+V7Pp+fmE7iv4Sw81GieusKIzNh4puCJzdaHIagCW1F4KSeQ4O4pPLoPb/3INBGBZ7avgz8fxWIxWIUCoX43Blegbe3NwoGg88zwMoncFUB8Yokj8dDdrv9MpfHVquV/H4/iVcpc1qgKAp5vV6y2WxaWhefreB0OimXy6kGkD0YDKhSqdB2u+XJqVSK4vE4QWS5XKrx0WjEcZ/PR9lslhwOh8p1Oh2q1Wp0OBw4RwvOKpBOp1kcSdivZPLvmxrjRCKhiiOOSmQyGXp5ecFQbRhLcRDRaJTe39//BHW+2cDr6ysFAoGrlEgkwpwWS1I7z+VykdvtliHuw+Ew40vABvb7Pf6hLuMk/rGY02ImBZC8dqv04lpOYjaw2WzUPZcB2WMPZet2u1cmZ7MZTSYTNWU+n9N4PJbp3GvXYPIE2ADG9Xqder2e+kTr9ZqazSa1222eA6FqtUoQwqHCuFgscgWQWC6XaTgcEiqKQ9poNOiegbNfwWq1olKppB6yW6cWVcDHbDarIuzuBBaLhWrqVvwy/6wCMnhLXMbR4wnvtX/F5VxdAzJoRH+2BUYItlotmk6nLGW4gX6/z+IAT9+CLwPPr8DprnZ2MIwaQBsV+DBKUEfnQ8EtFRdFneBDKWhCW8EVGbdUQfxESR6qKhaHBrSgCe3fbLTpPlS70M0AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
        <input type="submit" value="submit" id="s">
      </form>

      <p class="pass-inst" id="donate">Thanks to our generous <a href="/about" target="_blank">friends</a> for the gift of their artwork. In lieu of a traditional registry, we’ve set up a <a href="http://mycharitywater.org/jessandruss" target="_blank">donation registry</a> with charity:water.</p>

      <div id="invite-ornament">
        <img :src="stamp">
      </div>
    </div>

    <div class="d" style="height: 250px; top: 551px;"></div>

  </section> -->
</template>

<script>
  import stamp from '../assets/img/ej_stamp.png'

  // TODO: Enter password before displaying RSVP form
  export default {
    name: 'rsvp',
    data () {
      return { stamp }
    },
    computed: {
      submitted () {
        return /[?&]rsvp/.test(location.search)
      }
    }
  }
</script>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: flex;
  }

  label + label {
    margin-top: 1em;
  }

  input {
    flex: 1;
    border: none;
    border-bottom: 1px solid #fefefe;
    background: none;
    color: #fff;
    margin-left: 2em;
  }
  input:focus {
    outline: none;
  }

  strong {
    color: #cde3ed;
  }
</style>
