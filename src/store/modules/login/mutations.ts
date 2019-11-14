import { ProfileState } from "./state";
import { MutationTree } from "vuex";

export const mutations: MutationTree<ProfileState> = {
  loginSuccess: (state: ProfileState, payload): any => {
    state.isLogin = true;
    state.isLoginError = false;
    state.userInfo = payload;
  },

  loginError: (state: ProfileState): any => {
    state.isLogin = false;
    state.isLoginError = true;
    state.userInfo = null;
  },
  // 로그아웃
  logOut: (state: ProfileState): any => {
    state.isLogin = false;
    state.isLoginError = false;
    state.userInfo = null;
  }
};
