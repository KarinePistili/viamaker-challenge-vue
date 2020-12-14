<template>
    <v-toolbar dark> 
      <v-toolbar-title class="toolbar-title" @click="$router.push('/')">G-Escola</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
          <v-btn dark text to="/super-dashboard" v-if="$store.state.auth.user != null">Painel</v-btn>
          <v-btn dark text v-if="$route.path != '/login' && $store.state.auth.user == null" to="/login">Entrar</v-btn>
          <v-btn dark text v-if="$route.path != '/login' && $store.state.auth.user != null" @click="logOut">Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<style>
.toolbar-title{
    cursor: pointer;
}
</style>

<script>
export default {
    methods:{
        logOut(){
            this.$store.dispatch('signout')
            this.$router.push('/')
        }
    }
}
</script>