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
  },
  changeState(state: State, payload): void {
    if (payload.memo !== undefined && payload.memo !== null) {
      state.memo = payload.memo;
    }
    if (payload.index !== undefined && payload.index !== null) {
      state.index = payload.index;
    }
    if (payload.mode !== undefined && payload.mode !== null) {
      state.mode = payload.mode;
    }
  }
};
