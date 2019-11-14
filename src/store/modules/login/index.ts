// import { Module, GetterTree, MutationTree, ActionTree, Plugin } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { Module } from "vuex";
import { ProfileState } from "./state";
import { RootState } from "@/store/types";

export const state: ProfileState = {
  userInfo: null,
  isLogin: false,
  isLoginError: false
};

const namespaced = true;

export const login: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};

// import Vuex, { StoreOptions } from "vuex";
// import { login } from "@/store/modules/login";

// // Vue.use(Vuex);

// const store: StoreOptions<RootState> = {
//   state: {
//     version: "1.0.0" // a simple property
//   },
//   modules: {
//     login
//   }
// };

// export default new Vuex.Store<RootState>(store);
