<template>
  <div class="status">
    <button class="notification-btn">
      <img src="@/assets/img/icons/notification.svg" alt="" />
    </button>
    <button class="btn btn--gradient btn--gradient-light">
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
    <router-link to="/profile">
      <div class="avatar">
        <img src="@/assets/img/avatar.png" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Status"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_vars.scss";

.status {
  display: flex;
  justify-content: center;
  align-items: center;
}

.notification-btn {
  display: flex;
  margin-right: 40px;
  transition: all $trans-prop;

  img {
    max-width: 20px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 25px;
  }

  &:hover {
    opacity: 0.6;
  }
}

.btn--gradient-light {
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    display: none;
  }
}

.btn--gradient-dark {
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    display: none;
  }
}
</style>
