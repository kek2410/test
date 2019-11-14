import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const Home = (): any => import("@/views/Home.vue");
const Login = (): any => import("@/views/Login.vue");
const Notice = (): any => import("@/views/Notice.vue");
const ToDoList = (): any => import("@/views/ToDoList.vue");
const MyPage = (): any => import("@/views/MyPage.vue");
const MovieList = (): any => import("@/views/MovieList.vue");

const isLogin = store.getters["login/getIsLogin"];

const rejectAuthUser = (to: string, from: string, next: any): void => {
  if (isLogin) {
    alert("이미 로그인하였습니다.");
    next("/");
  } else {
    next();
  }
};

const onlyAuthUser = (to: string, from: string, next: any): void => {
  if (isLogin) {
    alert("로그인이 필요합니다.");
    next("/");
  } else {
    next();
  }
};

const routes: any = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    component: Login
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice
    // children: [
    //   {
    //     path: "/detail",
    //     name: "notice",
    //     component: NoticeDetail
    //   }
    // ]
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuthUser,
    component: MyPage
  },
  {
    path: "/todolist",
    name: "todolist",
    component: ToDoList
  },
  {
    path: "/movielist",
    name: "movielist",
    component: MovieList
  },
  {
    path: "/redirect-me",
    redirect: { name: "about" }
  },
  {
    path: "/*",
    redirect: { name: "home" }
  }
];

const router: any = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
