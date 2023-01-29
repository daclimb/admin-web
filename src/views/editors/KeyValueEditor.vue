<template>
  <DefaultTitle :title="title" :addable="addable" @onClickAdd="onClickAdd"/>
  <div class="key-value-editor-main">
    <div class="row" v-for="(v, idx) in data" :key="idx">
      <input class="key" v-model="v.key" :disabled="!canEditKey"/>
      <input class="value" v-model="v.value"/>
      <button @click="onClickRemoveRow(idx)">삭제</button>
    </div>
  </div>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import {defineComponent, PropType} from 'vue'

export interface KeyValueData {
  key: string
  value: string
}

export default defineComponent({
  name: 'KeyValueEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Object as PropType<Array<KeyValueData>>,
      required: true
    },
    addable: {
      type: Boolean,
      default: true
    },
    canEditKey: {
      type: Boolean,
      default: true
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
      this.data.push({
        key: '', value: ''
      })
    },
    onClickRemoveRow(idx: number) {
      this.data.splice(idx, 1)
    }
  }
})
</script>

<style lang="scss" scoped>

.key-value-editor-main {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .row {
    display: flex;
    gap: 10px;

    input {
      width: 300px;
    }
  }
}

</style>
