<template>
  <AppNavigation />
  <RouterView />
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'

export default ({
  name: 'App',
  components: {
    AppNavigation,
    AppFooter,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>