<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- <v-list-item @click="$router.push({name: 'home'})"> -->
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'notice' }" exact>
          <v-list-item-action>
            <v-icon>mdi-note-text-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notice</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'todolist' }" exact>
          <v-list-item-action>
            <v-icon>mdi-calendar-multiple-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ToDoList</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'movielist' }" exact>
          <v-list-item-action>
            <v-icon>mdi-library-movie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>MovieList</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
      <v-menu v-if="isLogin === true" offset-y>
        <template v-slot:activator="{ on }">
          <v-chip>
            <v-icon left color="red">mdi-account</v-icon>
            <!-- {{$store.state.userInfo.name}} 님 -->
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
    <v-content>
      <router-view />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue, Prop } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
import { State as LoginState } from "@/store/modules/login/state";

const namespace = "login";

@Component
export default class App extends Vue {
  drawer: any = null;

  @Prop() source!: string;

  @State("login") login!: LoginState;

  get isLogin() {
    return this.login.isLogin;
  }

  @Action("actionLogOut", { namespace }) actionLogOut: any;

  @Getter("fullName", { namespace }) fullName!: string;

  mounted() {
    // fetching data as soon as the component's been mounted
  }

  loginOut(): void {
    this.actionLogOut();
  }
}
</script>
