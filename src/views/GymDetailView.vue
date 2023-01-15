<template>
  <div class="gym-detail-main">
    <div class="content">
      <p class="name">{{ gym.name }}</p>
      <p class="address">{{ gym.address }}</p>
      <p class="description">{{ gym.description }}</p>
    </div>
  </div>
</template>

<script>

import { mockData } from '@/mock/mock-data.service'

export default {
  name: 'GymDetailView',
  data() {
    return {
      gym: mockData.gymDetail
    }
  }
}
</script>

<style lang="scss" scoped>

.gym-detail-main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 70%;

    .name {
      font-size: 28px;
      font-weight: bold;
    }
  }
}

</style>