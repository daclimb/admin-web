<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'EditGymView',
  mounted() {
    const id = this.$route.params['id']
    if (id) {
      console.log("its edit view", id)
    } else {
      console.log("its create view")
    }
  }
}
</script>

<style scoped>

</style>