/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "az",
});

const app = createApp(App).use(i18n);

registerPlugins(app);

app.mount("#app");
