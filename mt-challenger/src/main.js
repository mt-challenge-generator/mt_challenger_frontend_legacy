import {createApp} from 'vue'
//import { store } from './store'
//import { router } from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'

// components
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


// flex, theme, core css, icons
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-green/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


const app = createApp(App)

app.use(PrimeVue)
//app.use(store)
//app.use(router)
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app')