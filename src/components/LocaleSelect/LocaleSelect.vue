<template>
  <v-col class="d-flex" cols="12" sm="2">
    <v-select
      v-model="selectValue"
      :items="items"
      item-text="text"
      item-value="value"
      label="Select"
      outlined
      dense
      id="testtest"
      name="testtest"
      @change="changeSelect"
    ></v-select>
    <v-btn @click="changeSelect">
      Action
    </v-btn>
    <button class="test111" @click="changeSelect">aa</button>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
// import { mutations } from "../../store/modules/Login/mutations";

const namespace = "login";

@Component({})
export default class LocaleSelect extends Vue {
  items = [
    { text: "대한민국", value: "ko" },
    { text: "English", value: "en" },
    { text: "日本語", value: "ja" }
  ];

  selectValue = "";

  @State(namespace) login!: any;
  @Action("setLocale", { namespace }) setLocale: any;

  changeSelect(val: any): void {
    this.setLocale(val);
    // this.$store.commit("login/setLocale", val);
  }

  created() {}

  mounted() {
    this.selectValue = this.login.locale;
  }
}
</script>
