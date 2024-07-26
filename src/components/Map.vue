<template>
  <div>

    <div ref="mapRef" id="map"></div>
  </div>
</template>

<script>
  
  import { onMounted, reactive, ref } from 'vue';
  import { store } from '../store';

  export default {
    name: 'Map',
    data() {
      return {
        store
      }
    },

    setup() {
      const mapRef = ref(null)
      const state = reactive({
        locations: [
          { lng: 15.29470985780, lat: 37.85263650717430 },

        ]
      })
      const insertLocs = (map) => {
        let tomtom = window.tt;

       store.pippo.forEach(function (apartment) {
          let marker = new tomtom.Marker().setLngLat(apartment.longitude, apartment.latitude).addTo(map)
          const popup = new tt.Popup({ anchor: 'top' }).setText('UBABank')
          marker.setPopup(popup).togglePopup()
        })
      }

      onMounted(() => {
        const tt = window.tt;
        const focus = { lat: 37.31052000000000, lng: 13.64791000000000 }

       const map = tt.map({
          key: 'KXIIb5tNzA5VmKDh5NJAeNOOAI2ZfOoN',
          container: mapRef.value,
          center: focus,
          zoom: 6
        })

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        window.map = map

        insertLocs(map)
      })

      return {
        mapRef
      }

    },
    creatted() {
      setup();
    }

  };
</script>

<style scoped>
  #map {
    width: 900px;
    height: 400px;
  }
</style>