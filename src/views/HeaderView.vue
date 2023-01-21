<template>
  <div class="header-main">
    <div class="header-content">
      <span class="logo" @click="onClickLogo">Daclimb-admin</span>
    </div>
    <div class="divider"/>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  methods: {
    onClickLogo() {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped>

.header-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-content {
    background: white;
    padding: 20px;
    width: 70%;

    .logo {
      color: grey;
      font-weight: bold;
      font-size: x-large;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .divider {
    height: 0.5px;
    width: 100%;
    background: grey;
  }
}


</style>