import api from '@/api/index.js'
import firebase from 'firebase'

export default {
    state: {
        schools: [],
        school: {},
    },
    mutations: {
        setSchools(state, payload) {
            state.schools = payload
        },
        setSchool(state, payload) {
            state.school = payload
        }
    },
    actions: {
        async getSchools({ commit }) {
            commit('setLoading', true)
            try {
                var objects = await api.database.getObjects({ collection: 'schools' })
                console.log('Objects loaded', objects)
                commit('setSchools', objects)
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async createSchool({ commit }, payload) {
            commit('setLoading', true)
            try {
                var docRef = await api.database.createObject({ collection: 'schools', data: payload })
                console.log("Document successfully created with ID: ", docRef.id);
                return docRef
            } catch (err) {
                console.error("Error", err)
            } finally {
                commit('setLoading', false)
            }
        },
        async getSchoolById({ commit }, payload) {
            commit('setLoading', true)
            try {
                const db = firebase.firestore();
                db.collection('schools').doc(payload)
                    .onSnapshot(function (doc) {
                        commit('setSchool', Object.assign({ id: doc.id }, doc.data()))
                    })
                
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async updateSchool({ commit }, payload) {
            commit('setLoading', true)
            try {
                await api.database.updateObject({ collection: 'schools', data: payload.data, docId: payload.docId })
                console.log("Document successfully updated: ");
            }
            catch (err) {
                console.error("Error", err)
            }
            finally {
                commit('setLoading', false)
            }
        },
        async deleteSchool({ commit }, payload) {
            commit('setLoading', true)
            try {
                await api.database.deleteObject({ collection: 'schools', docId: payload })
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