import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../src/firebase/config'

export const start = async (context, { email, password }) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
        context.commit('SET_USER', response.user)
    }
    else {
        throw new Error('Login failed')
    }
}