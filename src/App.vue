<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic");
@import "@/assets/_vars.scss";

body {
  color: #fff;
  background: $bg-color;
  font-family: "Roboto", sans-serif;
}

.container {
  padding: 0 30px;
}

.card {
  box-shadow: 0px 27.7047px 27.7047px rgba(0, 0, 0, 0.1);
  background: $bg-dark-color;
}
</style>
