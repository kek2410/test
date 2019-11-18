// import { Module, GetterTree, MutationTree, ActionTree, Plugin } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { Module } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";

export const state: State = {
  userInfo: null,
  isLogin: false,
  isLoginError: false,
  email: "",
  password: ""
};

const namespaced = true;

export const login: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
