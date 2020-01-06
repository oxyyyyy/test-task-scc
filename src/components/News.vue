<template>
  <div class="news-grid container">
    <main class="news-grid__content">
      <div class="card__title-with-icon" style="padding-left: 20px;">
        <img
          src="@/assets/img/icons/news-icon.svg"
          alt=""
          class="card__icon"
          width="20"
        />
        <h4 class="card__title-text">news</h4>
      </div>
      <NewsCardBig
        image="./assets/img/cards/news-card-1.png"
        date="Jun 27, 2019"
        title="3 New Monsters"
        excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
        route="/post-1"
      />
      <NewsCardBig
        image="./assets/img/cards/news-card-2.png"
        date="Jun 16, 2019"
        title="Soon in Nethernite"
        excerpt="3 new monsters are coming to the World of Nethernite. They are unique powerful representatives of Undead, Beast and Nature factions."
        route="/post-2"
      />
    </main>
    <aside class="news-grid__sidebar">
      <div
        class="card__title-with-icon"
        style="display: flex; justify-content: flex-end; min-height: 20px; padding-right: 20px;"
      >
        <router-link to="/news-archive" class="card__top-right-link">
          <span>See All News</span>
          <img src="@/assets/img/icons/arrow-right.svg" alt="" width="26"
        /></router-link>
      </div>
      <div class="news-grid__sidebar-inner">
        <NewsCardSmall
          date="Jun 27, 2019"
          title="Battle Season #4"
          excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
          route="/post-3"
        />
        <NewsCardSmall
          date="Jun 27, 2019"
          title="Wheel of Fortune"
          excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
          route="/post-4"
        />
        <NewsCardSmall
          date="Jun 27, 2019"
          title="Wheel of Fortune"
          excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
          route="/post-5"
        />
        <NewsCardSmall
          date="Jun 27, 2019"
          title="Battle Season #4"
          excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
          route="/post-6"
        />
        <NewsCardSmall
          date="Jun 27, 2019"
          title="Wheel of Fortune"
          excerpt="Achievements are now available in the World of Nethernite! More than 30 achievements on various topics await you, each of them has..."
          route="/post-7"
        />
      </div>
    </aside>
  </div>
</template>

<script>
import NewsCardBig from "@/components/News/NewsCardBig.vue";
import NewsCardSmall from "@/components/News/NewsCardSmall.vue";

export default {
  name: "News",
  components: {
    NewsCardBig,
    NewsCardSmall
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.news-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: $container-size;
  padding-top: 160px;

  @media screen and (max-width: $screen-medium-big) {
    grid-template-columns: 1fr;
    padding-top: 100px;
  }

  @media screen and (max-width: $screen-small) {
    padding-top: 50px;
  }
}

.news-grid__sidebar-inner {
  box-shadow: 0px 28px 28px rgba(0, 0, 0, 0.1);
  background: $bg-dark-color;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>
