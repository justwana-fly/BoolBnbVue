<template>

  <!-- ********************** button to open the offcanvas *********************************** -->
  <div id="btn-canvas">
    <button id="btn-show" class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>
  </div>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <!--****************************** here we have the logo and close button *************************** -->
    <div class="offcanvas-header">

      <div id="logo">
        <h1>LOGO</h1>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

    </div>

    <div class="offcanvas-body">
      <!-- ******************************* buttons register and login ********************************-->
      <div class="text-center">
        <a class="btn btn-outline-dark" href="#"> <i class="fa-regular fa-id-card"></i> Register </a> or <a
          class="btn btn-outline-dark" href="#"><i class="fa-solid fa-unlock-keyhole"></i> Login</a>
      </div>
      <!-- ****************************** filters section ****************************** -->
      <div id="pageFilter" class="container">

      </div>
      <!--inizio mappa e fine del form -->

      <div id="map-container">
        <Map />
      </div>
    </div>
  </div>


</template>

<script>
  import { store } from '../store';
  import axios from 'axios';
  import Map from '../components/Map.vue';
  export default {
    name: 'CanvasComponent',
    components: {
      Map
    },

    data() {
      return {
        store,
        
        

      }
    },
    methods: {
      
      

      
    },

    mounted() {
     
     
    },

  }
</script>


<style lang="scss" scoped>
  .offcanvas {
    width: 50%;
    z-index: 4800;
    transition: 0.8s ease-in-out;


  }

  #btn-canvas {
    position: fixed;
    top: 2.3%;
    right: 10px;
    z-index: 1000;
  }


  @media screen and (max-width: 576px) {
    .offcanvas {
      width: 100%;
      z-index: 4800;


    }
  }

  #servcheck {
    border: none;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  }


  #services,
  #filter,
  .filter-distance {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  #services {
    width: 35%;
  }

  #filter {
    width: 65%;
  }

  .filter-distance {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
  }


  #map-container {
    width: 100%;
    height: 480px;
    border: 1px solid black;
    margin-top: 20px;

    overflow: hidden;
  }
</style>