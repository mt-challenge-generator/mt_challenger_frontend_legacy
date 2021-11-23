<template>
  <div id="app">
    <div class="app-container">
      <img alt="Vue logo" src="./assets/logo.png">
      <form @submit.prevent="greet">
        <InputText type="text" v-model="text"/>
        <Button label="Submit"/>
        <h3>{{message}}</h3>
      </form>
    </div>
    <Toast/>
  </div>
  <!-- <div>
    <AppNavigation />
    <RouterView />
    <AppFooter />
  </div> -->
</template>

<script>
//import AppFooter from './components/AppFooter.vue'
//import AppNavigation from './components/AppNavigation.vue'

export default {
/*  name: 'App',
   components: {
    AppNavigation,
    AppFooter,
  }, */
  data() {
        return {
            message: null,
            text: null
        }
    },
    methods: {
        greet() {
            this.$toast.add({severity: 'info', summary: 'Hello '  + this.text});
            this.message = 'Hello ' + this.text;
        }
    },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  text-align: center;
}
body #app .p-button {
  margin-left: .2em;
}
form {
  margin-top: 2em;
}
</style>