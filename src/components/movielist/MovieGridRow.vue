<template>
  <div style="width:100%;">
    <v-row no-gutters>
      <v-img style="width:10%;" :src="data.small_cover_image"></v-img>
      <v-card style="width:10%;" class="pa-2" outlined tile>{{
        data.title
      }}</v-card>
      <v-card style="width:70%;" class="pa-2" outlined tile>{{
        data.synopsis
      }}</v-card>
      <v-card style="width:10%;" class="pa-2" outlined tile>{{
        data.rating
      }}</v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  computed: {},
  methods: {}
})
export default class MovieGridRow extends Vue {
  @Prop() data!: any;

  mounted() {}
}
</script>
