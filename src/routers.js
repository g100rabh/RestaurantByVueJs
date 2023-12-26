import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/Login.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "SignUp", path: "/sign-up", component: SignUp },
  { name: "LogIn", path: "/log-in", component: LogIn },
  { name: "AddRestau", path: "/add-restaurant", component: AddRestaurant },
  {
    name: "UpdateRestau",
    path: "/update-restaurant",
    component: UpdateRestaurant,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
