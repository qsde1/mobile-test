import { createRouter, createWebHistory } from '@ionic/vue-router';
import Main from '../components/Main.vue'
import tab1 from '../components/tab1.vue';
import tab2 from '../components/tab2.vue';
import tab3 from '../components/tab3.vue';

const routes = [
  {
    path: '/',
    redirect: '/main/tab1',
  },
  {
    path: '/main/',
    component: Main,
    children:[
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: tab1

      },
      {
        path: 'tab2',
        component: tab2

      },
      {
        path: 'tab3',
        component: tab3
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
