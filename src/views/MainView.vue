<template>
  <div class="main">
    <div class="content">
      <button @click="onClickAddGym">암장 추가</button>
      <div class="gym-list">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  methods: {
    onClickAddGym() {
      this.$router.push("/gym")
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .content {
    width: 70%;
  }
}
</style>