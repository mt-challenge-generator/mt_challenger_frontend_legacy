import {createApp} from 'vue';
import { store } from './store';
import { router } from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(PrimeVue);
app.use(store)
app.use(router)

app.mount('#app')