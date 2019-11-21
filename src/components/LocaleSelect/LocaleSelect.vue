<template>
  <v-col class="d-flex" cols="12" sm="2">
    <v-select
      v-model="slocale"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Select"
      outlined
      dense
      v-on:change="onChagne()"
    ></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component
export default class LocaleSelect extends Vue {
  slocale = "";
  items = [
    { state: "대한민국", abbr: "ko" },
    { state: "English", abbr: "en" },
    { state: "日本語", abbr: "ja" }
  ];

  @State("locale") locale!: any;

  @Mutation("setLocale") setLocale!: any;

  created() {
    this.locale;
    this.setLocale({ value: true });
  }

  mounted() {
    this.slocale = this.locale;
  }

  onChagne() {
    console.log(this.slocale);
    this.setLocale(this.slocale);
  }

  // doChangeThemeColor(): void {
  //   this.$store.commit("setThemeColor", this.color);
  // }
}
</script>
