<template>
  <DefaultTitle :title="title" :addable="true" @onClickAdd="onClickAdd"/>
  <div class="row" v-for="(_, idx) in data" :key="idx">
    <input type="text" v-model="data[idx]"/>
    <button @click="onClickRemoveRow(idx)">삭제</button>
  </div>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'StringArrayEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Array as PropType<Array<string>>,
      required: true
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
    },
    onClickAdd() {
      this.data.push('')
    },
    onClickRemoveRow(idx: number) {
      this.data.splice(idx, 1)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
