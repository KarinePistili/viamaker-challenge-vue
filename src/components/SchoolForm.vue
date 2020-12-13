<template>
  <div>
    <v-dialog
      v-model="show"
      width="40%"
      :fullscreen="$vuetify.breakpoint.mdAndDown"
    >
      <v-card class="pa-6">
        <v-row justify="end" class="ma-0">
          <v-btn @click="resetModel" icon>
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-row class="ma-0 pl-4 pr-4">
          <v-card-title class="pl-0"> {{ title }} </v-card-title>
        </v-row>
        <v-form ref="formSchool">
          <v-row class="ma-0 pl-4 pr-4">
            <v-text-field
              outlined
              placeholder="Nome"
              :rules="rules.name"
              v-model="school.name"
            ></v-text-field>
          </v-row>
          <v-row class="ma-0 pl-4 pr-4">
            <v-text-field
              outlined
              placeholder="CNPJ"
              :rules="rules.cnpj"
              v-model="school.cnpj"
            ></v-text-field>
          </v-row>
        </v-form>
        <v-row class="ma-0 pl-4 pr-4" justify="space-between">
          <v-btn color="red" text @click="resetModel">cancelar</v-btn>
          <v-btn color="success" @click="createSchool()">salvar</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["value", "title", "newSchool"],
  data() {
    return {
      schoolModel: {
        name: "",
        cnpj: "",
        qtClasses: 0,
        classes: {},
      },
      rules: {
        name: [(v) => !!v || "Nome é obrigatório"],
        cnpj: [(v) => !!v || "CNPJ é obrigatório"],
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
    school() {
      if (!this.newSchool) {
        return Object.assign({}, this.$store.state.school.school);
      }
      return this.schoolModel
    },
  },
  methods: {
    createSchool() {
      if (this.$refs.formSchool.validate()) {
        if (this.newSchool) {
          this.$store.dispatch("createSchool", this.school);
        } else {
          console.log("update school");
          var docId = this.school.id;
          delete this.school.id;
          this.$store.dispatch("updateSchool", {
            docId: docId,
            data: this.school,
          });
        }
        this.resetModel();
      }
    },
    resetModel() {
      this.show = false;
      this.school = {
        name: "",
        cnpj: "",
        qtClasses: 0,
        classes: {},
      };
    },
  },
};
</script>