import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projectdetails',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
 
    // CATCH ALL 404
    {
      path:'/:catchAll(.*)',
      name: 'Error',
      component: Error
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
