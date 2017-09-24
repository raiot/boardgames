import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Game from '@/components/Game/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game/:id/:name',
      name: 'Game',
      component: Game
    }
  ]
})
