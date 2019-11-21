<template>
  <v-color-picker
    v-model="appcolor"
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

@Component
export default class ColorPicker extends Vue {
  color = "691A1A";
  mode = "rgba";
  showSwatches: boolean = true;

  swatches = [
    ["#FF0000", "#AA0000", "#550000"],
    ["#FFFF00", "#AAAA00", "#555500"],
    ["#00FF00", "#00AA00", "#005500"],
    ["#00FFFF", "#00AAAA", "#005555"],
    ["#0000FF", "#0000AA", "#000055"]
  ];

  @State("themeColor") themeColor!: any;

  @Mutation("setThemeColor") setThemeColor!: any;

  get appcolor() {
    return this.color;
  }

  set appcolor(val) {
    console.log(val);
    this.color = val;
  }

  created() {
    this.themeColor;
    this.setThemeColor({ value: true });
  }

  doChangeThemeColor(): void {
    this.$store.commit("setThemeColor", this.color);
  }
}
</script>
