import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import Details from "./pages/Details.vue";
import NotFound from "./pages/NotFound.vue";
import Results from "./pages/Results.vue";
import Payments from "./pages/Payments.vue";
import ApartmentsList from "./pages/ApartmentsList.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome, 
    },
    {
      path: "/apartments",
      name: "apartments",
      component: ApartmentsList, 
    },
    {
      path: "/details/:slug",
      name: "details",
      component: Details, 
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound, 
    },
    {
      path: "/results",
      name: "results",
      component: Results,
    },
    {
      path: "/payments",
      name: "payments",
      component: Payments,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top of the page
    return { top: 0 };
  }
});

export { router };