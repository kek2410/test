<template>
  <v-container style="max-width:350px;" name="loginCon">
    <v-row>
      <v-col cols="12">
        <v-alert :value="isLoginError" type="error">아이디와 비밀번호를 확인해주세요.</v-alert>
        <v-alert :value="isLogin" type="success">로그인이 완료되었습니다.</v-alert>
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
              keydown
              @keyup.13="loginGo"
            />
            <v-btn block depressed large @click="loginGo">로그인</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
// import { State, Getter } from "vuex-class";
import { State as LoginState } from "@/store/modules/login/state";
// import { mapActions } from "vuex";

const namespace = "login";

@Component({
  computed: {
    // ...mapActions(namespace, ["actionLogin"])
  },
  methods: {
    // ...mapActions(namespace, ["actionLogin"])
  }
})
export default class LoginPage extends Vue {
  password: string = "";

  @State("login") login!: LoginState;
  @Action("changeState", { namespace }) changeState: any;

  get email() {
    console.log(this.login.email);
    return this.login.email;
  }

  set email(val: any) {
    // this.$store.state.login.email = val;
    this.changeState({ email: val });
  }

  get isLoginError() {
    return this.login.isLoginError;
  }

  get isLogin() {
    return this.login.isLogin;
  }

  @Action("actionLogin", { namespace }) actionLogin: any;
  @Getter("fullName", { namespace }) fullName!: string;

  mounted() {
    // fetching data as soon as the component's been mounted
  }

  loginGo(): void {
    const data = {
      email: this.email,
      password: this.password
    };
    this.actionLogin(data);
    // this.$store.dispatch("actionLogin", data, { root: true });
  }
}
</script>
