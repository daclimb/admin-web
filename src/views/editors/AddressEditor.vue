<template>
  <DefaultTitle :title="title"/>
  <div class="address-main">
    <p id="address" class="address">{{ data.roadAddress }}</p>
    <input class="detailed-address" placeholder="상세 주소" v-model="data.detailedAddress">
    <button class="search-address" @click="onClickSearchAddressButton">주소 검색</button>
  </div>
</template>

<script lang="ts">
import DefaultTitle from "@/views/editors/DefaultTitle.vue";
import {defineComponent, PropType} from 'vue'
import {Address} from "@/model/gym";

export default defineComponent({
  name: 'AddressEditor',
  components: { DefaultTitle },
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: Object as PropType<Address>,
      default: {} as Address
    }
  },
  data() {
    return {
      data: this.address
    }
  },
  methods: {
    getData() {
      return this.data
    },
    onClickSearchAddressButton() {
      return
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
