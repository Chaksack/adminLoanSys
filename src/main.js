import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./APIs/axios";
import cors from "cors";
// import axios from "axios";
// import VueAxios from 'vue-axios'

createApp(App).use(cors).use(store).use(router).mount("#app");
