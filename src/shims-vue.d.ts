//typescript 컴파일러가 vue를 인식할 수 있는 모듈.
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
