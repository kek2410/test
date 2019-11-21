<template>
  <v-app-bar app color="themeColor" dark clipped-left>
    <v-app-bar-nav-icon @click.stop="fnDraw" />
    <v-toolbar-title>{{ $t("logo") }}</v-toolbar-title>
    <v-spacer />
    <ColorPicker />
    <LocaleSelect style="margin-top: 25px;" />
    <v-menu v-if="isLogin === true" offset-y>
      <template v-slot:activator="{ on }">
        <v-chip>
          <v-icon left color="red">mdi-account</v-icon>
          {{ FullName }} 님
        </v-chip>
        <v-btn icon dark v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item router :to="{ name: 'mypage' }">
          <v-list-item-title>My Page</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="loginOut">Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-else router :to="{ name: 'login' }" dark>Login</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { State as LoginState } from "@/store/modules/login/state";
import ColorPicker from "@/components/ColorPicker/ColorPicker.vue";
import LocaleSelect from "@/components/LocaleSelect/LocaleSelect.vue";

const namespace = "login";

@Component({
  components: {
    ColorPicker,
    LocaleSelect
  }
})
export default class MainNavi extends Vue {
  @State("login") login!: LoginState;

  @Prop() drawer!: any;

  get isLogin() {
    return this.login.isLogin;
  }

  get FullName() {
    return this.login.userInfo.first_name + this.login.userInfo.last_name;
  }

  @Action("actionLogOut", { namespace }) actionLogOut: any;
  @Getter("themeColor") themeColor: any;

  loginOut(): void {
    this.actionLogOut();
  }

  fnDraw(): void {
    this.$emit("fnDraw");
  }

  mounted() {
    // fetching data as soon as the component's been mounted
  }
}
</script>
