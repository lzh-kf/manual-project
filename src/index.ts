import { createApp } from 'vue'
import router from './router'
import 'normalize.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import './updateVersion'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')