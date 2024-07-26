<template>
    <HeaderComponent />
    <SearchBarComponent @updateResults="updateResults" />
    <!-- this is the home button -->
    <div class="container-fluid ms-5 mt-3">
        <div class="pb-3 ms-5">
            <!-- <RouterLink :to="{ name: 'home' }">
                <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
            </RouterLink> -->
        </div>
        <!-- apartments results -->
    </div>
    <div class="container-fluid p-5">

        <div class="d-flex flex-column align-items-center gap-3 mb-3">
            <div class=" d-flex justify-content-center">
                <!-- services section -->
                <div  class="d-flex justify-content-center gap-3 flex-wrap">
                    <!-- <h2 class="text-center">Services</h2> -->
                    <div id="services" class="d-flex flex-wrap flex-column" v-for="service in store.services" :key="service.id">
                        <input id="servcheck" type="checkbox" class="checkbox-custom me-2" :value="service.id"
                            v-model="store.selectedServices"
                            :style="{ backgroundImage: 'url(' + store.imgBasePath + service.icon + ')' }"> <br>
                        <label id="serviceLabel" for="servcheck" class="text-center">{{ service.name }}</label>
                    </div>
                </div>

            </div>
            <div id="filter" class="d-flex align-items-center justify-content-around flex-wrap container">
                <div id="counters" class="d-flex justify-content-center flex-wrap">
                    <!-- primo counter for beds -->
                    <div class="mx-4">
                        <h3 class="text-center my-4">Beds</h3>

                        <div class="d-flex" id="beds">
                            <div class="d-flex align-items-center">
                                <button class="btn-counter" type="button" @click="decrement('beds')"
                                    :disabled="store.beds <= 0">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="text" v-model="store.beds" class="input-counter" readonly>
                                <button class="btn-counter" type="button" @click="increment('beds')"
                                    :disabled="store.beds >= 10">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- second counter for bedrooms -->
                    <div class="mx-4">
                        <h3 class="text-center my-4">Rooms</h3>

                        <div class="d-flex mb-4" id="rooms">
                            <div class="d-flex align-items-center">
                                <button class="btn-counter " type="button" @click="decrement('rooms')"
                                    :disabled="store.rooms <= 0 ? true : false">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="text" v-model="store.rooms" class="input-counter" readonly>
                                <button class="btn-counter  " type="button" @click="increment('rooms')"
                                    :disabled="store.rooms >= 10 ? true : false">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center w-50">
                    <h3 class="text-center my-4">Distance</h3>
                    <div class="filter-distance d-flex justify-content-center w-100 flex-wrap mb-4">
                        <label for="distance-range">(km):</label>
                        <span id="distance-value">{{ store.radius }}</span>
                        <br>
                        <input class="w-100" type="range" id="distance-range" min="1" max="25" v-model="store.radius"
                            @blur="fetchFilteredResults">
                    </div>
                </div>
            </div>
        </div> 
        <div class="container">
            <h4 class="mt-5 ms-5">Your Results for {{ store.query }}</h4>
            <span class="ms-5" v-if="getSelectedServiceNames()"> <strong>Apartments with these services included:</strong> {{ getSelectedServiceNames() }}</span>
            <span class="ms-5" v-if="getSelectedServiceNames() && store.beds > 0 || store.rooms > 0 || store.radius > 1"><strong>Your requirements:</strong> </span>
            <span  v-if="store.beds > 0"> {{ ' ' + store.beds + ' beds -' }}</span>
            <span  v-if="store.rooms > 0"> {{ ' ' + store.rooms + ' rooms ' }}</span>
            <span  v-if="store.radius > 1"> {{ ' ' + store.radius + ' - km' }}</span>
        </div>  
        <div class="d-flex justify-content-center flex-wrap">
            <div class="p-3" v-for="apartment in pippo" :key="apartment.slug">
                <CardComponent :item="apartment" />
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import SearchBarComponent from '@/components/SearchBarComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import CardComponent from '../components/CardComponent.vue';

    export default {
        name: 'Results',
        components: {
            HeaderComponent,
            FooterComponent,
            CardComponent,
            SearchBarComponent
        },
        data() {
            return {
                store,
                pippo: [],
            }
        },
        methods: {

            // Toggle selection of a service
            toggleSelection(serviceId) {
                const index = this.store.selectedServices.indexOf(serviceId);
                if (index === -1) {
                    this.store.selectedServices.push(serviceId);
                    console.log(this.store.selectedServices);
                } else {
                    this.store.selectedServices.splice(index, 1);
                    console.log(this.store.selectedServices);
                }
            },
            // Check if a service is selected
            isSelected(serviceId) {
                return this.store.selectedServices.includes(serviceId);
            },

            increment(variable) {
                if (this.store[variable] < 10) {
                    this.store[variable] += 1;

                    //console.log(this.store[variable])
                }
            },
            decrement(variable) {
                if (this.store[variable] > 0) {
                    this.store[variable] -= 1;

                    //console.log(this.store[variable])
                }
            },


            getPippo() {
                this.pippo = store.pippo;
                console.log('pippo in result:', this.pippo);
            },
            async fetchFilteredResults() {
                console.log('fetchFilteredResults - params:', {
                    beds: this.store.beds,
                    rooms: this.store.rooms,
                    services: this.store.selectedServices,
                    radius: this.store.radius,
                }); // Log dei parametri

                const results = await store.methods.fetchApartmentsFiltered();
                console.log('fetchFilteredResults - results:', results); // Log dei risultati
                this.pippo = results;
            },
            updateResults(newResults) {
                this.pippo = newResults;
            },
            getSelectedServiceNames() {
            return this.store.services
            .filter(service => this.store.selectedServices.includes(service.id))
            .map(service => service.name)
            .join(' - ');
    }
        },
        mounted() {
            this.getPippo();
        },
        watch: {
            'store.beds': 'fetchFilteredResults',
            'store.rooms': 'fetchFilteredResults',
            'store.selectedServices': 'fetchFilteredResults',
        }
    }
