import { State } from "./state";
import { MutationTree } from "vuex";

export const mutations: MutationTree<State> = {
  loginSuccess: (state: State, payload): any => {
    state.isLogin = true;
    state.isLoginError = false;
    state.userInfo = payload;
  },

  loginError: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = true;
    state.userInfo = null;
  },
  // 로그아웃
  logOut: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = false;
    state.userInfo = null;
  },

  changeState: (state: State, payload): any => {
    if (payload.email !== undefined && payload.email !== null) {
      state.email = payload.email;
    }
  }
};
