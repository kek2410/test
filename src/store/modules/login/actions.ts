import { ActionTree } from "vuex";
import { ProfileState, allUsers } from "./state";
import { RootState } from "@/store/types";
import router from "@/router";

export const actions: ActionTree<ProfileState, RootState> = {
  login({ commit }, loginObj): void {
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

  logOut({ commit }): void {
    commit("logOut");
    // router.push({ name: "home" });
  }
};
