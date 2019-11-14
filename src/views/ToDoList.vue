<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 center>
        <h1>투두 리스트</h1>
        <p>
          전체 할일: {{ getListLength }} / 완료된 할일 {{ countDone }} / 남은
          할일 : {{ getListLength - countDone }}
        </p>
      </v-flex>
      <v-flex xs6 pa-2>
        <List :todolist="getTodoList" @tryEdit="tryEdit" />
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd @cancelEdit="cancelEdit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import List from "@/components/List/List.vue";
import ListAdd from "@/components/List/ListAdd.vue";
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { State, Getter, Action } from "vuex-class";
import { State as todoState, InputState } from "@/store/modules/todoList/state";

const namespace = "todoList";

@Component({
  components: {
    List,
    ListAdd
  }
})
export default class ToDoList extends Vue {
  @State(namespace) state!: todoState;

  get index() {
    return this.state.index;
  }

  set index(val) {
    this.changeState({ index: val });
  }

  get mode() {
    return this.state.mode;
  }

  set mode(val) {
    this.changeState({ mode: val });
  }

  get memo() {
    return this.state.memo;
  }

  set memo(val) {
    this.changeState({ memo: val });
  }

  get getListLength() {
    return this.state.todolist.length;
  }

  get getTodoList() {
    return this.state.todolist;
  }

  @Getter("countDone", { namespace }) countDone!: string;

  @Action("statusControl", { namespace }) statusControl: any;
  @Action("listDelete", { namespace }) listDelete: any;
  @Action("changeState", { namespace }) changeState: any;

  mounted() {}

  modeControl(data: string): void {
    this.mode = data;
  }

  todostatusControl(data: InputState): void {
    this.statusControl(data);
  }
  todolistDelete(data: InputState): void {
    this.listDelete(data);
  }

  tryEdit(data: any): void {
    console.log("tryEdit");
    this.memo = data.memo;
    this.index = data.index;
    this.mode = data.mode;
  }

  cancelEdit(): void {
    console.log("cancelEdit");
    this.memo = "";
    this.index = -1;
    this.mode = "add";
  }
}
</script>
