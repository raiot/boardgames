import * as game from '../../api/games'
import types from '../mutation-types'

const state = {
  game: []
}

const getters = {
  game: state => state.game
}

const actions = {
  getGameData ({commit}) {
    game.getGameData(g => {
      commit(types.RECEIVE_GAME_DATA, g)
    })
  }
}

const mutations = {
  [types.RECEIVE_GAME_DATA] (state, gameData) {
    state.game = gameData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
