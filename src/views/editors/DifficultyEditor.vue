<template>
  <DefaultTitle :title="title"/>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'DifficultyEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array as PropType<Array<string>>,
      default: [] as string[]
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
