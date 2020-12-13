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
    deleteDocument: async () => {
        // TO DO
    },
    updateObject: async () => {
        // TO DO
    },
    getObjects: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.get()    
    },
    queryObjects: async () =>{
        // TO DO
    }

}