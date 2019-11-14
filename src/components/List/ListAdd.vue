<template>
  <div>
    <v-textarea v-model="memo" outlined label="투두리스트를 입력하세요." />
    <v-btn v-if="mode === 'add'" @click="todolistAdd">리스트 추가</v-btn>
    <v-btn v-if="mode === 'edit'" @click="todolistEdit">리스트 수정</v-btn>
    <v-btn v-if="mode === 'edit'" @click="cancelEdit">수정 취소</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
// import { Prop } from "vue-property-decorator";
import { InputState } from "@/store/modules/todoList/state";

const namespace = "todoList";

@Component
export default class ListAdd extends Vue {
  // memo: string = "";

  @State(namespace) state!: InputState;

  get index() {
    return this.state.index;
  }

  get mode() {
    return this.state.mode;
  }

  get memo() {
    return this.state.memo;
  }
  set memo(val) {
    this.changeState({ memo: val });
  }

  @Action("listAdd", { namespace }) listAdd: any;
  @Action("listEdit", { namespace }) listEdit: any;
  @Action("changeState", { namespace }) changeState: any;

  mounted() {}

  todolistAdd(): void {
    if (this.memo === "") {
      alert("할일을 입력해주세요.");
    } else {
      this.listAdd({ memo: this.memo, index: this.index, mode: this.mode });
    }
  }

  todolistEdit(): void {
    if (this.memo === "") {
      alert("할일을 입력해주세요.");
    } else {
      this.listEdit({ memo: this.memo, index: this.index, mode: this.mode });
    }
  }

  cancelEdit(): void {
    this.$emit("cancelEdit");
  }
}
</script>
