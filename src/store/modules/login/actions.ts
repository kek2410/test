import { ActionTree } from "vuex";
import { State, allUsers } from "./state";
import { RootState } from "@/store/types";
import router from "@/router";

export const actions: ActionTree<State, RootState> = {
  actionLogin({ commit }, loginObj): void {
    let selectedUser: any = null;
    let user: any = null;

    for (user of allUsers) {
      if (user.email === loginObj.email) selectedUser = user;
    }

    if (selectedUser === null || loginObj.password !== selectedUser.password) {
      commit("loginError");
    } else {
      commit("loginSuccess", selectedUser);
      router.push({ name: "home" });
    }
  },

  actionLogOut({ commit }): void {
    commit("logOut");
    router.push({ name: "home" });
  },

  changeState({ commit }, data: any): void {
    commit("changeState", data);
  }
};
