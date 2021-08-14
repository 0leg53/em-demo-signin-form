import { createRouter, createWebHashHistory } from "vue-router";
import SignInPage from "../pages/SignInPage.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
  {
    path: "/",
    name: "SignInPage",
    component: SignInPage,
  },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
