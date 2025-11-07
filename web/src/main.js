import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

AOS.init();