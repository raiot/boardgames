import Vue from 'vue'
import Vuex from 'vuex'
import companions from './modules/companions'
import game from './modules/game'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: [
    companions,
    game
  ],
  strict: debug
})
