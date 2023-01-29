<template>
  <DefaultTitle :title="title"/>
  <textarea v-model="data"/>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextAreaEditor',
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

textarea {
  resize: none;
  height: 200px;
}

</style>
