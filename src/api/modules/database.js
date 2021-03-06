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
        var snapshots = [];
        const db = firebase.firestore();
        db.collection(payload.collection).onSnapshot(function (querySnapshot) {
            while (snapshots.length > 0) {
                snapshots.pop();
            }
            querySnapshot.forEach(function (doc) {
                snapshots.push(Object.assign({ id: doc.id }, doc.data()));
            });
            console.log('snapshot: ', snapshots);
        });
        return snapshots;

    },
    getSubDocuments: async (payload) => {
        var snapshots = [];
        const db = firebase.firestore();
        db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection).onSnapshot(function (querySnapshot) {
            while (snapshots.length > 0) {
                snapshots.pop();
            }
            querySnapshot.forEach(function (doc) {
                snapshots.push(Object.assign({ id: doc.id }, doc.data()));
            });
            console.log('snapshot: ', snapshots);
        });
        return snapshots;
    },
    createSubDocument: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection);
        return collectionRef.add(payload.data)
    },
    getSubDocument: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection).doc(payload.subDocId);
        return collectionRef.get()
    },
    updateSubDocument: async (payload) => {
        const db = firebase.firestore()
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection)
        return collectionRef.doc(payload.subDocId).set(payload.data)
    },
    deleteSubDocument: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection).doc(payload.docId).collection(payload.subCollection)
        return collectionRef.doc(payload.subDocId).delete()
    },
    queryDocuments: async (payload) => {
        var snapshots = [];
        const db = firebase.firestore();
        db.collection(payload.collection).where(payload.filter[0], payload.filter[1], payload.filter[2]).onSnapshot(function (querySnapshot) {
            while (snapshots.length > 0) {
                snapshots.pop();
            }
            querySnapshot.forEach(function (doc) {
                snapshots.push(Object.assign({ id: doc.id }, doc.data()));
            });
        });
        return snapshots;
    }
}