<template>
  <div>
    <v-btn @click="searchMovie">조회</v-btn>
    <MovieGrid :movie-list="movieList" />
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
// import Component from "vue-class-component";
import { Vue, Component } from "vue-property-decorator";
import MovieGrid from "@/components/movielist/MovieGrid.vue";
// import MovieDetail from "@/components/movielist/MovieDetail.vue";
// import { Axios } from "@/axios";
import customAxios from "@/axios";

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
    this.searchMovie();
  }

  //methods
  async searchMovie() {
    this.movieList = await customAxios(this.url, this.params);
    // this.movieList = await customAxios(this.url);
  }
}
</script>
