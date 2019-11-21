import { RouteConfig } from "vue-router";

const Notice = (): any => import("@/views/Notice.vue");
const ToDoList = (): any => import("@/views/ToDoList.vue");
const MyPage = (): any => import("@/views/MyPage.vue");
const Home = (): any => import("@/views/Home.vue");
const MovieList = (): any => import("@/views/MovieList.vue");

const children: RouteConfig[] = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/detail",
    name: "notice",
    component: Notice
  },
  {
    path: "/mypage",
    name: "mypage",
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
  }
];

export default children;
