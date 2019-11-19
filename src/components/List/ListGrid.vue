<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { InputState } from "@/store/modules/todoList/state";

const namespace = "todoList";

@Component
export default class ListGrid extends Vue {
  @Prop() list!: object;
  @Prop() index!: number;

  @State(namespace) state!: InputState;

  get stindex() {
    return this.state.index;
  }

  set stindex(val) {
    this.$store.commit("todoList/setIndex", val);
  }

  get mode() {
    return this.state.mode;
  }

  set mode(val) {
    this.$store.commit("todoList/setMode", val);
  }

  get memo() {
    return this.state.memo;
  }

  set memo(val) {
    this.$store.commit("todoList/setMemo", val);
  }

  @Action("statusControl", { namespace }) statusControl: any;
  @Action("listDelete", { namespace }) listDelete: any;

  mounted() {}

  Control(index: number, status: string): void {
    this.statusControl({ index: index, status: status });
  }

  Delete(index: number): void {
    this.listDelete({ index: index });
  }

  Edit(memo: string, index: number): void {
    this.memo = memo;
    this.stindex = index;
    this.mode = "edit";
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
