import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import LakeView from "../views/LakeView.vue";
import FakeView from "../views/FakeView.vue";
import TeamView from "../views/TeamView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/lake/:id",
    name: "Lake",
    component: LakeView,
    props: true,
  },
  {
    path: "/fake",
    name: "fake",
    component: FakeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
