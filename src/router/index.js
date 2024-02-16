import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'default' },
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
      meta: { layout: 'default' },
      component: () => import('../views/ApplicationView.vue')
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      meta: { layout: 'default' },
      component: () => import('../views/SponsorsListView.vue')
    },
    {
      path: '/students',
      name: 'students',
      meta: { layout: 'default' },
      component: () => import('../views/StudentsListView.vue')
    },
    {
      path: '/sponsor-view',
      name: 'sponsor-view',
      meta: { layout: 'default', page: 'view' },
      component: () => import('../views/SponsorView.vue')
    },
    {
      path: '/student-view',
      name: 'student-view',
      meta: { layout: 'default', page: 'view' },
      component: () => import('../views/StudentView.vue')
    },
    {
      path: '/add-student',
      name: 'add-student',
      meta: { layout: 'default', page: 'view' },
      component: () => import('../views/AddStudent.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('access_token')

  if (to.name !== 'login' && !loggedIn) {
    return next('/login')
  }

  if (to.name === 'login' && loggedIn) {
    console.log('logged in')
    return next({ name: 'home' })
  }

  return next()
})

export default router
