import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const userStore = {
    namedspaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
}

export default userStore;