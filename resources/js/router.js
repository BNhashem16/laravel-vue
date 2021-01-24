import Vue from'vue'
import Router from'vue-router'


import firstPage from './components/pages/MyFirstVuePage'
import newRoute from './components/pages/NewRoute'
import hooks from './components/basic/Hooks'
import methods from './components/basic/Methods'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: firstPage,
            name : 'Home',
            meta : {

            }
        },
        {
            path: '/new',
            component: newRoute
        },
        {
            path: '/hooks',
            component: hooks
        },
        // More Basics
        {
            path: '/methods',
            component: methods
        },
    ]
  })
  export default router
