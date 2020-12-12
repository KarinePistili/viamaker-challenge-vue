import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBj64VcAz5fDdHoYkXOmON8UsD8-D7ohcQ",
  authDomain: "viamaker-challenge.firebaseapp.com",
  projectId: "viamaker-challenge",
  storageBucket: "viamaker-challenge.appspot.com",
  messagingSenderId: "282528103950",
  appId: "1:282528103950:web:acc9c4ef395c1ffbce865f",
  measurementId: "G-L0BVT1LSCQ"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
