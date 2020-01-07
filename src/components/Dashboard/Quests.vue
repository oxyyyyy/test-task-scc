<template>
  <div class="card card-default card-quests">
    <div class="card__title-with-icon">
      <img src="@/assets/img/icons/card-icon-5.svg" alt="" class="card__icon" />
      <h4 class="card__title-text">daily quests</h4>
    </div>
    <div class="card-quests__body card__img">
      <QuestItem
        title="Победить 3 раза в PVP битвах"
        number="3/3"
        link="/quest-1"
        isActive
      />
      <QuestItem title="Убить 3 разные рассы..." number="1/3" link="/quest-2" />
      <QuestItem title="Убить 3 разные рассы..." number="2/3" link="/quest-3" />
    </div>
  </div>
</template>

<script>
import QuestItem from "@/components/Quests/QuestItem.vue";

export default {
  name: "Quests",
  components: {
    QuestItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-quests {
  overflow: auto;
}

.card-quests__body {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(180deg, rgba(32, 30, 46, 0) 0%, #201e2e 100%);
    pointer-events: none;
  }
}
</style>
