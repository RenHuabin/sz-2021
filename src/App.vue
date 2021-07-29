<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.TabBarFlag"/>
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
router-view{
  
            flex: 1;
            border: 1px solid red;
            overflow: auto;
      
}
</style>