</script>

<style lang="scss" scoped>



    .checkbox-custom {
        appearance: none;
        -webkit-appearance: none;
        width: 90px;
        aspect-ratio: 1;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        /* Makes it round */
        display: inline-block;
        cursor: pointer;
        position: relative;
        transition: background-color 0.2s, box-shadow 0.2s;
        border: none;
        outline: none;
        box-shadow: 4px 4px 9px rgba(57, 57, 57, 0.4235294118),
            0px 0px 0px rgba(36, 36, 36, 0.1607843137),
            inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
            inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
        border: none;
        color: rgb(161, 161, 161);
        transition: 500ms;
    }

    .checkbox-custom:checked {
        background-color: #e1e1e1dd;
        /* Color when checked */
        /* Shadow effect */
        box-shadow: 0px 0px 0px rgba(35, 35, 35, 0.9215686275),
            0px 0px 2px rgba(42, 42, 42, 0.7098039216),
            inset 1px 1px 3px rgba(42, 42, 42, 0.9058823529);
    }

    .checkbox-custom::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    }

    .btn {

        width: 70px;
        margin: 10px;

    }

    .btn,
    .btn-counter {
        aspect-ratio: 1 / 1;
        box-shadow: 4px 4px 9px rgba(57, 57, 57, 0.4235294118),
            0px 0px 0px rgba(36, 36, 36, 0.1607843137),
            inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
            inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
        border: none;
        color: rgb(161, 161, 161);
        transition: 500ms;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .input-counter {

        text-align: center;
        width: 60px;
        height: 60px;
        margin: 5px;
        padding: 10px;
        font-size: 2rem;


    }

    .btn-counter {
        width: 60px;
        aspect-ratio: 1 / 1;
    }

    .checkbox-custom:active,
    .btn-counter:active {
        box-shadow: 0px 1px 0px rgba(35, 35, 35, 0.9215686275),
            0px 0px 2px rgba(42, 42, 42, 0.7098039216),
            inset 3px 3px 6px rgba(42, 42, 42, 0.9058823529);
        transition: box-shadow 70ms ease-in-out;
    }



    .ls-btn-left,
    .ls-btn-right {
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        border-radius: 5px;
        color: white;
        padding: 30px 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-250%);

    }

    .ls-btn-left {
        left: 10px;
    }

    .ls-btn-right {
        right: 10px;
    }

    .draw-border {
        //box-shadow: inset 0 0 0 4px #000000;
        color: #000000;
        transition: color 0.25s 0.0833333333s;
        position: relative;
    }

    .draw-border::before,
    .draw-border::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        border-radius: 3px;
        content: "";
        pointer-events: none;
        position: absolute;
        width: 0;
        height: 0;
        bottom: 0;
        right: 0;
    }

    .draw-border::before {
        border-bottom-width: 4px;
        border-left-width: 4px;
    }

    .draw-border::after {
        border-top-width: 4px;
        border-right-width: 4px;
    }

    .draw-border:hover {
        color: #000000;
        background-color: transparent;
    }

    .draw-border:hover::before,
    .draw-border:hover::after {
        border-color: #000000;
        transition: border-color 0s, width 0.25s, height 0.25s;
        width: 100%;
        height: 100%;
    }

    .draw-border:hover::before {
        transition-delay: 0s, 0s, 0.25s;
    }

    .draw-border:hover::after {
        transition-delay: 0s, 0.25s, 0s;
    }

    .btn {
        background: none;
        border: none;
        cursor: pointer;
        line-height: 1.5;
        font: 700 17px "Roboto Slab", sans-serif;
        padding: 1em 2em;
        letter-spacing: 0.05rem;
    }

    #CardScrollContainer {
        display: flex;
        align-items: center;
        overflow-x: scroll;
    }

    .d-flex.justify-content-between.position-relative {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    @media screen and (max-width: 576px) {
    
        .btn-counter {
            width: 40px;
            aspect-ratio: 1 / 1;
        }
        #services{

            width: 50px;
        }

        .checkbox-custom {
            appearance: none;
            -webkit-appearance: none;
            width: 50px;
            aspect-ratio: 1;
            background-size: 30px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 50%;
            /* Makes it round */
            display: inline-block;
            cursor: pointer;
            position: relative;
            transition: background-color 0.2s, box-shadow 0.2s;
            border: none;
            outline: none;
            box-shadow: 4px 4px 9px rgba(57, 57, 57, 0.4235294118),
                0px 0px 0px rgba(36, 36, 36, 0.1607843137),
                inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
                inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
            border: none;
            color: rgb(161, 161, 161);
            transition: 500ms;
        }

        #serviceLabel {
            font-size: 10px;
            
        }
        
    }
</style>
