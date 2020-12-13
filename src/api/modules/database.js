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
    queryObjects: async () => {
        // TO DO
    }

}