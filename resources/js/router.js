import Vue from'vue'
import Router from'vue-router'


import firstPage from './components/pages/MyFirstVuePage'
import newRoute from './components/pages/NewRoute'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: firstPage
        },
        {
            path: '/new',
            component: newRoute
        },
    ]
  })
  export default router
