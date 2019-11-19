<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-card style="width:80%;" class="pa-2" outlined tile>내용</v-card>
        <v-card style="width:20%;" class="pa-2" outlined tile>작성자</v-card>
      </v-row>
      <v-row v-for="(list, index) in notice_data" :key="index" no-gutters>
        <NoticeGridRow :list="list" />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import NoticeGridRow from "./NoticeGridRow.vue";

@Component({
  components: { NoticeGridRow }
})
export default class NoticeGrid extends Vue {
  @Prop() notice_data!: any;
}
</script>
