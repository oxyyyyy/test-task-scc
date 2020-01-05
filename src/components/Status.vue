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
        <img src="@/assets/img/icons/diamond.svg" alt="" width="25" />
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

  img {
    max-width: 1rem;
  }
}

.btn--gradient-light {
  margin-right: 20px;
}

.btn--gradient-dark {
  margin-right: 20px;
}
</style>
