import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";

export const getters: GetterTree<State, RootState> = {
  fullName(state: State): string {
    const id = state.userInfo || "";
    // const name = (state && state.userInfo.name) || "";
    // return `${id} ${name}`;
    return `${id}`;
  },
  getIsLogin(state: State): boolean {
    const isLogin = state.isLogin;
    return isLogin;
  }
};
