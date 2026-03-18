import { createRouter, createWebHistory } from 'vue-router'
import ParentPage from '@/components/ParentPage.vue'
import Dashboard from '../views/Dashboard.vue'
import ProjectList from '../views/ProjectList.vue'
import OrderList from '../views/OrderList.vue'
import MachineList from '../views/MachineList.vue'
import Analytic from '../views/Analytic.vue'
import ContactList from '../views/ContactList.vue'
import TestSuite from '../views/TestSuite.vue'
import Login from '../views/Login.vue'
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const routerArray = [
  { path: '/login', name: 'Login', key: 'login', component: Login },
  {
    path: '/',
    name: 'Factory',
    key: 'factory',
    component: ParentPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        key: 'dashboard',
        meta: { requiresAuth: true },
        component: Dashboard,
      },
      {
        path: '/project',
        name: 'Projects',
        key: 'project',
        meta: { requiresAuth: true },
        component: ProjectList,
      },
      {
        path: '/order',
        name: 'Orders',
        key: 'order',
        meta: { requiresAuth: true },
        component: OrderList,
      },
      {
        path: '/machine',
        name: 'Machines',
        key: 'machine',
        meta: { requiresAuth: true },
        component: MachineList,
      },
      {
        path: '/analytic',
        name: 'Analytic',
        key: 'analytic',
        meta: { requiresAuth: true },
        component: Analytic,
      },
      {
        path: '/contact',
        name: 'Contact',
        key: 'contact',
        meta: { requiresAuth: true },
        component: ContactList,
      },
      {
        path: '/testsuite',
        name: 'TestSuite',
        key: 'testsuite',
        meta: { requiresAuth: true },
        component: TestSuite,
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerArray,
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = computed(() => authStore.isAuthenticated)
  try {
    if (!to.meta.requiresAuth) {
      return next()
    }
    if (isAuthenticated.value) {
      return next()
    }
    return next('/login')
  } catch (e) {
    console.log(e)
  }
})

export default router
export { routerArray }
