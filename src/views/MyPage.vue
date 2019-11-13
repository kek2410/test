<template>
  <div>
    <h3>id는 {{ login.userInfo.id }}</h3>
    <h2>{{ login.userInfo.name }}님 환영합니다.</h2>
    <h1>E-mail: {{ login.userInfo.email }}</h1>
  </div>
</template>

<script lang="ts">
import { Prop, Inject, Provide } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, Action } from "vuex-class";
import { ProfileState } from "@/store/modules/login/state";

const namespace: string = "login";

@Component
export default class MyPage extends Vue {
  email: string = "";
  password: string = "";

  @State("login") login!: ProfileState;

  mounted() {}
}
</script>
