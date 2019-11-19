<template>
  <div style="width:100%;">
    <v-row no-gutters>
      <v-img style="width:10%;" :src="list.small_cover_image"></v-img>
      <v-card style="width:10%;" class="pa-2" outlined tile>{{
        list.title
      }}</v-card>
      <v-card style="width:70%;" class="pa-2" outlined tile>{{
        list.synopsis
      }}</v-card>
      <v-card style="width:10%;" class="pa-2" outlined tile>{{
        list.rating
      }}</v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  computed: {
    // ...mapActions(namespace, ["actionLogin"])
  },
  methods: {
    // ...mapActions(namespace, ["actionLogin"])
  }
})
export default class MovieGridRow extends Vue {
  @Prop() list!: any;

  mounted() {}
}
</script>
