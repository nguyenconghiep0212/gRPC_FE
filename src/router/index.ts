import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProjectList from '../views/ProjectList.vue'
import OrderList from '../views/OrderList.vue'
import MachineList from '../views/MachineList.vue'
import Analytic from '../views/Analytic.vue'
import ContactList from '../views/ContactList.vue'
import TestSuite from '../views/TestSuite.vue'

const routerArray = [
  { path: '/', name: 'Dashboard', key: 'dashboard', component: Dashboard },
  { path: '/project', name: 'Projects', key: 'project', component: ProjectList },
  { path: '/order', name: 'Orders', key: 'order', component: OrderList },
  { path: '/machine', name: 'Machines', key: 'machine', component: MachineList },
  { path: '/analytic', name: 'Analytic', key: 'analytic', component: Analytic },
  { path: '/contact', name: 'Contact', key: 'contact', component: ContactList },
  { path: '/testsuite', name: 'TestSuite', key: 'testsuite', component: TestSuite },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerArray,
})

export default router
export { routerArray }
