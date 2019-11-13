import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";

export const getters: GetterTree<State, RootState> = {
  countDone(state: State): number {
    let count = 0;

    state.todolist.forEach(list => {
      if (list.status === "done") count++;
    });

    return count;
  }
};
