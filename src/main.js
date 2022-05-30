import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useCounterStore } from '@/stores/counter';

const app = createApp(App)
export const piniaInstance = createPinia()

app.use(piniaInstance)

app.mount('#app')

// Expose a store to window during testing
if (window.Cypress && process.env.NODE_ENV === 'development') {
    const counterStore = useCounterStore();
    window.counterStore = counterStore;
}
