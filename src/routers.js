import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/Login.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "SignUp", path: "/sign-up", component: SignUp },
  { name: "LogIn", path: "/log-in", component: LogIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
