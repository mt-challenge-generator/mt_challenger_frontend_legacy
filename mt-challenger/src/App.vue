<template>
  <div>
    <AppNavigation />
    <RouterView class="mt-7 ml-5 mr-5" />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
import AppNavigation from "./components/AppNavigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    AppFooter,
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  text-align: center;
}
body #app .p-button {
  margin-left: 0.2em;
}
form {
  margin-top: 2em;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
