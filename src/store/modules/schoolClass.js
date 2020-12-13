import api from '@/api/index.js'

export default {
    state: {
        classes: [],
        class: {}
    },
    mutations: {
        setClasses(state, payload) {
            state.classes = payload
        },
        setClass(state, payload) {
            state.class = payload
        }

    },
    actions: {
        async getClasses({ commit},payload) {
            commit('setLoading', true)
            console.log('pay',payload)
            try {
                var snapshot = await api.database.getSubDocuments({ collection: 'schools', subCollection: 'classes', docId: payload })
                var objects = []
                snapshot.forEach(doc => {
                    objects.push(Object.assign({ id: doc.id }, doc.data()))
                })
                console.log('Objects loaded', objects)
                commit('setClasses', objects)
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async createClass({ commit }, payload) {
            commit('setLoading', true)
            try {
                var docRef = await api.database.createSubDocument({ collection: 'schools', subCollection: 'classes', docId: payload.schoolid, data: payload.data })
                console.log("Document successfully created with ID: ", docRef.id);
                return docRef
            } catch (err) {
                console.error("Error", err)
            } finally {
                commit('setLoading', false)
            }
        },
        async getClassById({ commit }, payload) {
            commit('setLoading', true)
            try {
                var doc = await api.database.getSubDocument({ collection: 'schools', subCollection: 'classes', docId: payload.schoolid, subDocId: payload.classid })
                commit('setClass', Object.assign({ id: doc.id }, doc.data()))
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async updateClass({ commit }, payload) {
            commit('setLoading', true)
            try {
                await api.database.updateSubDocument({ collection: 'schools', subCollection: 'classes', docId: payload.schoolid, subDocId: payload.classid, data: payload.data })
                console.log("Document successfully updated: ");
            }
            catch (err) {
                console.error("Error", err)
            }
            finally {
                commit('setLoading', false)
            }
        },
        async deleteClass({ commit }, payload) {
            console.log('payload',payload)
            commit('setLoading', true)
            try {
                await api.database.deleteSubDocument({collection: 'schools', docId: payload.schoolid, subCollection: 'classes', subDocId: payload.classid})
                console.log("Document successfully deleted!");
            } catch (err) {
                console.error("Error removing document: ", err);
            } finally {
                commit('setLoading', false)
            }

        }

    },
    getters: {

    }
}