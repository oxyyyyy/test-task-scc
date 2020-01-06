<template>
  <div class="dashboard-grid container">
    <Profile class="dashboard-grid__profile card-placeholder" />
    <Teams class="dashboard-grid__team card-placeholder" />
    <DefaultCard
      title="profile"
      icon="./assets/img/icons/card-icon-3.svg"
      image="./assets/img/cards/card-1.png"
    />
    <DefaultCard
      title="altar"
      icon="./assets/img/icons/card-icon-4.svg"
      image="./assets/img/cards/card-2.png"
    />
    <div class="card-placeholder"></div>
    <DefaultCard
      title="calendar"
      icon="./assets/img/icons/card-icon-6.svg"
      image="./assets/img/cards/card-3.png"
    />
    <DefaultCard
      title="inventory"
      icon="./assets/img/icons/card-icon-7.svg"
      image="./assets/img/cards/card-4.png"
    />
    <DefaultCard
      title="wiki"
      icon="./assets/img/icons/card-icon-8.svg"
      image="./assets/img/cards/card-5.png"
    />
    <DefaultCard
      title="bosses"
      icon="./assets/img/icons/card-icon-9.svg"
      image="./assets/img/cards/card-6.png"
    />
    <DefaultCard
      title="fortune wheel"
      icon="./assets/img/icons/card-icon-10.svg"
      image="./assets/img/cards/card-7.png"
    />
  </div>
</template>

<script>
import Profile from "@/components/Dashboard/Profile.vue";
import Teams from "@/components/Dashboard/Teams.vue";
import DefaultCard from "@/components/Dashboard/DefaultCard.vue";

export default {
  name: "Dashboard",
  components: {
    Profile,
    Teams,
    DefaultCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.dashboard-grid {
  display: grid;
  grid-template-areas:
    "profile teams . ."
    "profile teams . ."
    ". . . .";
  grid-gap: $container-size;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  padding-top: 60px;

  @media screen and (max-width: $screen-medium-big) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 200px);
    grid-template-areas:
      "profile teams"
      "profile teams"
      ". ."
      ". ."
      ". ."
      ". .";
  }

  @media screen and (max-width: $screen-small) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 200px);
    grid-template-areas:
      "profile"
      "profile"
      "teams"
      "teams"
      "."
      "."
      "."
      "."
      "."
      "."
      "."
      ".";
    grid-gap: $container-size-small;
  }
}

.dashboard-grid__profile {
  grid-area: profile;
}

.dashboard-grid__team {
  grid-area: teams;
}
</style>
