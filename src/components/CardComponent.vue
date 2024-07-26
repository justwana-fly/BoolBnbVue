<template>
  <router-link class="text-decoration-none" :to="{ name: 'details', params: { slug: item.slug } }">
  <article  class="card my-4">
    <div class="card__badges ">
      <div class="badge-right">
        <div id="services-img"  v-for="services in item.services" :key="services.id" class="service-badge">
            <img :src="store.imgBasePath + services.icon" alt="">
        </div>
      </div>
    </div>

    <img
    class="card__background"
    :src="store.imgBasePath + item.image_cover"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"/>
    <div ref="cardContent" class="card__content | flow">
      <div class="card__content--container | flow">
        <h2 class=" ms-1 card__title d-inline fs-3" ref="cardTitle">{{ item.name }}<i class="fa-solid fs-5 align-top text-warning fa-star"></i></h2>
          <p class="p-4 pb-0 card__description">
            {{ item.description }}
          </p>
      </div>
      <span :to="{ name: 'details', params: { slug: item.slug } }" class="btn ms-5 draw-border w-75 p-3">Details <i class="fa-solid fa-chevron-right"></i></span>
    </div>
  </article>
</router-link>
</template>

<script>
import { store } from '../store';
export default {
  name: 'CardComponent',
  props: [
    'item',
  ],
  data() {
    return {
      store,
      maxLength: 16,
      otherMaxLength: 17,
      titleElement: 'this is an example of a very very long title that probably may be truncated due of it\'s length',
    }
  },
  methods: {
    checkTitleLength() {
    const titleElement = this.$refs.cardTitle;
    const contentElement = this.$refs.cardContent; // Riferimento al contenitore

    if (titleElement) {
      const titleLength = titleElement.innerText.length;
      if (titleLength > this.otherMaxLength) {
        titleElement.classList.add('card__title--truncate-2');
        titleElement.classList.remove('card__title--truncate');
      } else if (titleLength > this.maxLength) {
        titleElement.classList.add('card__title--truncate');
        titleElement.classList.remove('card__title--truncate-2');
      } else {
        titleElement.classList.remove('card__title--truncate', 'card__title--truncate-2');
      }
      
      // Aggiunge una classe al contenitore in base alla lunghezza del titolo
      if (contentElement) {
        if (titleLength > this.maxLength) {
          contentElement.classList.add('card__content-2');
        } else {
          contentElement.classList.remove('card__content-2');
        }
      }
    }
  }
  },
  mounted() {
   // console.log('item:', this.item);
    //console.log('services:', this.item.services);
    this.checkTitleLength();

  },
}
</script>

<style lang="scss" scoped>
/* Box sizing rules */
*,
*::before,
*::after {
box-sizing: border-box;
}
/* Remove default margin */
body, h2,
p {
margin: 0;
}
/* GLOBAL STYLES */
body {
display: grid;
place-items: center;
height: 100vh;
}
h2 {
font-size: 2.25rem;
font-family: var(--font-title);
color: var(--white);
line-height: 1.2;
}
p {
font-family: var(--font-text);
font-size: 1rem;
line-height: 1.5;
color: var(--white);
}
.flow > * + * {
margin-top: var(--flow-space, 1em);
}
/* CARD COMPONENT */
.card {
display: grid;
place-items: center;
width: 80vw;
max-width: 21.875rem;
height: 28.125rem;
overflow: hidden;
border-radius: 0.625rem;
box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}
.card > * {
grid-column: 1 / 2;
grid-row: 1 / 2;
}
.card__background {
object-fit: cover;
max-width: 100%;
height: 100%;
}
.card__content {
--flow-space: 0.9375rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-self: flex-end;
height: 60%;
padding: 12% 0.275rem 1.875rem;
background: linear-gradient(
  180deg,
  hsla(0, 0%, 0%, 0) 0%,
  hsla(0, 0%, 0%, 0.3) 10%,
  hsl(0, 0%, 0%) 100%
);
}
.card__content--container {
--flow-space: 1.25rem;
}
.card__title {
position: relative;
width: fit-content;
width: -moz-fit-content; /* Prefijo necesario para Firefox  */
}
.card__title--truncate {
  white-space: nowrap; 
  text-overflow: ellipsis;
  width: fit-content;
}

