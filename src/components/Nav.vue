<template>
  <nav class="nav">
    <tasty-burger-button
      :type="buttonType"
      :active="isActive"
      :size="size"
      :color="color"
      :active-color="activeColor"
      v-on:toggle="onToggle"
      class="nav__burger"
    />
    <div class="nav__links" :class="{ navLinksActive: navIsActive }">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Marketplace</router-link>
      <router-link to="/packs">Booster Packs</router-link>
      <router-link to="/leaderboard">Leaderboard</router-link>
      <router-link to="/battleground">
        <div class="btn btn--gradient btn--gradient-mix">
          <div class="btn-gradient-inner">Battleground</div>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { TastyBurgerButton } from "vue-tasty-burgers";
import "vue-tasty-burgers/dist/vue-tasty-burgers.css";

export default {
  name: "Nav",
  components: {
    "tasty-burger-button": TastyBurgerButton
  },
  data() {
    return {
      buttonType: "elastic",
      isActive: false,
      size: "m",
      color: "white",
      activeColor: "white",
      navIsActive: false
    };
  },
  methods: {
    onToggle() {
      this.navIsActive = !this.navIsActive;
    }
  }
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

    .nav__links {
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
      opacity: 0;
      visibility: hidden;
      transition: all $trans-prop;

      &.navLinksActive {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

.nav__burger {
  display: none;
  position: relative;
  z-index: 500;

  @media screen and (max-width: 1350px) {
    display: block;
  }
}
</style>
