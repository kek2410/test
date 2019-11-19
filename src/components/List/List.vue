<template>
  <div>
    <v-card
      v-for="(list, index) in todolist"
      :key="index"
      :class="{ done: list.status === 'done' }"
      class="pa-3 mb-3"
    >
      <ListGrid :list="list" :index="index" />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import ListGrid from "./ListGrid.vue";

@Component({
  components: {
    ListGrid
  }
})
export default class List extends Vue {
  @Prop() todolist!: object;

  mounted() {}
}
</script>
<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.1);
}

.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>
