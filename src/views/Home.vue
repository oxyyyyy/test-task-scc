<template>
  <div class="home">
    <Dashboard />
    <News />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import News from "@/components/News.vue";

export default {
  name: "home",
  components: {
    Dashboard,
    News
  }
};
</script>