// queste classi sono solo per il titolo e vengono applicate tramite funzione checkTitleLength
.card__title--truncate-2 {
  white-space: nowrap; 
  text-overflow: ellipsis;
  width: -moz-fit-content; /* Prefijo necesario para Firefox  */
  width: fit-content;
  text-wrap: wrap;
  line-height: 0.0;
}
.card__content-2 {
--flow-space: 0.9375rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-self: flex-end;
height: 57%;
padding: 12% 0.105rem 1.875rem;
background: linear-gradient(
  180deg,
  hsla(0, 0%, 0%, 0) 0%,
  hsla(0, 0%, 0%, 0.3) 10%,
  hsl(0, 0%, 0%) 100%
);
}
/////////////////////////////////////////////////////////////////////
.card__title::after {
content: "";
position: absolute;
height: 0.3125rem;
width: calc(100% + 1.25rem);
bottom: calc((1.25rem - 0.5rem) * -1);
left: -1.25rem;
background-color: var(--brand-color);
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
      border-bottom-width: 4px;
      border-left-width: 4px;
  }
  .draw-border::after {
      border-top-width: 4px;
      border-right-width: 4px;
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
@media (any-hover: hover) and (any-pointer: fine) {
.card__content {
  transform: translateY(62%);
  transition: transform 500ms ease-out;
  transition-delay: 500ms;
}
.card__title::after {
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 1000ms ease-in, transform 500ms ease-out;
  transition-delay: 500ms;
  transform-origin: right;
}
.card__background {
  transition: transform 500ms ease-in;
}
.card__content--container > :not(.card__title),
.card__button {
  opacity: 0;
  transition: transform 500ms ease-out, opacity 500ms ease-out;
}
.card:hover,
.card:focus-within {
  transform: scale(1.05);
  transition: transform 500ms ease-in;
}
.card:hover .card__content,
.card:focus-within .card__content {
  transform: translateY(0);
  transition: transform 500ms ease-in;
}
.card:focus-within .card__content {
  transition-duration: 0ms;
}
.card:hover .card__background,
.card:focus-within .card__background {
  transform: scale(1.3);
}
.card:hover .card__content--container > :not(.card__title),
.card:hover .draw-border,
.card:focus-within .card__content--container > :not(.card__title),
.card:focus-within .draw-border {
  opacity: 1;
  transition: opacity 500ms ease-in;
  transition-delay: 1000ms;
}
.card:hover .card__title::after,
.card:focus-within .card__title::after {
  opacity: 1;
  transform: scaleX(1);
  transform-origin: left;
  transition: opacity 500ms ease-in, transform 500ms ease-in;
  transition-delay: 500ms;
}
.card__badges {
display: flex;
justify-content: space-between;
position: absolute;
top: 10px;
left: 10px;
right: 10px;
z-index: 10;
opacity: 1;
transition: opacity 0.3s ease;
}


.badge-right {
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: rgb(0, 0, 0);
border-radius: 5px;
z-index: 2000;

}
.badge-right {
justify-content: end;
flex-wrap: wrap;
}

.promo-badge {
background-color: rgba(255, 255, 255, 0.3);
color: rgb(255, 217, 0);
border-radius: 5px;
z-index: 2000;
margin: 2px;
padding: 5px;
}
.service-badge {
background-color: rgba(255, 255, 255, 0.3);
border-radius: 5px;
z-index: 2000;
margin: 4px;
box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
}

#services-img {
margin: 3px;
padding: 3px;
img {
  width: 25px;
  height: 25px;
}
}
}
</style>