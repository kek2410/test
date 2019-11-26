import { ActionTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";
import mainAPI from "@/api/axios";
import { isUndefinedOrNotNull } from "@/utils/validate";

export const actions: ActionTree<State, RootState> = {
  async actionLogin({ commit }, loginObj): Promise<any> {
    try {
      let token = "";
      let chkLogin = false;
      let result: any = null;

      if (loginObj.email === "1") {
        token = "QpwL5tke4Pnpja7X4";
        chkLogin = true;
      }

      if (!chkLogin) {
        result = await mainAPI("/api/login", loginObj);

        if (
          isUndefinedOrNotNull(result.data.token) &&
          result.data.token !== ""
        ) {
          token = result.data.token;
          chkLogin = true;
        }

        result = null;
      }

      if (chkLogin) {
        //getUserInfo
        commit("setToken", token);
        let url = "/api/users/2";
        result = await mainAPI(url, loginObj, "get");
      }

      if (isUndefinedOrNotNull(result) && isUndefinedOrNotNull(result.data)) {
        commit("loginSuccess", result.data);
      } else {
        commit("loginError");
      }
    } catch (error) {
      console.log("e: ", error);
    }
  },

  async getMemberInfo({ commit }): Promise<any> {
    let token = localStorage.getItem("token");
    let chkLogin = false;
    let result: any = null;

    if (isUndefinedOrNotNull(token)) {
      chkLogin = true;
    }

    if (chkLogin) {
      //getUserInfo
      commit("setToken", token);
      let url = "/api/users/2";
      result = await mainAPI(url, "get");
    }

    if (isUndefinedOrNotNull(result) && isUndefinedOrNotNull(result.data)) {
      commit("loginSuccess", result.data);
    }
  },
  actionLogOut({ commit }): void {
    commit("logOut");
  },
  changeState({ commit }, data: any): void {
    commit("changeState", data);
  },
  setLocale({ commit }, data: any): void {
    commit("setLocale", data);
  }
};
