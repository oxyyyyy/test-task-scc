<template>
  <router-link :to="link" class="card card-default">
    <div class="card__title-with-icon">
      <img v-if="icon" :src="icon" alt="" class="card__icon" />
      <h4 class="card__title-text">{{ title }}</h4>
    </div>
    <figure
      class="card__img"
      :style="{ backgroundImage: `url(${image})` }"
    ></figure>
  </router-link>
</template>

<script>
export default {
  name: "DefaultCard",
  props: {
    title: String,
    icon: String,
    image: String,
    link: {
      type: String,
      default: "/"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-default {
  &:hover {
    .card__img {
      opacity: 0.6;
    }
  }
}
</style>
