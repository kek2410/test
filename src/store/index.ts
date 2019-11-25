import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { login } from "@/store/modules/login";
import { todoList } from "@/store/modules/todoList";
import { RootState } from "./";

// const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const state = {
  version: "1.0.0"
};

const mutations = {};

const getters = {};

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
