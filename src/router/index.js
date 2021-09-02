import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import LeftMenu from '../components/LeftMenu'
import RightMain from '../components/RightMain'
const routes = [
  {
    path: '/',
    component:Home,
    children: [
      {
        path: 'menu',
        component: LeftMenu
      },
      {
        path: 'main',
        component: RightMain
      },
    ]
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
