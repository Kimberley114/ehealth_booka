import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Appointment from '../components/Appointment.vue'

import FamilyMember from '../components/FamilyMember.vue'
import HelpCenter from '../components/HelpCenter.vue'
import Profile from '../components/Profile.vue'
import Search from '../components/Search.vue'
// import Login from '../views/auth/Login.vue'


// import { projectAuth } from  '../firebase/config'

// const requireAuth = ( to, from, next ) => {
//   let user = projectAuth.currentUser
//   if (!user) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'appointment',
        component:Appointment,
      },
      {
        path:'familyMember',
        component:FamilyMember,
      },
      {
        path:'helpCenter',
        component:HelpCenter,
      },
      {
        path:'profile',
        component:Profile,
      },
      {
        path:'search',
        component:Search,
      },
    ]
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
