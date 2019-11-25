<template>
  <div style="min-height: 4px;">
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="red"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class MainProgress extends Vue {
  bufferValue = 20;
  value = 90;
  interval = 0;

  mounted() {
    this.startBuffer();
  }

  beforeDestroy() {
    clearInterval(this.interval);
  }

  startBuffer() {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.value += Math.random() * (15 - 5) + 5;
      this.bufferValue += Math.random() * (15 - 5) + 6;
    }, 2000);
  }
}
</script>
