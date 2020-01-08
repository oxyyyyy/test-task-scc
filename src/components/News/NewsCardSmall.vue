<template>
  <router-link :to="route" class="news-card-small-route">
    <article class="news-card-small">
      <p class="news-card-small__date">{{ date }}</p>
      <h5 class="news-card-small__title">{{ title }}</h5>
      <p class="news-card-small__excerpt">{{ excerpt }}</p>
    </article>
  </router-link>
</template>

<script>
export default {
  name: "NewsCardSmall",
  props: {
    date: String,
    title: String,
    excerpt: String,
    route: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.news-card-small-route {
  &:not(:last-child) {
    margin-bottom: 45px;
  }

  &:hover {
    .news-card-small__title,
    .news-card-small__date,
    .news-card-small__excerpt {
      opacity: 0.6;
    }
  }
}

.news-card-small__date {
  font-weight: 500;
  font-size: 1rem;
  line-height: (39/46);
  color: #afabe5;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 1.6rem;
  position: relative;
  z-index: 10;
  transition: all $trans-prop;
}

.news-card-small__title {
  font-weight: 500;
  font-size: 1.4rem;
  line-height: (56/66);
  color: #fff;
  text-shadow: 0px 11.2607px 5.63035px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
  transition: all $trans-prop;
}

.news-card-small__excerpt {
  font-size: 1rem;
  line-height: (72/45);
  color: #afabe6;
  margin: 0;
  position: relative;
  z-index: 10;
  transition: all $trans-prop;
}
</style>
