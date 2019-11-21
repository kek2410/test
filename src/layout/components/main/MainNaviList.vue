<template>
  <v-list-item router :to="{ name: data.name }" exact>
    <v-list-item-action>
      <v-icon>{{ data.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ data.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class MainNavi extends Vue {
  drawer: any = null;

  @Prop() data!: any;

  mounted() {
    // fetching data as soon as the component's been mounted
  }
}
</script>
