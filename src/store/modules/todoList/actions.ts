import { ActionTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";

export const actions: ActionTree<State, RootState> = {
  listAdd({ commit }, payload): void {
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
