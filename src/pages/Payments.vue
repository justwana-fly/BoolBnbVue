<template>
    <HeaderComponent id="ls-header"/>
    <div class="container m-0-auto mt-3">
        <div class="pb-3">
                    <!-- this is the home button -->
                    <RouterLink :to="{ name: 'home' }">
                        <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
                    </RouterLink>
            </div>
        <div class="mt-4 mb-4">
            <div class="p-2 text-center">
                <h1>Reserve your apartment</h1>
            </div>
            <div class="mt-4 mb-4 d-flex flex-column">

                <div id="payment-form" class="ls-glass">
                    <form action="">
                        <label class="mb-2" for="Card">Numero Carta</label>
                        <input type="text" name="Card">

                        <label class="mb-2" for="Name">Nome</label>
                        <input type="text" name="Name">

                        <label class="mb-2" for="CVC">CVC</label>
                        <input type="text" name="CVC">

                        <label class="mb-2" for="Date">Data</label>
                        <input type="text" name="Date">

                    </form>
                    <div class="d-flex justify-content-end">
                        <button class="btn draw-border mt-5" type="submit"><i class="fa-solid fa-credit-card"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
    export default {
        name: 'Payments',
        components: { 
            HeaderComponent,
            },
    }
</script>

<style lang="scss" scoped>

#payment-form {
    padding: 15px;
    min-width: 50%;
    height: 400px;

    margin: 0 auto;
    margin-bottom: 20px;
    form {
        display: flex;
        flex-direction: column;
        .text-danger {
            color: red;
            padding: 20px;
        }
    }
}

.draw-border {
 //box-shadow: inset 0 0 0 4px #000000;
 color: #000000;
 transition: color 0.25s 0.0833333333s;
 position: relative;
}

.draw-border::before, .draw-border::after {
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

.draw-border:hover::before, .draw-border:hover::after {
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
</style>