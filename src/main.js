import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCNzrIszBxCYByuW3l3DhA5-ECDSCw5CtY",
  authDomain: "mysocial-1a429.firebaseapp.com",
  projectId: "mysocial-1a429",
  storageBucket: "mysocial-1a429.appspot.com",
  messagingSenderId: "178872438546",
  appId: "1:178872438546:web:7cb7a2f51ea441fba5edcb",
};

// eslint-disable-next-line no-unused-vars
const firebaseapp = initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
