import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import store from "@/store";
import defaultLayout from "@/layout/DefaultLayout.vue";
import children from "./menuList";

Vue.use(VueRouter);

const LoginPage = (): any => import("@/views/LoginPage.vue");

const loginRoute: RouteConfig = {
  path: "/login",
  name: "login",
  component: LoginPage
  // meta: { layout: "Empty" }
};

const allRoute: RouteConfig = {
  path: "/:id",
  name: "main",
  component: defaultLayout,
  children
};

const exceptRoute: RouteConfig = {
  path: "/*",
  redirect: { name: "login" }
};

const routes: RouteConfig[] = [loginRoute, allRoute, exceptRoute];

const router: any = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function(to: Route, from: Route, next: any): void {
  const isAuthed = store.getters["login/isLogin"];
  // console.log(to.name, isAuthed);
  // console.log(children);
  if (to.name === "login" && isAuthed) {
    next({ name: "main" });
  } else if (to.name !== "login" && !isAuthed) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
