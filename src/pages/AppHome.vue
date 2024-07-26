<template>
  <div>

<ApartmentsList />
</div>
</template>

<script>
import ApartmentsList from '@/pages/ApartmentsList.vue';

import {store} from '@/store.js';
  export default {
    name: 'AppHome',
    components: {
 
      ApartmentsList,

    },
    data() {
      return {
        store
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>