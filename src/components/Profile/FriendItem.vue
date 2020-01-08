<template>
  <div class="friend-item">
    <div class="friend-item__left">
      <div class="friend-item__avatar avatar">
        <img src="@/assets/img/avatar.png" alt="" />
      </div>
      <div class="friend-item__text">
        <h6 class="friend-item__nickname">{{ nickname }}</h6>
        <p class="friend-item__rating">
          Ranked rating <span>{{ rating }}</span>
          <img src="@/assets/img/rank.png" alt="" width="30" />
        </p>
      </div>
    </div>
    <div class="friend-item__right">
      <div class="friend-item__online-dot" v-if="isOnline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendItem",
  props: {
    nickname: String,
    rating: Number,
    isOnline: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.friend-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
}

.friend-item__left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.friend-item__avatar {
  max-width: 45px;

  img {
    padding: 0;
  }
}

.friend-item__text {
  margin-left: 15px;
  margin-bottom: -8px;
}

.friend-item__nickname {
  font-weight: 500;
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0;
}

.friend-item__rating {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.7rem;
  color: #9593ab;
  margin: 0;

  span {
    color: #fff;
    margin-left: 5px;
  }

  img {
    margin-left: 5px;
  }
}

.friend-item__online-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: #3deb6e;
  box-shadow: 0px 0px 16px #0ca035;
}
</style>
