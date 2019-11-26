<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list v-for="(data, index) in menuList" :key="index" dense>
      <MainNaviList :data="data" />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { State as LoginState } from "@/store/modules/Login/state";
import MainNaviList from "@/layout/components/Main/MainNaviList.vue";

@Component({
  components: {
    MainNaviList
  }
})
export default class MainNavi extends Vue {
  @Prop() data!: any;
  @Prop() drawer!: any;

  @State("login") login!: LoginState;

  get menuList() {
    return this.login.menuList;
  }

  mounted() {
    // fetching data as soon as the component's been mounted
  }
}
</script>
