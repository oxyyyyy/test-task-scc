<template>
  <div id="app">
    <div class="top-bar">
      <Nav />
      <Status />
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Status from "@/components/Status.vue";

export default {
  components: {
    Nav,
    Status
  }
};
</script>

<style lang="scss">
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=cyrillic");
@import "@/assets/scss/_vars.scss";
@import "@/assets/scss/_common.scss";
</style>
