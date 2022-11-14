import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Solving tailwind style Conflict
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App).mount('#app')
