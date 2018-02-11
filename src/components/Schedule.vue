<template>
  <section>
    <h2>Schedule</h2>
    
    <ul>
      <li>
        <span class="schedule-item__time">15:30</span>
        <span class="schedule-item__content">
          Gathering at Laikmaa Pavillion
        </span>
      </li>
      <li>
        <span class="schedule-item__time">16:00</span>
        <span class="schedule-item__content">
          Ceremony
        </span>
      </li>
      <li>
        <span class="schedule-item__time">16:45</span>
        <span class="schedule-item__content">
          Wedding Train to Haapsalu Kuursaal
        </span>
      </li>
      <li>
        <span class="schedule-item__time">17:30</span>
        <span class="schedule-item__content">
          Photographing Everybody!
        </span>
      </li>
      <li>
        <span class="schedule-item__time">18:00</span>
        <span class="schedule-item__content">
          Dinner & Speeches
        </span>
      </li>
      <li>
        <span class="schedule-item__time">19:00</span>
        <span class="schedule-item__content">
          Proper Estonian-German Wedding Party
        </span>
      </li>
      <li>
        <span class="schedule-item__time">22:00</span>
        <span class="schedule-item__content">
          Final Ceremony & Cake
        </span>
      </li>
      <li>
        <span class="schedule-item__time">22:45</span>
        <span class="schedule-item__content">
          Party Continues!
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'schedule'
  }
</script>

<style scoped>
  section {
    max-width: 30em;
  }
  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
  }

  /* li:nth-child(even) {
    flex-direction: row-reverse;
  } */
  li + li {
    margin-top: 1em;
  }

  li span:first-child {
    color: #cde3ed;
    font-weight: 700;
    padding: 0 1em;
  }

  li span:last-child {
    text-align: left;
  }
</style>
