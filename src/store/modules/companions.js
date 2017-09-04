import * as companions from '../../api/companions'
import types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allCompanions: state => state.all
}

const actions = {
  getAllCompanions ({commit}) {
    companions.getAllCompanions(c => {
      commit(types.RECEIVE_COMPANIONS, c)
    })
  }
}

const mutations = {
  [types.RECEIVE_COMPANIONS] (state, companions) {
    state.all = companions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
