import api from '@/api/index.js'

export default {
    state:{
        students: [],
        student:{}
    },
    mutations:{
        setStudents(state,payload){
            state.students = payload
        },
        setStudent(state,payload){
            state.student = payload
        }
    },
    actions:{
        async getStudentsFromClass({ commit },payload){
            commit('setLoading', true)
            try {
                var objects = await api.database.queryDocuments({ collection: 'students', filter:['classId','==',payload] })
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
                await api.database.deleteObject({collection: 'students', docId: payload})
                console.log("Document successfully deleted!");
            } catch (err) {
                console.error("Error removing document: ", err);
            } finally {
                commit('setLoading', false)
            }
        },
        async createStudent({ commit }, payload) {
            commit('setLoading', true)
            try {
                var docRef = await api.database.createObject({ collection: 'students', data: payload })
                console.log("Document successfully created with ID: ", docRef.id);
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
    getter:{
        
    }
}