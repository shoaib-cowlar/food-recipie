import { createApp } from "vue";
import App from "./App.vue";
import "./app.css"; // Import the CSS file
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
    