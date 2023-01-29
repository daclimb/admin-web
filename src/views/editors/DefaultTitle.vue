<template>
  <div class="title-main">
    <p class="title">{{ title }}</p>
    <button class="add" v-if="addable" @click="onClickAddButton">추가</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultTitle',
  emits: [
      'onClickAdd'
  ],
  props: {
    title: {
      type: String,
      required: true
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickAddButton() {
      this.$emit('onClickAdd')
    }
  }
})
</script>

<style lang="scss" scoped>
.title-main {
  display: flex;
  gap: 10px;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
