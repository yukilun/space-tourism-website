import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import CrewView from '../views/CrewView.vue'
import TechnologyView from '../views/TechnologyView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView
    },
    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'notFound', 
      component: NotFoundView
    }
  ]
})

export default router
