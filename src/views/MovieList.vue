<template>
  <div>
    <v-btn @click="searchMovie">조회</v-btn>
    <MovieGrid :movieList="movieList" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MovieGrid from "@/components/movielist/MovieGrid.vue";
import { openAPI } from "@/api/axios";

@Component({
  components: {
    MovieGrid
  }
})
export default class MovieList extends Vue {
  // data
  movieList: any = null;

  url: string = "https://yts.lt/api/v2/list_movies.json?sort_by=rating";
  params: {} = {};
  //mounted
  mounted() {
    // this.searchMovie();
  }

  //methods
  async searchMovie() {
    const result = await openAPI(this.url, this.params);
    this.movieList = result.data.movies;
  }
}
</script>
