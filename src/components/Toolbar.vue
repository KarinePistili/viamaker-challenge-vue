<template>
    <v-toolbar dark> 
      <v-toolbar-title class="toolbar-title" @click="$router.push('/')">G-Escola</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
          <v-btn dark text to="/super-dashboard">Painel</v-btn>
          <v-btn dark text v-if="$route.path != '/login'" to="/login">Entrar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<style>
.toolbar-title{
    cursor: pointer;
}
</style>