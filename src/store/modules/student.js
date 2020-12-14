import api from '@/api/index.js'
import firebase from 'firebase'

export default {
    state: {
        students: [],
        student: {}
    },
    mutations: {
        setStudents(state, payload) {
            state.students = payload
        },
        setStudent(state, payload) {
            state.student = payload
        }
    },
    actions: {
        async getStudentsFromClass({ commit }, payload) {
            commit('setLoading', true)
            try {
                var objects = await api.database.queryDocuments({ collection: 'students', filter: ['classId', '==', payload] })
                console.log('Objects loaded', objects)
                commit('setStudents', objects)
            } catch (err) {
                console.error("Error getting document:", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async deleteStudent({ commit }, payload) {
            commit('setLoading', true)
            try {
                await api.database.deleteObject({ collection: 'students', docId: payload.docID })
                console.log("Document successfully deleted!");
                const db = firebase.firestore()
                db.collection('schools').doc(payload.schoolid).collection('classes').doc(payload.classid).update({
                    qtStudents: firebase.firestore.FieldValue.increment(-1)
                }).then(() =>{
                    console.log('Sucessfully decremented field')
                }).catch((error) =>{
                    console.log(error)
                })
            } catch (err) {
                console.error("Error removing document: ", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async createStudent({ commit }, payload) {
            commit('setLoading', true)
            try {
                var docRef = await api.database.createObject({ collection: 'students', data: payload.data })
                console.log("Document successfully created with ID: ", docRef.id);
                const db = firebase.firestore()
                db.collection('schools').doc(payload.schoolid).collection('classes').doc(payload.classid).update({
                    qtStudents: firebase.firestore.FieldValue.increment(1)
                }).then(() =>{
                    console.log('Sucessfully incremented field')
                }).catch((error) =>{
                    console.log(error)
                })
                return docRef
            } catch (err) {
                console.error("Error", err)
            } finally {
                commit('setLoading', false)
            }
        },
        async updateStudent({ commit }, payload) {
            commit('setLoading', true)
            try {
                await api.database.updateObject({ collection: 'students', data: payload.data, docId: payload.docId })
                console.log("Document successfully updated: ");
            }
            catch (err) {
                console.error("Error", err)
            }
            finally {
                commit('setLoading', false)
            }
        },

    },
    getter: {

    }
}