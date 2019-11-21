<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card style="width:10%;" class="pa-2" outlined tile>이미지</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>제목</v-card>
        <v-card style="width:70%;" class="pa-2" outlined tile>시놉시스</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>평점</v-card>
      </v-row>
      <v-row
        v-for="(data, index) in movieList"
        :key="index"
        style="height:160px;"
        no-gutters
      >
        <MovieGridRow :data="data" />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MovieGridRow from "./MovieGridRow.vue";

@Component({
  components: {
    MovieGridRow
  },
  computed: {
    // ...mapActions(namespace, ["actionLogin"])
  },
  methods: {
    // ...mapActions(namespace, ["actionLogin"])
  }
})
export default class MovieGrid extends Vue {
  @Prop() movieList!: any;

  mounted() {}
}
</script>
