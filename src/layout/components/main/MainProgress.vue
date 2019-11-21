<template>
  <div style="min-height: 4px;">
    <v-progress-linear
      v-model="value"
      :active="show"
      :indeterminate="query"
      :query="true"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MainProgress extends Vue {
  value = 0;
  query = false;
  show = true;
  interval = 0;

  mounted() {
    this.queryAndIndeterminate();
  }

  beforeDestroy() {
    clearInterval(this.interval);
  }

  queryAndIndeterminate() {
    this.query = true;
    this.show = true;
    this.value = 0;

    // setTimeout(() => {
    //   this.query = false;

    //   this.interval = setInterval(() => {
    //     if (this.value === 100) {
    //       clearInterval(this.interval);
    //       this.show = false;
    //       return setTimeout(this.queryAndIndeterminate, 2000);
    //     }
    //     this.value += 25;
    //   }, 1000);
    // }, 2500);
  }
}
</script>
