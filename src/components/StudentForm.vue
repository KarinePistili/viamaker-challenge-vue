<template>
  <div>
    <v-dialog
      v-model="show"
      width="40%"
      :fullscreen="$vuetify.breakpoint.mdAndDown"
    >
      <v-card class="pa-6">
        <v-row justify="end" class="ma-0">
          <v-btn @click="reset" icon>
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-row class="ma-0 pl-4 pr-4">
          <v-card-title class="pl-0"> {{ title }} </v-card-title>
        </v-row>
        <v-form ref="formStudent">
          <v-row class="ma-0 pl-4 pr-4">
            <v-text-field
              outlined
              placeholder="Nome"
              v-model="editedStudent.name"
              :rules="rules.name"
            ></v-text-field>
          </v-row>
        </v-form>
        <v-row class="ma-0 pl-4 pr-4" justify="space-between">
          <v-btn color="red" text @click="reset">cancelar</v-btn>
          <v-btn color="success" @click="saveStudent()">salvar</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["value", "student", "title", "newStudent"],
  data() {
    return {
      rules: {
        name: [(v) => !!v || "Nome é obrigatório"],
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
    editedStudent() {
      return Object.assign({}, this.student);
    },
  },
  methods: {
    saveStudent() {
      if (this.$refs.formStudent.validate()) {
        if (this.newStudent) {
          this.editedStudent.classId = this.$route.params.classid;
          this.$store.dispatch("createStudent", this.editedStudent);
        } else {
          var id = this.editedStudent.id;
          delete this.editedStudent.id;
          this.$store.dispatch("updateStudent", {
            data: this.editedStudent,
            docId: id,
          });
        }
        this.reset()
      }
    },
    reset(){
      this.show = false
    }
  },
};
</script>