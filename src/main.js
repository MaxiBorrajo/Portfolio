import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";

import { createVuetify } from "vuetify";

import * as components from "vuetify/components";

import * as directives from "vuetify/directives";

import { aliases, fa } from "vuetify/iconsets/fa";

import { mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          backgroundColor: "#ccf1ff",
          card: "#0085b5",
          text: "#ffffff",
          attention: "#f2561d",
        },
      },
      dark: {
        dark: false,
        colors: {
          backgroundColor: "#270247",
          card: "#8f1df2",
          text: "#ffffff",
          attention: "#f2561d",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
