<template>
  <div style="width:100%;">
    <v-row no-gutters>
      <v-card style="width:80%;" class="pa-2" outlined tile>
        {{ list.title }}
      </v-card>
      <v-card style="width:20%;" class="pa-2" outlined tile>
        {{ list.inputUser }}
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NoticeDetail extends Vue {
  @Prop() list!: any;
}
</script>
