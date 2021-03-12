import { createRouter, createWebHistory } from "vue-router";
import register from "../components/register.vue";
import success from "../components/success.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/success",
      component: success,
    },
    { path: "/", redirect: "/register" },
    {
      path: "/register",
      component: register,
    },
  ],
});

export default router;
