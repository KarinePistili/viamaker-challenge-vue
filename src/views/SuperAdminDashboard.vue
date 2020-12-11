<template>
  <div>
    <Toolbar v-if="$route.path != '/'" />
    <v-container>
      <v-row class="ma-0 pt-8">
        <h1>Benvindo Super Admin!</h1>
      </v-row>
      <v-divider />
      <v-row class="pt-12">
        <v-col cols="12" md="3" v-for="(action, i) in actions" :key="i">
          <v-hover v-slot="{ hover }" style="cursor: pointer">
            <v-card
              height="100%"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              @click="manage"
            >
              <v-img height="200" :src="action.img"></v-img>
              <v-card-title>{{ action.title }}</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
</style>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar,
  },
  data() {
    return {
      actions: [
        {
          title: "Gerenciar Escolas",
          img: require("@/assets/undraw-school.svg"),
          action: "manage-schools",
        },
        {
          title: "Gerenciar usuários",
          img: require("@/assets/undraw-users.svg"),
          action: "manage-users",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    manage() {
      console.log("manage");
    },
  },
};
</script>