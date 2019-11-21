<template>
  <v-app id="inspire">
    <MainNavi :drawer="drawer" />
    <MainHeader :drawer="drawer" @fnDraw="fnDraw" />
    <v-content>
      <MainProgress />
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </v-content>
    <MainFooter />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MainNavi from "@/layout/components/main/MainNavi.vue";
import MainHeader from "@/layout/components/main/MainHeader.vue";
import MainFooter from "@/layout/components/main/MainFooter.vue";
import MainProgress from "@/layout/components/main/MainProgress.vue";

@Component({
  components: {
    MainNavi,
    MainHeader,
    MainFooter,
    MainProgress
  }
})
export default class DefaultLayout extends Vue {
  drawer: boolean = true;

  fnDraw(): void {
    this.drawer = !this.drawer;
  }

  get key() {
    return this.$route.name;
  }

  // 모든 훅 중에 가장 먼저 실행되는 훅이다.
  beforeCreate() {}

  // created 훅에서는 이제 data와 events가 활성화되어 접근할 수 있다. 여전히 템플릿과 가상돔은 마운트 및 렌더링되지 않은 상태이다.
  created() {}

  // 돔(DOM) 삽입 단계 Mounting 단계는 초기 렌더링 직전에 컴포넌트에 직접 접근할 수 있다. 서버렌더링에서는 지원하지 않는다.
  mounted() {}

  // 이 훅은 컴포넌트의 데이터가 변하여 재 렌더링이 일어나 후에 실행된다.
  updated() {
    console.log("updated");
  }

  // beforeDestroy 이 훅은 해체(뷰 인스턴스 제거)되기 직전에 호출된다.
  beforeDestroy() {}

  // destroyed 이 훅은 해체(뷰 인스턴스 제거)된 후에 호출된다
  destroyed() {}
}
</script>
