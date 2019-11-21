<template>
  <div no-gutters>
    <h1>{{ msg }}</h1>
    <h2>{{ animals.age }}</h2>
    <h3>{{ animals.name }}</h3>
    <h4>{{ testNumber }}</h4>
    <h5>{{ $t("hello") }}</h5>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() testNumber!: number;
  animals = { age: 12, name: "kitty" };
}
</script>
