import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//importing bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import baseCard from "./components/baseCard.vue";
import firebase from "firebase/app";

const app = createApp(App);
app.component("base-card", baseCard);
app.use(router);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUGTc0_YoxIUYIyPOz0kYKioPF_5Y2LN4",
  authDomain: "coding-challenge-e4296.firebaseapp.com",
  databaseURL:
    "https://coding-challenge-e4296-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coding-challenge-e4296",
  storageBucket: "coding-challenge-e4296.appspot.com",
  messagingSenderId: "273954934636",
  appId: "1:273954934636:web:1f7ded6d9215129425ed49",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.mount("#app");
