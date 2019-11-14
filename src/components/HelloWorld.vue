<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ animals.age }}</h2>
    <h3>{{ animals.name }}</h3>
    <h4>{{ testNumber }}</h4>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";

interface Pet {
  age: number;
  name: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() testNumber!: number;
  animals: Pet = { age: 12, name: "kitty" };
}
</script>
