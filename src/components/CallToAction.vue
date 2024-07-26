<template>
    <div id="calltoaction">
        <HeaderComponent />
        <div class=" mr-container">
            <div id="call-title-1" class="text-white text-center ">Become a tenant now!</div>
        </div>
        <div class="mr-container">
            <a id="call-title-2" class="text-white text-decoration-none draw-border " href="http://127.0.0.1:8000/register">Sign up here</a>
        </div>
        <div class="gradient"></div>
    </div>
    </template>

<script>
import { store } from '../store';
    export default {
        name: 'CallToAction',
        data() {
            return {
                store
            }
        },
        components: {
        },
        methods: {
           
}}
</script>

<style lang="scss" scoped>
#calltoaction {    
    height: 60vh;
    width: 100%;
    background-image: url('../assets/img/calltoaction_6.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    .mr-container{
        width: 900px;
        margin: 0 auto;
        #call-title-1 {
            font-family: "Roboto", sans-serif!important;
            position: absolute;
            top: 29%;
            left: 10%;
            font-size: 5rem;
            font-weight: 200;
            font-style: italic;
            padding:  0px  50px 20px 50px;  
            background: rgba(255, 255, 255, 0.1);  
            backdrop-filter: blur(5px);  
            border-radius: 5px; 
        }
        #call-title-2 {
            font-family: "Roboto", sans-serif!important;
            position: absolute;
            top: 59%;
            left: 20%;
            font-size: 5rem;
            font-weight: 200;
            // font-style: italic;
            padding:  0px  50px 20px 50px;  
            background: rgba(255, 255, 255, 0.1);  
            backdrop-filter: blur(5px);  
            border-radius: 5px; 
        }
    }

   
    .draw-border {
        //box-shadow: inset 0 0 0 4px #000000;
        color: #ffffff;
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
        border-bottom-width: 8px;
        border-left-width: 8px;
    }
    .draw-border::after {
        border-top-width: 8px;
        border-right-width: 8px;
    }
    .draw-border:hover {
        color: #ffffff;
        background-color: transparent;
    }
    .draw-border:hover::before,
    .draw-border:hover::after {
        border-color: #ffffff;
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
    
}
</style>