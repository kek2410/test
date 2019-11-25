<template>
  <v-color-picker
    v-model="themeColor"
    :hide-canvas="true"
    :hide-inputs="true"
    :hide-mode-switch="true"
    :mode.sync="mode"
    :swatches="swatches"
    :show-swatches="showSwatches"
    class="mx-auto"
  ></v-color-picker>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

const namespace = "login";

@Component
export default class ColorPicker extends Vue {
  // color = "691A1A";
  mode = "rgba";
  showSwatches: boolean = true;

  swatches = [
    ["#FF0000", "#AA0000", "#550000"],
    ["#FFFF00", "#AAAA00", "#555500"],
    ["#00FF00", "#00AA00", "#005500"],
    ["#00FFFF", "#00AAAA", "#005555"],
    ["#0000FF", "#0000AA", "#000055"]
  ];

  @State(namespace) login!: any;

  get themeColor() {
    return this.login.themeColor;
  }

  set themeColor(val) {
    this.setThemeColor(val);
  }

  @Mutation("setThemeColor", { namespace }) setThemeColor!: any;

  created() {}

  doChangeThemeColor(): void {}
}
</script>
