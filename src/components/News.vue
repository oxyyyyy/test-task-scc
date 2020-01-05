<template>
  <div class="news-grid container">
    <div class="card-placeholder"></div>
    <div class="card-placeholder"></div>
  </div>
</template>

<script>
// import Profile from "@/components/Dashboard/Profile.vue";

export default {
  name: "News",
  components: {}
};
</script>

<style scoped lang="scss">
.news-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  padding-top: 160px;
}
.card-placeholder {
  min-height: 500px;
}
</style>
