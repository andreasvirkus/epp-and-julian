  <template>
    <nav>
      <nav-link to="#rsvp">RSVP</nav-link>
      <nav-link to="#accommodation">Accommodation</nav-link>
      <nav-link to="#about">About</nav-link>
      <nav-link to="#schedule">Schedule</nav-link>
      <nav-link to="#traditions">Traditions</nav-link>
      <nav-link to="#map">Map</nav-link>
      <a href="#rsvp">RSVP<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
      <a href="#accommodation">Accommodation<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
      <a href="#about">About<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
      <a href="#schedule">Schedule<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
      <a href="#traditions">Traditions<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
      <a href="#map">Map<svg class="link-svgline"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_line"></use></svg></a>
    </nav>
</template>

<style>
  nav {
    padding: 1em 10px;
    display: flex;
    max-width: 40em;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media (max-width: 35em) {
    nav {
     font-size: 0.7em;
    }
  }
</style>