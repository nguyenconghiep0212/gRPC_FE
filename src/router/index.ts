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

const routerArray = [
  { path: '/login', name: 'Login', key: 'login', component: Login },
  {
    path: '/',
    name: 'Factory',
    key: 'factory',
    component: ParentPage,
    children: [
      { path: '/dashboard', name: 'Dashboard', key: 'dashboard', component: Dashboard },
      { path: '/project', name: 'Projects', key: 'project', component: ProjectList },
      { path: '/order', name: 'Orders', key: 'order', component: OrderList },
      { path: '/machine', name: 'Machines', key: 'machine', component: MachineList },
      { path: '/analytic', name: 'Analytic', key: 'analytic', component: Analytic },
      { path: '/contact', name: 'Contact', key: 'contact', component: ContactList },
      { path: '/testsuite', name: 'TestSuite', key: 'testsuite', component: TestSuite },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerArray,
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = true
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router
export { routerArray }
