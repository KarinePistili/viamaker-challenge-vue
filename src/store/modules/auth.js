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
                var user = await api.auth.signIn(payload)
                var firebase_user = await api.database.getObject({ collection: 'super_admin', docId: user.uid })

                if (firebase_user.data().access_level == 0) {
                    user = {
                        name: firebase_user.data().name,
                        email: firebase_user.data().email,
                        access_level: firebase_user.data().access_level
                    }
                    commit('setUser', user)
                    console.log('%cuser', 'color:green', user)
                }

            } catch (err) {
                console.error('Your email is not authorized to access this area.', err)
            } finally {
                commit('setLoading', false)
            }

        },

        async signout({ commit }) {
            commit('setLoading', true)

            try {
               await api.auth.logout()
                console.log('logged out')
                commit('setUser', null)

            } catch (err) {
                console.error('Impossible to log out', err)
            } finally {
                commit('setLoading', false)
            }
        }
    }

}
