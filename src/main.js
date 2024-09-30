import { createApp } from "vue";
import i18nConfig from './utils/i18n/i18nConfig'
import PrimeVue from "primevue/config";

const i18n = i18nConfig

import "./style.css";

import router from "./router";
import App from "./App.vue";

createApp(App)
  .use(PrimeVue, {
    unthemed: true
  })
  .use(i18n)
  .use(router)
  .mount('#app')