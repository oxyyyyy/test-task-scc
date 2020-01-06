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

  @media screen and (max-width: 1350px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $bg-nav-color;

    a {
      font-size: 2rem;

      &:not(:last-child) {
        margin-right: 0;
      }
    }

    .btn-gradient-inner {
      font-size: 2rem;
      line-height: 2.2rem;
      padding: 15px 28px;
    }
  }
}
</style>
