import firebase from 'firebase'

export default {
    createObject: async (payload) => {
        const db = firebase.firestore();
        var collectionRef = db.collection(payload.collection);
        return collectionRef.add(payload.data)    
    },
    getObjectById: async () => {
        // TO DO   
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