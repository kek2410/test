<template>
  <div>
    <v-container>
      <!-- <v-row no-gutters>
        <v-card style="width:80%;" class="pa-2" outlined tile>내용</v-card>
        <v-card style="width:20%;" class="pa-2" outlined tile>작성자</v-card>
      </v-row>-->
      <v-row v-for="data in notice_data" :key="data" no-gutters>
        <v-card style="width:80%;" class="pa-2" outlined tile>{{
          data.title
        }}</v-card>
        <v-card style="width:20%;" class="pa-2" outlined tile>{{
          data.inputUser
        }}</v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue, Prop } from "vue-property-decorator";

@Component
export default class NoticeGrid extends Vue {
  @Prop() notice_data!: any;
}
</script>
