<template>
  <div>
    <h1>Notice Detail</h1>
  </div>
</template>
<script>
export default {
  name: "Notice",
  components: {},
  computed: {},
  beforeCreate(to, from, next) {
    console.log("before Create!");
  },
  beforeRouteEnter(to, from, next) {
    console.log("before RouteEnter!");
  }
};
</script>
