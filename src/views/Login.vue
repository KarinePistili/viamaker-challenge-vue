<template>
  <div class="login">
    <Toolbar/>
    <v-container fill-height>
      <v-row justify="center">
        <v-col cols="12" lg="6" xl="6" md="6">
          <v-card class="pa-6" height="100%">
            <v-card-title>Entrar</v-card-title>
            <v-card-text class="subtitle-1"
              >Entre com seu e-mail e senha
            </v-card-text>
            <v-form ref="login">
              <v-text-field
                v-model="user.email"
                outlined
                class="pl-4 pr-4"
                prepend-inner-icon="mdi-email"
                label="E-mail"
                :rules="rules.email"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                outlined
                class="pl-4 pr-4"
                prepend-inner-icon="mdi-eye"
                type="password"
                label="Senha"
                :rules="rules.password"
              ></v-text-field>
              <v-row justify="center">
                <v-btn dark @click="logIn">Entrar</v-btn>
              </v-row>
              <v-row justify="center" class="pt-12">
                <p @click="recoverPassword" class="caption">
                  Esqueceu a senha? Sem problemas, recupere aqui
                </p>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-6">
            <v-card-title>Ainda não é cadastrado?</v-card-title>
            <v-card-text
              >Entre em contato conosco e conheça mais sobre os nosso serviços e
              como podemos ajudar a sua escola</v-card-text
            >
            <v-form ref="question">
              <v-text-field
                v-model="emailQuestion"
                outlined
                class="pl-4 pr-4"
                prepend-inner-icon="mdi-email"
                label="Seu endereço e-mail"
                :rules="rules.email"
              ></v-text-field>
              <v-textarea
                v-model="question"
                outlined
                class="pl-4 pr-4"
                prepend-inner-icon="mdi-text"
                label="Escreva aqui a sua dúvida/interesse"
                :rules="rules.msg"
              ></v-textarea>
              <v-row justify="end" class="ma-0 pr-4">
                <v-btn dark @click="sendQuestion"
                  >Enviar
                  <v-icon right>mdi-send</v-icon>
                </v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <RecoverPassword v-model="openDialog" />
    <AlertDialog v-model="alertDialog" :title="title" :message="message" />
  </div>
</template>

<script>
import RecoverPassword from "@/components/RecoverPassword.vue";
import AlertDialog from "@/components/AlertDialog.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    RecoverPassword,
    AlertDialog,
    Toolbar,
  },
  data() {
    return {
      openDialog: false,
      alertDialog: false,
      emailQuestion: "",
      question: "",
      message: "",
      title: "",
      user: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          (v) => !!v || "E-mail é obrigatório",
          (v) => /.+@.+/.test(v) || "Esse e-mail não é válido",
        ],
        password: [
          (v) => !!v || "Senha é obrigatória",
          (v) => v.length >= 6 || "Senha precisa ter 6 ou mais caracteres",
        ],
        msg: [(v) => !!v || "Não é possível enviar mensagens vazias"],
      },
    };
  },
  methods: {
    recoverPassword() {
      console.log("Recover password");
      this.openDialog = true;
    },
    logIn() {
      if (this.$refs.login.validate()) {
        console.log("login valid");
        this.$store.dispatch("signin", this.user);

        // for now it will always go to the super admin dashboard
        this.$router.push("/");
      }
    },
    sendQuestion() {
      if (this.$refs.question.validate()) {
        console.log("send question");
        this.title = "Mensagem Enviada!";
        this.message =
          "Fique de olho na sua caixa de entrada que entraremos em contato com você rapidinho.";
        this.alertDialog = true;
        this.$refs.question.reset();
        this.emailQuestion = "";
        this.question = "";
      }
    },
  },
};
</script>

<style>
.login {
  height: 100%;
}
.caption {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>