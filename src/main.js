import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/formatFilters';

const app = createApp(App)

app.config.globalProperties.$formatFilters = {
  currency,
  date,
};

app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComp', Loading);

app.mount('#app')

