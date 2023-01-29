<template>
  <DefaultTitle :title="title"/>
  <input type="text" v-model="data"/>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StringEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: this.value
    }
  },
  methods: {
    getData() {
      return this.data
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
