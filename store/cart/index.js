import * as actions from './actions'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'

const cartStore = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
}

export default cartStore;