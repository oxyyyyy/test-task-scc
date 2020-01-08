<template>
  <router-link
    :to="link"
    class="card-quests__item"
    :class="{ 'card-quests__item--active': isActive }"
  >
    <h6 class="card-quests__item-title">{{ title }}</h6>
    <span class="card-quests__item-number">{{ number }}</span>
    <div class="card-quests__item-status">
      <img
        src="@/assets/img/icons/quest-complete.svg"
        alt=""
        srcset=""
        width="45"
        v-if="isActive"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "QuestItem",
  props: {
    title: String,
    number: String,
    link: String,
    isActive: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.card-quests__item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-gap: 8px;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1rem;
  width: 100%;

  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(75, 73, 103, 0.472) 0%,
      rgba(27, 27, 49, 0) 100%
    );
  }

  &--active {
    .card-quests__item-title,
    .card-quests__item-number {
      color: $font-color-success;
    }
  }

  &:hover {
    .card-quests__item-title,
    .card-quests__item-number {
      opacity: 0.6;
    }
  }
}

.card-quests__item-title {
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.8rem;
  color: #fff;
  margin: 0;
  transition: all $trans-prop;
}

.card-quests__item-number {
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 2rem;
  color: #fff;
  text-align: center;
  transition: all $trans-prop;
}

.card-quests__item-status {
  text-align: center;
  transition: all $trans-prop;
}
</style>
