import api from '@/api/index.js'

export default {
    state: {
        schools: [],
        school: {},
    },
    mutations :{
        setSchools(state,payload){
            state.schools = payload
        },
        setSchool(state,payload){
            state.school = payload
        }
    },
    actions:{
        async getSchools({commit}){
            commit('setLoading', true)
            try {
                var snapshot = await api.database.getObjects({collection: 'schools'})
                var objects = []
                snapshot.forEach(doc => {
                    objects.push(Object.assign({ id: doc.id }, doc.data()))
                })
                console.log('Objects loaded', objects)
                commit('setSchools',objects)
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async createSchool({commit},payload){
            console.log('PAYLOAD HERE', payload)
            commit('setLoading', true)
            try {
                var docRef = await api.database.createObject({collection: 'schools',data: payload})
                console.log("Document successfully created with ID: ", docRef.id);
                return docRef
            } catch (err) {
                console.error("Error", err)
            } finally {
                commit('setLoading', false)
            }

        }
    },
    getters:{

    }
}