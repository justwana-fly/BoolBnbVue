import { reactive } from "vue";
import axios from "axios";
import { script } from "./script";

export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",
  apiKey: script.TOMTOM_API_KEY,
  homeApartments: [],
  apartments: [],
  filteredApart: [],
  query: '',
  pippo: [],
  imageBaseUrl: "./assets/img/",
  services: [],
  users: [],
  promotions: [],
  selectedServices: [],
  beds: 0,
  rooms: 0,
  radius: 20,
  searchCanv: '',
  latitude: null,  
  longitude: null, 

  methods: {
    async fetchHomeApartments() {
      try {
        const response = await axios.get(`${store.apiBaseUrl}/apartments`, {
          params: {
            promoted: true,
          },
        });
        console.log('Response data:', response.data.results); // Log
        store.homeApartments = response.data.results;
      } catch (error) {
        console.error("Errore durante il recupero degli appartamenti con promozioni:", error.message);
        console.error("Dettagli errore:", error.response.data);
        throw error;
      }
    },
    async fetchApartments($longitude, $latitude, $radius) {
      try {
        const response = await axios.get(`${store.apiBaseUrl}/search/location`, {
          params: {
            longitude: $longitude,
            latitude: $latitude,
            radius: $radius,
          },
        });
        console.log('fetchApartments - results:', response.data.results); // Log
        store.latitude = $latitude;  // Salva la latitudine
        store.longitude = $longitude;  // Salva la longitudine
        store.radius = $radius;  // Salva il raggio
        store.apartments = response.data.results;  // Salva i risultati
        return response.data.results;
      } catch (error) {
        console.error("Errore durante il recupero degli appartamenti:", error.message);
        throw error;
      }
    },

    async fetchApartmentsFiltered() {
      console.log('fetchApartmentsFiltered - params:', {
        longitude: store.longitude,
        latitude: store.latitude,
        radius: store.radius,
        beds: store.beds,
        rooms: store.rooms,
        services: store.selectedServices,
      }); // Log dei parametri
      
      try {
        const response = await axios.get(`${store.apiBaseUrl}/search/filter`, {
          params: {
            longitude: store.longitude,
            latitude: store.latitude,
            radius: store.radius,
            beds: store.beds,
            rooms: store.rooms,
            services: store.selectedServices,
          },
        });
        console.log('fetchApartmentsFiltered - results:', response.data.results); // Log
        store.filteredApart = response.data.results;  // Salva i risultati filtrati
        return response.data.results;
      } catch (error) {
        console.error("Errore durante il recupero degli appartamenti filtrati:", error.message);
        throw error;
      }
    },

    async fetchAllServices() {
      const response = await axios.get(store.apiBaseUrl + "/services");
      store.services = response.data.results;
      return response;
    },
    
    async fetchAllUsers() {
      const response = await axios.get(store.apiBaseUrl + "/users");
      store.users = response.data.results;
      return response;
    },

    async fetchAllPromotions() {
      const response = await axios.get(store.apiBaseUrl + "/promotions");
      store.promotions = response.data.results;
      return response;
    },
  },
});