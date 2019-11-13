import { GetterTree } from "vuex";
import { ProfileState } from "./state";
import { RootState } from "@/store/types";

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state: ProfileState): string {
    const id = state.userInfo || "";
    // const name = (state && state.userInfo.name) || "";
    // return `${id} ${name}`;
    return `${id}`;
  },
  getIsLogin(state: ProfileState): boolean {
    const isLogin = state.isLogin;
    return isLogin;
  }
};
