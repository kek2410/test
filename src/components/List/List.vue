<template>
  <div>
    <v-card
      v-for="(list, index) in todolist"
      :key="index"
      :class="{ done: list.status === 'done' }"
      class="pa-3 mb-3"
    >
      <p>{{ list.memo }}</p>
      <p>{{ list.status }}</p>
      <v-btn
        v-if="list.status === 'created'"
        text
        icon
        color="red"
        @click="Control(index, 'done')"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn
        v-if="list.status === 'done'"
        text
        icon
        color="green"
        @click="Control(index, 'created')"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn text icon color="blue" @click="Delete(index)">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
      <v-btn
        v-if="list.status === 'created'"
        text
        icon
        color="yellow"
        @click="Edit(list.memo, index)"
      >
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { Action } from "vuex-class";

const namespace = "todoList";

@Component
export default class List extends Vue {
  @Prop() todolist!: object;

  @Action("statusControl", { namespace }) statusControl: any;
  @Action("listDelete", { namespace }) listDelete: any;

  mounted() {
    console.log("", this.todolist);
  }

  Control(index: number, status: string): void {
    this.statusControl({ index: index, status: status });
  }

  Delete(index: number): void {
    this.listDelete({ index: index });
  }

  Edit(memo: string, index: number): void {
    this.$emit("tryEdit", { memo, index, mode: "edit" });
  }
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
