<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Marketplace</router-link>
    <router-link to="/packs">Booster Packs</router-link>
    <router-link to="/leaderboard">Leaderboard</router-link>
    <router-link to="/battleground">Battleground</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped lang="scss">
@import "@/assets/_vars.scss";

.nav {
  background-color: $bg-nav-color;
  padding: 15px 160px 15px 256px;

  a {
    font-size: 1rem;
    color: #fff;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 118px;
    }
  }
}
</style>
