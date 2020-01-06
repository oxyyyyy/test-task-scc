<template>
  <router-link :to="route" class="news-card-big-route">
    <article
      class="news-card-big"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <p class="news-card-big__date">{{ date }}</p>
      <h5 class="news-card-big__title">{{ title }}</h5>
      <p class="news-card-big__excerpt">{{ excerpt }}</p>
    </article>
  </router-link>
</template>

<script>
// import Profile from "@/components/Dashboard/Profile.vue";

export default {
  name: "NewsCardBig",
  props: {
    date: String,
    title: String,
    excerpt: String,
    image: String,
    route: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.news-card-big-route {
  display: flex;

  &:not(:last-child) {
    margin-bottom: $container-size;

    @media screen and (max-width: $screen-small) {
      margin-bottom: $container-size-small;
    }
  }
}

.news-card-big {
  min-height: 465px;
  box-shadow: 0px 28px 28px rgba(0, 0, 0, 0.1);
  background: $bg-dark-color;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  position: relative;
  transition: all $trans-prop;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: linear-gradient(180deg, rgba(32, 30, 46, 0) 0%, #201e2e 100%);
    opacity: 0.9;
    transition: all $trans-prop;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
}

.news-card-big__date {
  font-weight: 500;
  font-size: 1rem;
  line-height: (39/46);
  color: #afabe5;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
}

.news-card-big__title {
  font-weight: 500;
  font-size: 2rem;
  line-height: (56/66);
  color: #fff;
  text-shadow: 0px 11.2607px 5.63035px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
}

.news-card-big__excerpt {
  font-size: 1.4rem;
  line-height: (72/45);
  color: #afabe6;
  margin: 0;
  position: relative;
  z-index: 10;
}
</style>
