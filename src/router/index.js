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
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../views/SponsorView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const publicPages = ['/login']
  // const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('access_token')

  if (to.name !== 'login' && !loggedIn) {
    // window.location.reload()
    return next('/login')
  }

  if (to.name === 'login' && loggedIn) {
    console.log('logged in')
    return next({ name: 'home' })
  }
  // if (loggedIn) {
  //   return next('/application')
  // }

  return next()
})

export default router
