import {createStore} from 'vuex'
import userStore from './user'
import cartStore from './cart'

export default createStore({
    modules: {
        user: userStore,
        cart: cartStore
    }
})


