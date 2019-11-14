<template>
  <div>
    MOVIEGRID
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-card style="width:10%;" class="pa-2" outlined tile>이미지</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>제목</v-card>
        <v-card style="width:70%;" class="pa-2" outlined tile>시놉시스</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>평점</v-card>
      </v-row>
      <v-row
        v-for="(list, index) in movieList"
        :key="index"
        style="height:160px;"
        no-gutters
      >
        <!-- <v-col v-for="(data, colIdx) in list" :key="colIdx" cols="12" sm="4"> -->
        <v-img :src="list.small_cover_image" style="width:10%;" contain></v-img>
        <v-card style="width:10%;" class="pa-2" outlined tile>{{
          list.title
        }}</v-card>
        <v-card style="width:70%;" class="pa-2" outlined tile>{{
          list.synopsis
        }}</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>{{
          list.rating
        }}</v-card>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MovieGrid",
  props: ["movieList"],
  data() {
    return {};
  },
  methods: {
    deleteLine(i) {
      this.notices.splice(i, 1);
    }
  }
};
</script>
