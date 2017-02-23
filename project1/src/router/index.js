import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Doremi from 'components/Doremi'

Vue.use(Router)

let routes = [
  {
    path: '/hola',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/hola/2',
    component: Doremi
  }
]

var router = new Router({
  routes: routes,
  mode: 'history'
})

export default router
