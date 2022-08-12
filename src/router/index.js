import { createRouter, createWebHistory } from 'vue-router'
import EmployeePage from '@/layout/Employee/EmployeePage.vue';
import HomePage from '@/layout/Home/HomePage.vue';

const routes = [
  {
    path: '/home',
    name:  'home',
    component: HomePage
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router