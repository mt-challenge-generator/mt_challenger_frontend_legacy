<template>
  <AppNavigation />
  <RouterView class=" mt-7 ml-5 mr-5" />
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'

export default {
  name: 'App',
   components: {
    AppNavigation,
    AppFooter,
  },
}
</script>

<style>
  body {
    margin: 0;
  }
</style>