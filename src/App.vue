<template>
  <v-app class="app">
    <Toolbar v-if="$route.path != '/'"/>
    <router-view />
  </v-app>
</template>

<style>
.app {
  overflow: hidden;
}
</style>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  components:{
    Toolbar
  }
}
</script>
