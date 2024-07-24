import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";
import routes from "./routes";
import { key, store } from "./store";

createApp(App)
    .use(routes) 
    .use(store, key) // Store é injetado para renderizar no projeto
    .mount("#app");
