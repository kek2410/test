<template>
  <div class="home">
    <v-btn @click="decrement">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn @click="increment">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <HelloWorld :msg="inputMsg" :testNumber="testNumber" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // data
  inputMsg: string = "Hello! Welcom VuePenta";
  testNumber: number = 0;
  // computed
  get exclamationMarks(): string {
    return Array(this.testNumber + 1).join("!");
  }

  // methods
  increment(): void {
    console.log("increment");
    this.testNumber++;
  }
  decrement(): void {
    console.log("decrement");
    this.testNumber--;
  }
}
</script>
