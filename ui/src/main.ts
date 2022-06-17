import { createApp } from 'vue';

import App from './index.vue';
import router from './router';
import './assets/style/index.scss';
import './assets/style/components/header.scss';

createApp(App).use(router).mount('#root')
