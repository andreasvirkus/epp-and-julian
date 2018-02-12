<template>
  <section>
    <h2></h2>
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1M75KTyBh-5mRZC_pWPFLN3W673rlUz6j&hl=en&format=png&maptype=roadmap&size=480x360"
      frameborder="0"
      style="border:0"
      width="100%"
      height="260"></iframe>
 </section>
</template>

<script>
  export default {
    name: 'area-map'
  }
</script>
<script>
  // function initMap() {

  //   // Create a new StyledMapType object, passing it an array of styles,
  //   // and the name to be displayed on the map type control.
  //   var styledMapType = new google.maps.StyledMapType(
  //       ,
  //     {name: 'Styled Map'}
  //   );

  //   // Create a map object, and include the MapTypeId to add
  //   // to the map type control.
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 55.647, lng: 37.581},
  //     zoom: 11,
  //     mapTypeControlOptions: {
  //       mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
  //               'styled_map']
  //     }
  //   });

  //   //Associate the styled map with the MapTypeId and set it to display.
  //   map.mapTypes.set('styled_map', styledMapType);
  //   map.setMapTypeId('styled_map');
  // }
</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

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
