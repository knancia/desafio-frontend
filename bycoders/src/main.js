import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClockRotateLeft, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { gapi } from '@/Services/GoogleClient';
import GoogleClient from '@/Services/GoogleClient';
import { createApp, h } from 'vue'
import  { searchVideos, getById } from './Services/YoutubeService';

library.add(faMagnifyingGlass, faUser, faClockRotateLeft)

// createApp(App).mount('#app')
createApp({ render: () => h(App) })
    .component('fa', FontAwesomeIcon)
    .mixin({ data: () => ({ gapi }) })
    .mixin({ methods: { GoogleClient, searchVideos, getById } }).mount('#app')
