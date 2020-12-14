import firebase from 'firebase'

export default {
    createObject: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.add(payload.data)
    },
    getObject: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.doc(payload.docId).get()
    },
    deleteObject: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.doc(payload.docId).delete()
    },
    updateObject: async (payload) => {
        const db = firebase.firestore()
        var collectionRef = db.collection(payload.collection)
        return collectionRef.doc(payload.docId).set(payload.data)
    },
    getObjects: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.get()
    },
    getSubDocuments: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection)
        return collectionRef.get()
    },
    createSubDocument: async (payload) =>{
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection);
        return collectionRef.add(payload.data)
    },
    getSubDocument: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection).doc(payload.subDocId);
        return collectionRef.get()
    },
    updateSubDocument: async(payload) =>{
        const db = firebase.firestore()
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection)
        return collectionRef.doc(payload.subDocId).set(payload.data)
    },
    deleteSubDocument: async(payload) =>{
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection)
        return collectionRef.doc(payload.subDocId).delete()
    },
    queryDocuments: async(payload) =>{
        const db = firebase.firestore()
        var collectionRef = db.collection(payload.collection).where(payload.filter[0],payload.filter[1], payload.filter[2])
        return collectionRef.get()
    }
}