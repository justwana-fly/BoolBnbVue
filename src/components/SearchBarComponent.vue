<template>
  <div id="search-bar" class="absolute">
    <div class="d-flex">
      <input id="searchInput" type="text" class="form-control" placeholder="Search" v-model="store.query"
        @keyup.enter="handleSearch" @input="handleInput">
      <input id="searchInput-2" type="text" class="form-control" placeholder="Search" v-model="store.query"
        @keyup.enter="handleSearch" @input="handleInput">
      <div class="input-group-prepend">

        <router-link id="btnSearch" :to="resultsRoute" class="btn btn-dark ms-2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </router-link>
      </div>
    </div>
    <div id="resultsContainer" v-if="results.length > 0">
      <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)">
        {{ result.address.freeformAddress }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { store } from '@/store.js';

  export default {
    name: 'SearchBarComponent',
    data() {
      return {
        store,
        results: [],
        apiKey: '0jBqWMEnJXQa5y2e2pJLK0gXbe7CTMvK',
        apiBaseUrlTomTom: 'https://api.tomtom.com/search/2/search/',
      };
    },
    methods: {

      handleScroll() {
        const scrollPosition = window.pageYOffset;
        const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca
        const mediaQuery = window.matchMedia("(max-width: 576px)"); // Definisci la media query

        if (searchBar) {
          if (scrollPosition > 0) {

            searchBar.className = 'fixed';
          } else {

            searchBar.className = 'absolute';
          };

          if (scrollPosition > 100) {
            searchBar.style.width = '400px';

          } else {
            searchBar.style.width = '600px';

          }

          if (mediaQuery.matches) {
            searchBar.style.width = '50%';

          }

        }
      },

      async fetchCoordinates(query) {
        const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;
        try {
          const response = await axios.get(url);
          if (!response.data.results) {
            throw new Error('Nessun risultato trovato.');
          }
          const fixedPoint = response.data.results[0].position;
          console.log('fetchCoordinates - fixedPoint:', fixedPoint); // Log
          return fixedPoint;
        } catch (error) {
          console.error('Errore durante la ricerca degli indirizzi:', error.message);
          return null;
        }
      },
      async fetchSuggestions(query) {
        const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;
        try {
          const response = await axios.get(url);
          if (!response.data.results) {
            throw new Error('Nessun risultato trovato.');
          }
          console.log('fetchSuggestions - results:', response.data.results); // Log
          return response.data.results;
        } catch (error) {
          console.error('Errore durante la ricerca dei suggerimenti:', error.message);
          return [];
        }
      },
      async fetchAddresses(query) {
        const fixedPoint = await this.fetchCoordinates(query);
        if (fixedPoint) {
          const pippo = await store.methods.fetchApartments(fixedPoint.lon, fixedPoint.lat, store.radius);
          console.log('fetchAddresses - pippo:', pippo); // Log
          this.$emit('updateResults', pippo);
          store.pippo = pippo;
        }
      },
      async handleSearch() {
        if (store.query) {
          await this.fetchAddresses(store.query);
        }
      },
      async handleInput() {
        const query = store.query.trim();
        if (query.length < 5) {
          this.results = [];
          return;
        }
        try {
          const results = await this.fetchSuggestions(query);
          this.results = results;
        } catch (error) {
          console.error('Errore durante la gestione dell\'input:', error);
        }
      },
      selectAddress(result) {
        store.query = result.address.freeformAddress;
        this.results = [];
        this.handleSearch();
      },
    },

    mounted() {
      window.addEventListener('scroll', this.handleScroll);//javascript per l'effetto scroll
    },

    computed: {
      resultsRoute() {
        return {
          name: 'results',
          query: {
            address: store.query,
          },
        };
      },
    },
  };
</script>





<style lang="scss" scoped>

  #search-bar {
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    transition: width 0.7s;
    //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    width: 600px;
    z-index: 3000;

    #searchInput {
      padding: 10px;
      border-radius: 20px;
    }

    #searchInput-2 {
      display: none;
    }

    #btnSearch {
      width: 50px;
      aspect-ratio: 1 / 1;
      padding: 10px;
      border-radius: 100%;
      font-size: 19px;
    }
  }

  #resultsContainer {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 2px 72px 0px 18px;
    cursor: pointer;

  }

  .absolute {
    position: absolute;
    top: 20px;
    left: 50%;

  }

  .fixed {
    position: fixed;
    top: 20px;
    left: 50%;
    z-index: 2000;

  }


  @media screen and (max-width: 576px) {
    #search-bar {

      width: 50%;

      #searchInput {
        display: none;
      }

      #searchInput-2 {
        display: block;
      }
    }
  }
</style>