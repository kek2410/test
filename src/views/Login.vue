<template>
  <v-container style="max-width:350px;">
    <v-row>
      <v-col cols="12">
        <v-alert :value="isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력해주세요." />
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            />
            <v-btn block depressed large @click="loginGo({ email, password })">
              로그인
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, Action } from "vuex-class";
import { ProfileState } from "@/store/modules/login/state";

const namespace = "login";

@Component
export default class LoginPage extends Vue {
  email: string = "";
  password: string = "";

  @State("login") login!: ProfileState;

  get isLoginError() {
    return this.login.isLoginError;
  }

  get isLogin() {
    return this.login.isLogin;
  }

  @Action("login", { namespace }) actionLogin: any;
  @Getter("fullName", { namespace }) fullName!: string;

  mounted() {
    // fetching data as soon as the component's been mounted
  }

  loginGo(data: object): void {
    this.actionLogin(data);
  }
}
</script>
