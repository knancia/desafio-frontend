import App from './App.vue'
import { gapi } from '@/Services/GoogleClient';
import GoogleClient from '@/Services/GoogleClient';
import { createApp, h } from 'vue'


// createApp(App).mount('#app')
createApp({ render: () => h(App) })
    .mixin({ data: () => ({ gapi }) })
    .mixin({ methods: { GoogleClient } }).mount('#app')
