import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Donation from '@/views/Donation.vue'
import Fisherman from '@/views/Fisherman.vue'
import Newsletter from '@/views/Newsletter.vue'
import Band from '@/views/Band.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation
    },
    {
      path: '/fisherman',
      name: 'fisherman',
      component: Fisherman
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: Newsletter
    },
    {
      path: '/band',
      name: 'band',
      component: Band
    }
  ]
})
