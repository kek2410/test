import { ActionTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";

export const actions: ActionTree<State, RootState> = {
  listAdd({ commit }, payload): void {
    console.log(payload);
    commit("listAdd", payload);
  },
  statusControl({ commit }, payload): void {
    commit("statusControl", payload);
  },
  listDelete({ commit }, payload): void {
    commit("listDelete", payload);
  },
  listEdit({ commit }, payload): void {
    commit("listEdit", payload);
  },
  changeState({ commit }, payload): void {
    commit("changeState", payload);
  }
};
