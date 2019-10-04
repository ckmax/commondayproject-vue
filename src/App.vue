<template>
  <div>
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
// import db from './firebaseInit'
// console.log(db)

export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {
      users: []
    }
  },

  created() {
    // db.collection("users").get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     console.log(doc.data());
    //     const data = {

    //     }
    //   })
    // })
  },

  // firestore: {
  //   users: db.collection("users")
  // },

  methods: {
    getEmail () {
      // db.collection('users').get().then( (snapshot) => {
      //   console.log(snapshot.docs);
      // })
    }
  }
}
</script>

<style>
@import './assets/bootstrap/css/bootstrap.min.css';

* {
  font-family: 'Karla', sans-serif;
}

a:hover {
  text-decoration: none;
}

.text-black-50 {
  color: rgba(0,0,0,.5) !important;
}

.text-white-50 {
  color: rgba(255,255,255,.5)!important
}

.blackBackground {
  background-color: black;
}

p {
  font-size: 1.1rem !important;
}

@media only screen and (max-width: 600px) {
  .screenPadding {
    padding: 15rem 0;
  }
}

.fullHeight {
    height: 100vh;
}

button {
  outline: none !important;
}
input[type="button"]{
  outline: none !important;
}
</style>

