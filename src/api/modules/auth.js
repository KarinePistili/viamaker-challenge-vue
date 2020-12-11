export default {
    signIn: async (payload) => {
        // in this section we would have the api request for authentication that would return for us an user {name, email, id, role} and a session token
        // used mock data just to simulate the output
        return { user: {email: payload.email, name: 'Admin', id: 'axdw47f186', role: 0} , token: 'hanwaoiurabw5a68wfjan'}
    },
    logout: () => {
        // return null just to simulate a logout
        return {} 
    },

}
