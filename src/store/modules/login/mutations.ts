import { State } from "./state";
import { MutationTree } from "vuex";
import router from "@/router";
import i18n from "@/locale";

export const mutations: MutationTree<State> = {
  loginSuccess: (state: State, payload: any): any => {
    state.isLogin = true;
    state.isLoginError = false;
    state.userInfo = payload;

    router.push({ name: "main" });
  },

  loginError: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = true;
    state.userInfo = null;
    state.token = "";
    localStorage.removeItem("token");
  },
  // 로그아웃
  logOut: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = false;
    state.userInfo = null;
    state.token = "";
    localStorage.removeItem("token");

    router.push({ name: "login" });
  },
  chStateEmail: (state: State, payload: string): any => {
    state.email = payload;
  },
  setToken: (state: State, payload: string): any => {
    localStorage.setItem("token", payload);
    state.token = payload;
  },
  setThemeColor(state: any, payload: any): void {
    state.themeColor = payload;
  },
  applyThemeColor(state: any, payload: any): void {
    state.themeColor = payload;
  },
  setLocale(state: any, payload: any): void {
    state.locale = payload;
    i18n.locale = payload;
  }
};
