import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

// import firebase from 'firebase/app'
// import "firebase/firestore"
// import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: "AIzaSyAqTdx-jD3gnIXuVtEZDtKLqsj1yxacYKk",
//   authDomain: "common-day-project.firebaseapp.com",
//   databaseURL: "https://common-day-project.firebaseio.com",
//   projectId: "common-day-project",
//   storageBucket: "common-day-project.appspot.com",
//   messagingSenderId: "620512300673",
//   appId: "1:620512300673:web:83d161ec905691d8"
// };

// Vue.use(firebase)
// Vue.use(firestorePlugin)

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore()

// console.log(db)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')