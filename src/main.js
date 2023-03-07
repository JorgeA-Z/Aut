import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQx6GegwH-tObW3XV5fnwu99-bewfSW0",
  authDomain: "vue-au-1b2b4.firebaseapp.com",
  projectId: "vue-au-1b2b4",
  storageBucket: "vue-au-1b2b4.appspot.com",
  messagingSenderId: "657127739219",
  appId: "1:657127739219:web:c0a202a1b18cf299d49ba6"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router)
app.mount('#app')