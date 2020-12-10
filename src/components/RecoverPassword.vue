<template>
  <v-dialog
    v-model="show"
    width="40%"
    :fullscreen="$vuetify.breakpoint.mdAndDown"
  >
    <v-card class="pa-4">
      <v-row justify="end" class="ma-0">
        <v-btn @click="show = false" text>
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-row>
      <div v-if="!sent">
        <v-card-title>Recuperar senha</v-card-title>
        <v-card-text
          >Enviaremos um e-mail para o enderço abaixo para confirmar sua
          identidade e trocar a senha</v-card-text
        >
        <v-text-field
          v-model="email"
          outlined
          class="pl-4 pr-4"
          prepend-inner-icon="mdi-email"
          label="Seu endereço e-mail"
          :rules="rules.email"
        ></v-text-field>
        <v-row class="ma-0 pb-4" justify="center">
          <v-btn @click="sendRecoveryEmail()" dark>Recuperar</v-btn>
        </v-row>
      </div>
      <div v-else>
        <v-row justify="center">
          <v-card-title>Email enviado!</v-card-title>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle
            >Verifique sua caixa de entrada {{ email }}</v-card-subtitle
          >
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      email: "",
      sent: false,
       rules: {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "This e-mail isn't valid",
        ],
      },

    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    sendRecoveryEmail() {
      console.log("TO BE IMPLEMENTED");
      console.log("EMAIL", this.email);
      this.sent = true;
    },
  },
};
</script>