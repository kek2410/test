<template>
  <Login />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Login from "@/components/Login/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class LoginPage extends Vue {}
</script>
