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
  // const userStore = useUserStore()
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  // const { user } = userStore

  if (authRequired && !loggedIn)
    return next('/login')

  if (to.name === 'login' && loggedIn)
    return next(from.fullPath)

  // if (user) {
  //   if (user.role.name === 'Security' && to.name === 'applications-security')
  //     return next()

  //   if (to.name === 'users-profile')
  //     return next()

  //   if (user.role.name !== 'Admin' && to.name !== 'index')
  //     return next('/')
  // }

  return next()
})

export default router
