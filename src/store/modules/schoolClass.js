import api from '@/api/index.js'
import firebase from 'firebase'

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
        async getClasses({ commit }, payload) {
            commit('setLoading', true)
            try {
                var objects = await api.database.getSubDocuments({ collection: 'schools', subCollection: 'classes', docId: payload })
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
                const db = firebase.firestore();
                db.collection('schools').doc(payload.schoolid).collection('classes').doc(payload.classid)
                    .onSnapshot(function (doc) {
                        commit('setClass', Object.assign({ id: doc.id }, doc.data()))
                    })

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
            console.log('payload', payload)
            commit('setLoading', true)
            try {
                await api.database.deleteSubDocument({ collection: 'schools', docId: payload.schoolid, subCollection: 'classes', subDocId: payload.classid })
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