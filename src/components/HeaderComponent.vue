<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center mb-2">
            <!-- logo -->
            <div class="logo-container d-flex align-items-center">
                <img class="logo-large position-relative" src="../assets/img/logo-6.png" alt="logo">
                <img class="logo-small position-relative" src="../assets/img/logo-1.png" alt="logo">
                <!-- <span class="logo-span">Bool n Dreams</span> -->
            </div>
            <!-- ******************************* buttons register and login ********************************-->
            <div class="text-center d-flex align-items-center ">
                <div class="px-1">
                    Sign up:
                </div>
                <div>
                    <a class=" draw-border" href="http://127.0.0.1:8000/register">
                        <i class="fa-regular fa-id-card"></i> Register
                    </a>
                </div>
                <div class="px-1">or</div>
                <div>
                    <a class=" draw-border" href="http://127.0.0.1:8000/login">
                        <i class="fa-solid fa-unlock-keyhole"></i> Login
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import ModalSearchComponent from './CanvasComponent.vue';
import { store } from '../store';
export default {
    name: "HeaderComponent",
    data() {
        return {
            store,
        };
    },
};
</script>

<style lang="scss" scoped>
.btn {
    aspect-ratio: 1 / 1;
    box-shadow:
        4px 4px 9px rgba(57, 57, 57, 0.4235294118),
        0px 0px 0px rgba(36, 36, 36, 0.1607843137),
        inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
        inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
    border: none;
    color: rgb(0, 0, 0);
    transition: 500ms;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 37px;
    margin: 0px 10px 0px 10px;
}

.btn:active {
    box-shadow: 0px 1px 0px rgba(35, 35, 35, 0.9215686275),
        0px 0px 2px rgba(42, 42, 42, 0.7098039216),
        inset 3px 3px 6px rgba(42, 42, 42, 0.9058823529);
    transition: box-shadow 70ms ease-in-out;
}

nav {
    padding: 0 10px 0 10px;
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid white;
    height: 100px;

    .title {
        padding-right: 70px;

        h1 {
            font-weight: 200;
            font-size: 3rem;
        }

    }
}


p,
a {
    color: white;
    text-decoration: none;
}

select {
    border-radius: 25px;
    height: 50px;
}


// header img {
//     width: 100px;
//     height: 100px;
// }

.logo-container {

    position: relative;
    width: fit-content;
}


.logo-small {
    display: none;
}


/* Mostra il logo grande di default */
.logo-large {
    display: block;
    width: 180px;

}

//effetto bottone
.draw-border {
    //box-shadow: inset 0 0 0 4px #000000;
    color: black;
    transition: color 0.25s 0.0833333333s;
    position: relative;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);  
            backdrop-filter: blur(5px);  
            border-radius: 5px; 
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
    color: black;
    background-color: transparent;
}

.draw-border:hover::before,
.draw-border:hover::after {
    border-color: black;
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
    font: 500 17px "Roboto Slab", sans-serif;
    padding: 1em 2em;
    letter-spacing: 0.05rem;
}

/* Quando lo schermo è più piccolo di 768px, mostra il logo piccolo e nascondi il logo grande */
@media (max-width: 768px) {
    .logo-large {
        display: none;
    }

    .logo-small {
        display: block;
        width: 145px;
        margin-left: -55px;

    }
}
</style>
