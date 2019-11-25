// import { Module, GetterTree, MutationTree, ActionTree, Plugin } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { Module } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";

const list = [
  {
    name: "home",
    icon: "mdi-home",
    title: "Home"
  },
  {
    name: "notice",
    icon: "mdi-note-text-outline",
    title: "Notice"
  },
  {
    name: "todolist",
    icon: "mdi-calendar-multiple-check",
    title: "ToDoList"
  },
  {
    name: "movielist",
    icon: "mdi-library-movie",
    title: "MovieList"
  }
];

export const state: State = {
  userInfo: null,
  menuList: list,
  isLogin: false,
  isLoginError: false,
  email: "",
  password: "",
  token: "",
  locale: "ko",
  themeColor: "dark-grey"
};

const namespaced = true;

export const login: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
