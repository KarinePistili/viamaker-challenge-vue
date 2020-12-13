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
        <v-form ref="formSchoolClass">
          <v-row class="ma-0 pl-4 pr-4">
            <v-text-field
              outlined
              placeholder="Nome"
              v-model="editedSchoolClass.name"
              :rules="rules.name"
            ></v-text-field>
          </v-row>
        </v-form>
        <v-row class="ma-0 pl-4 pr-4" justify="space-between">
          <v-btn color="red" text @click="reset">cancelar</v-btn>
          <v-btn color="success" @click="saveSchoolClass()">salvar</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["value", "schoolClass", "title", "newClass"],
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
    editedSchoolClass() {
      return Object.assign({}, this.schoolClass);
    },
  },
  methods: {
    saveSchoolClass() {
      if (this.$refs.formSchoolClass.validate()) {
        if(this.newClass){
          this.editedSchoolClass.qtStudents = 0
          this.$store.dispatch('createClass',{data:this.editedSchoolClass, schoolid: this.$route.params.schoolid})
        }
        else{
          delete this.schoolClass.id;
          this.$store.dispatch('updateClass', {data:this.editedSchoolClass, schoolid: this.$route.params.schoolid, classid: this.$route.params.classid})
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