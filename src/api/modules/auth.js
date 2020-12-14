import firebase from 'firebase'

export default {
    signIn: async (payload) => {
        var auth = firebase.auth()
        await auth.signInWithEmailAndPassword(payload.email, payload.password)
        return auth.currentUser
      },
      logout: () => {
        var auth = firebase.auth()
        return auth.signOut()
      },   

}
