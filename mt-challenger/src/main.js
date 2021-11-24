import {createApp} from 'vue'
import { store } from './store'
import { router } from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// flex, theme, core css, icons
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


const app = createApp(App)

app.use(PrimeVue)
app.use(store)
app.use(router)
app.use(ToastService)

app.mount('#app')