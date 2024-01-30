import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('../views/ApplicationView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
 
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('access_token')
  

  if (authRequired && !loggedIn)
    return next('/login')

  if (to.name === 'login' && loggedIn)
    return next(from.fullPath)

  if (loggedIn) {
     next('/application')
  }

  return next()
})

export default router
