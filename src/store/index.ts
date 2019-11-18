import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { login } from "@/store/modules/login";
import { todoList } from "@/store/modules/todoList";
import { RootState } from "./types";

// const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    login,
    todoList
  },
  strict: true
};

export default new Vuex.Store(store);
