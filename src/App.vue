<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from '@common/tabBar/TabBar.vue'

export default {
  components:{
    TabBar 
  }

}
</script>

<style>

</style>
