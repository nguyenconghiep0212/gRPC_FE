import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import ProjectList from '../components/ProjectList.vue'
import OrderList from '../components/OrderList.vue'
import MachineList from '../components/MachineList.vue'
import Analytic from '../components/Analytic.vue'
import ContactList from '../components/ContactList.vue'

const routerArray = [
  { path: '/', name: 'Dashboard', key: 'dashboard', component: Dashboard },
  { path: '/project', name: 'Projects', key: 'project', component: ProjectList },
  { path: '/order', name: 'Orders', key: 'order', component: OrderList },
  { path: '/machine', name: 'Machines', key: 'machine', component: MachineList },
  { path: '/analytic', name: 'Analytic', key: 'analytic', component: Analytic },
  { path: '/contact', name: 'Contact', key: 'contact', component: ContactList },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerArray,
})

export default router
export { routerArray }
