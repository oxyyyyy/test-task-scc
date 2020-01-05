<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Marketplace</router-link>
    <router-link to="/packs">Booster Packs</router-link>
    <router-link to="/leaderboard">Leaderboard</router-link>
    <router-link to="/battleground">
      <div class="btn btn--gradient btn--gradient-mix">
        <div class="btn-gradient-inner">Battleground</div>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.nav {
  a {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    padding: 12px;

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
}
</style>
