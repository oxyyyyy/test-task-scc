<template>
  <div class="dashboard-grid container">
    <Profile class="card-placeholder" style="grid-area: profile" />
    <Teams class="card-placeholder" style="grid-area: teams" />
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
.dashboard-grid {
  display: grid;
  grid-template-areas:
    "profile teams . ."
    "profile teams . ."
    ". . . .";
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  padding-top: 60px;
}
</style>
