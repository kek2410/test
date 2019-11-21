<template>
  <v-app id="inspire">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class DefaultLayout extends Vue {
  get getLayOut() {
    return this.$route.meta.layout || "default";
  }
}
</script>
