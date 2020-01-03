<template>
  <div class="dashboard-grid container">
    <Profile class="card" style="grid-area: profile" />
    <Teams class="card" style="grid-area: teams" />
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>

<script>
import Profile from "@/components/Dashboard/Profile.vue";
import Teams from "@/components/Dashboard/Teams.vue";

export default {
  name: "Dashboard",
  components: {
    Profile,
    Teams
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
  grid-template-rows: repeat(3, 200px);
  padding-top: 60px;
}
</style>
