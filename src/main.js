import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// Expose app to window during testing
if (window.Cypress) {
    window.app = app;
}
