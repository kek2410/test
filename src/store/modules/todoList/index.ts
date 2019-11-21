// import { Module, GetterTree, MutationTree, ActionTree, Plugin } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { Module } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";

//초기값 설정.
export const state: State = {
  todolist: [],
  memo: "",
  index: -1,
  mode: "add"
};

const namespaced = true;

export const todoList: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
