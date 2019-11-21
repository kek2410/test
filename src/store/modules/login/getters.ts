import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";

export const getters: GetterTree<State, RootState> = {
  fullName(state: State): string {
    const id = state.userInfo || "";
    return `${id}`;
  },
  isLogin(state: State): boolean {
    return state.isLogin;
  },
  getToken(state: State): string {
    return state.token;
  }
};
