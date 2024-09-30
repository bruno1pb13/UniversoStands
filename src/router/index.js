import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return {
            selector: to.hash,
            behavior: 'smooth',  // para rolagem suave
        };
    }
    return { x: 0, y: 0 };
},
});

export default router;