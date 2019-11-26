import { RouteConfig } from "vue-router";

const Home = (): any => import("@/views/Home.vue");

const children: RouteConfig[] = [
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

export default children;
