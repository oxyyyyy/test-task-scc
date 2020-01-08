<template>
  <div class="card card-default card-profile">
    <div class="card__title-with-icon">
      <img src="@/assets/img/icons/card-icon-1.svg" alt="" class="card__icon" />
      <h4 class="card__title-text">profile</h4>
    </div>
    <div class="card-profile__container">
      <div class="card-profile__header">
        <div class="card-profile__header-top">
          <div class="card-profile__header-top-left">
            <router-link to="/profile">
              <div class="avatar">
                <img src="@/assets/img/avatar.png" alt="" />
              </div>
            </router-link>
            <div class="card-profile__header-top-text">
              <h6 class="card-profile__nickname">Dragon Lore</h6>
              <p class="card-profile__status">Main menu</p>
            </div>
          </div>
          <div class="card-profile__header-top-right">
            <img src="@/assets/img/rank.png" alt="" width="85rem" />
          </div>
        </div>
        <div class="card-profile__header-bottom">
          <button
            class="btn btn--gradient btn--gradient-light"
            style="margin-right: 2rem;"
          >
            <div class="btn-gradient-inner">
              <img src="@/assets/img/icons/coin.png" alt="" width="25" />
              <span>1748</span>
            </div>
          </button>
          <button class="btn btn--gradient btn--gradient-dark">
            <div class="btn-gradient-inner">
              <img
                src="@/assets/img/icons/diamond.svg"
                alt=""
                width="25"
                style="margin-right: 6px"
              />
              <span>470</span>
            </div>
          </button>
        </div>
      </div>
      <div class="card-profile__body">
        <div class="card-profile__body-header">
          <div class="card-profile__body-header-left">
            <img src="@/assets/img/icons/friends.svg" alt="" width="30" />
            <p class="card-profile__body-header-title">
              friends <span>(26)</span>
            </p>
          </div>
          <div class="card-profile__body-header-right">
            <p class="card-profile__body-header-online">
              4 <span>Online</span>
            </p>
          </div>
        </div>
        <div class="card-profile__body-inner">
          <FriendItem nickname="Dragon Lore" :rating="1200" isOnline />
          <FriendItem nickname="Maroonameow" :rating="800" isOnline />
          <FriendItem nickname="Dragon Lore" :rating="1200" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FriendItem from "@/components/Profile/FriendItem.vue";

export default {
  name: "Profile",
  components: {
    FriendItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-profile__container {
  display: grid;
  grid-template-rows: 2fr 3fr;
  background: #201e2e;
  box-shadow: 0px 28px 28px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-profile__header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
}

.card-profile__header-top-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.card-profile__header-top-text {
  margin-left: 15px;
}

.card-profile__nickname {
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  margin-bottom: 7px;
  color: #ffffff;
}

.card-profile__status {
  font-weight: 500;
  font-size: 0.9rem;
  color: #9593ab;
  margin: 0;
}

.card-profile__header-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 2rem;
  padding-bottom: 1.5rem;
  background: rgba(32, 30, 46, 0.6);
}

.card-profile__body {
  overflow: auto;
}

.card-profile__body-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 2rem;
  background: #171620;
}

.card-profile__body-header-title {
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 11px 11px rgba(0, 0, 0, 0.25);
  margin: 0;
  margin-left: 8px;

  span {
    opacity: 0.5;
  }
}

.card-profile__body-header-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.card-profile__body-header-online {
  font-size: 0.9rem;
  color: #ffffff;

  span {
    opacity: 0.5;
  }
}
</style>
