import { createRouter, createWebHistory } from 'vue-router'
import EmployeePage from '@/component/layout/Employee/EmployeePage.vue';
import HomePage from '@/component/layout/Home/HomePage.vue';

const routes = [
  {
    path: '/',
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