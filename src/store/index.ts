import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { login } from "@/store/modules/login";
import { todoList } from "@/store/modules/todoList";
import { RootState } from "./";
import i18n from "@/locale";

// const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export interface RootState {
  version: string;
  locale: string;
  themeColor: string;
}

const state = {
  version: "1.0.0",
  locale: "ko",
  themeColor: "blue-grey"
};

const mutations = {
  setThemeColor(state: any, payload: any): void {
    state.themeColor = payload;
  },
  setLocale(state: any, payload: any): void {
    state.locale = payload;
    i18n.locale = payload;
  }
};

const getters = {
  themeColor: (state: any): string => state.themeColor,
  getLocale: (state: any): string => state.locale
};

const store: StoreOptions<RootState> = {
  state,
  mutations,
  getters,
  modules: {
    login,
    todoList
  },
  strict: true
};

export default new Vuex.Store(store);
