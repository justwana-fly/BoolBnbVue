<template>
    <div id="jumbotron">
        <HeaderComponent />
        <div class=" mr-container">
            <div id="jumbo-title-1" class="text-white">Choose your home...</div>
        </div>
        <div class="mr-container">
            <div id="jumbo-title-2" class="text-white text-end ">...Choose your dream</div>
        </div>
        <div class="gradient"></div>
    </div>
</template>

<script>

    import { store } from '../store';
    import HeaderComponent from './HeaderComponent.vue';
    export default {
        name: 'JumbotronComponent',
        data() {
            return {
                store
            }
        },
        components: {
            HeaderComponent
        },
        methods: {
            handleLoad() {
                const titleOne = document.querySelector('#jumbo-title-1');
                const titleTwo = document.querySelector('#jumbo-title-2');

                // Far scorrere i titoli dall'esterno allo schermo
                titleOne.style.transform = 'translateX(0%)';
                titleTwo.style.transform = 'translateX(0%)';
            },
        },
        mounted() {
            window.addEventListener('load', this.handleLoad);
        },
    };
</script>

<style lang="scss" scoped>

    #jumbo-title-1 {
        display: flex;
        flex-direction: column;
        transform: translateX(-100%);
        transition: transform 2s ease-in-out;
    }

    #jumbo-title-2 {
        display: flex;
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 2s ease-in-out;
    }

    #jumbotron {
        height: 70vh;
        width: 100%;
        background-image: url('../assets/img/7030003_3.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;

        .mr-container {
            width: 900px;
            margin: 0 auto;

            #jumbo-title-1 {
                position: absolute;
                top: 57%;
                left: 20%;
                font-size: 5rem;
                font-weight: 200;
                // font-style: italic;
            }

            #jumbo-title-2 {
                position: absolute;
                top: 69%;
                right: 20%;
                font-size: 5rem;
                font-weight: 200;
                // font-style: italic;
            }
        }

        @media screen and (max-width: 576px) {
            #jumbo-title-1 {
                position: absolute;
                top: 62% !important;
                left: 8% !important;
                font-size: 2rem !important;
                font-weight: 100 !important;
                font-style: italic !important;
                transform: translateX(0%) !important;
           
            }
        
            #jumbo-title-2 {
                position: absolute;
                top: 70% !important;
                right: 13% !important;
                font-size: 2rem !important;
                font-weight: 200 !important;
                font-style: italic !important;
                transform: translateX(10%) !important;
        
            }
        }

    }
</style>