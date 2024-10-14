import { createApp } from "vue";
import i18nConfig from './utils/i18n/i18nConfig'
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';

const i18n = i18nConfig

import "./style.css";

import router from "./router";
import App from "./App.vue";

createApp(App)

  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
          prefix: 'p',
          darkModeSelector: false || 'none',
      },
  }
  })
  .use(i18n)
  .use(router)
  .mount('#app')