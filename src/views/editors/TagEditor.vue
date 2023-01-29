<template>
  <DefaultTitle :title="title"/>
  <div id="tags" class="tags">
    <p v-for="tag in value" :key="tag.id" class="tag"># {{ tag.name }}</p>
  </div>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import {defineComponent, PropType} from 'vue'
import {Tag} from "@/model/gym";

export default defineComponent({
  name: 'TagEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Object as PropType<Array<Tag>>,
      default: [] as Tag[]
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
.tags {
  display: flex;
  gap: 5px;

  .tag {
    padding: 5px;
    background: lightgrey;
    border-radius: 10px;
  }
}
</style>
