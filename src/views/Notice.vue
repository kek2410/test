<template>
  <NoticeGrid :notice_data="notice_data" />
</template>

<script lang="ts">
import NoticeGrid from "@/components/notice/NoticeGrid.vue";
import Component from "vue-class-component";
import { Vue, Prop, Inject, Provide } from "vue-property-decorator";

@Component({
  components: {
    NoticeGrid
  }
})
export default class Notice extends Vue {
  // data
  notice_data = [
    {
      title: "공지사항1",
      inputUser: "오재인"
    },
    {
      title: "공지사항2",
      inputUser: "홍길동"
    },
    {
      title: "공지사항3",
      inputUser: "고길동"
    },
    {
      title: "공지사항4",
      inputUser: "김영수"
    }
  ];
}
</script>
