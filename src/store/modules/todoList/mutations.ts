import { State, InputState } from "./state";
import { MutationTree } from "vuex";

export const mutations: MutationTree<State> = {
  listAdd(state: State, payload: InputState): void {
    state.todolist.push({ memo: payload.memo, status: "created" });
    state.memo = "";
  },
  statusControl(state: State, payload): void {
    state.todolist[payload.index].status = payload.status;
  },
  listDelete(state: State, payload): void {
    state.todolist.splice(payload.index, 1);
  },
  listEdit(state: State, payload): void {
    state.todolist[payload.index].memo = payload.memo;
    state.memo = "";
    state.index = -1;
    state.mode = "add";
  },
  setMemo(state: State, payload): void {
    state.memo = payload;
  },
  setIndex(state: State, payload): void {
    state.index = payload;
  },
  setMode(state: State, payload): void {
    state.mode = payload;
  }
};
