import api from '@/api/index.js'

export default {

    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
    },
    actions: {
        async signin({ commit }, payload) {
            commit('setLoading', true)

            try {
                var res = await api.auth.signIn(payload)

                commit('setUser', res.user)
                console.log('%cuser', 'color:green', res.user)

            } catch (err) {
                console.error('Your email is not authorized to access this area.', err)
            } finally {
                commit('setLoading', false)
            }
        },
        async signout({ commit }) {
            commit('setLoading', true)

            try {
                var res = await api.auth.signOut()

                commit('setUser', null)
                console.log('%cuser', 'color:green', res.user)

            } catch (err) {
                console.error('Impossible to log out', err)
            } finally {
                commit('setLoading', false)
            }
        }
    }

}
