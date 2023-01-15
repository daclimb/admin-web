<template>
  <HeaderView/>
  <router-view/>
</template>

<style lang="scss">

* {
  margin: 0;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

</style>
<script>
import HeaderView from '@/views/HeaderView'

export default {
  components: { HeaderView }
}
</script>