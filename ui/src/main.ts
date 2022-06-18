import { createApp } from 'vue';

import App from './index.vue';
import router from './router';
import './assets/style/index.scss';
import './assets/style/components/header.scss';
import './assets/style/components/sidebar.scss';
import './assets/style/views/profile.scss';
import './assets/style/components/molecules.scss';
import './assets/style/components/atoms.scss';

createApp(App).use(router).mount('#root')
