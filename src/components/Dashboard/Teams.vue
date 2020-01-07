<template>
  <div class="card card-default card-teams">
    <div class="card__title-with-icon">
      <img src="@/assets/img/icons/card-icon-2.svg" alt="" class="card__icon" />
      <h4 class="card__title-text">my teams list</h4>
    </div>
    <div class="card-teams__body card__img">
      <img src="@/assets/img/teams.png" alt="" class="card-teams__bg-img" />
      <div class="card-teams__inner">
        <p class="card-teams__status">You have no teams</p>
        <p class="card-teams__info">Create new team and start game!</p>
        <p class="card-teams__number">No Team</p>
        <router-link to="/create-team">
          <div class="btn btn--gradient btn--gradient-mix">
            <div class="btn-gradient-inner">Create new team</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-teams__body {
  position: relative;
  padding: 0.4rem;
}

.card-teams__bg-img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
}

.card-teams__inner {
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}

.card-teams__status {
  font-size: 1.6rem;
  line-height: 2rem;
  color: #ffffff;
  text-shadow: 0px 11px 5.5px rgba(0, 0, 0, 0.1);
  margin: 0;
  margin-bottom: 10px;
}

.card-teams__info {
  margin: 0;
  margin-bottom: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2rem;
  color: #9593ab;
  text-shadow: 0px 11px 5.5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(90deg, #ff905a 0, #d94fc7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
