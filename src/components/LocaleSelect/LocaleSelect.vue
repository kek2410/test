<template>
  <v-col class="d-flex" cols="12" sm="2">
    <v-select
      v-model="locale"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Select"
      outlined
      dense
    ></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

const namespaece = "login";

@Component
export default class LocaleSelect extends Vue {
  items = [
    { state: "대한민국", abbr: "ko" },
    { state: "English", abbr: "en" },
    { state: "日本語", abbr: "ja" }
  ];

  @State(namespaece) login!: any;

  get locale() {
    return this.login.locale;
  }

  set locale(val) {
    this.$store.commit("login/setLocale", val);
  }

  created() {}

  mounted() {}
}
</script>
