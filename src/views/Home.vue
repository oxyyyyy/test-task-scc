<template>
  <div class="home">
    <Dashboard />
    <div class="container see-news-link">
      <a
        href="#news"
        class="see-news-link__inner"
        v-smooth-scroll="{ duration: 1000 }"
      >
        See news
        <img
          src="@/assets/img/icons/anchor-link-icon.svg"
          alt=""
          class="see-news-link__icon"
        />
      </a>
    </div>
    <News id="news" />
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

<style lang="scss" scoped>
@import "@/assets/scss/_vars.scss";

.see-news-link {
  text-align: center;
}

.see-news-link__inner {
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all $trans-prop;

  &:hover {
    opacity: 0.6;
  }
}

.see-news-link__icon {
  margin-left: 12px;
  width: 18px;
  position: relative;
  animation: iconFloat 4s ease 0s infinite;
}

@keyframes iconFloat {
  from {
    bottom: 0;
  }

  10% {
    bottom: -3px;
  }

  20% {
    bottom: 0;
  }

  30% {
    bottom: -3px;
  }

  40% {
    bottom: 0;
  }
}
</style>
