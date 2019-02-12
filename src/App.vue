<template>
  <div>
    <Menu/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data () {
    return {
      //
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

.cdp-title h1 {
      font-size: 3rem;
      line-height: 4rem;
}
</style>

