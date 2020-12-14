<template>
  <div>
    <Toolbar v-if="$route.path != '/'" />
    <v-container>
      <v-row class="ma-0 pt-8" align="center">
        <h1>{{ schoolClass.name }}</h1>
      </v-row>
      <v-divider />
      <v-row class="ma-0 pt-8">
        <v-btn
          color="success"
          class="mr-2 mt-2"
          @click="
            editStudent = true;
            studentFormTitle = 'Novo aluno';
            newStudent = true;
          "
          >adicionar aluno
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          color="blue"
          class="mt-2 mr-2"
          dark
          @click="editSchoolClass = true"
          >editar turma
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="red" class="mt-2" dark @click="deleteSchoolClass"
          >apagar turma
          <v-icon right>mdi-delete</v-icon>
        </v-btn>
      </v-row>
      <v-card class="mt-8 pa-6">
        <v-row class="ma-0">
          <v-col cols="12" md="8" sm="6">
            <v-card-title class="ml-0 pl-0">Lista de alunos</v-card-title>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              outlined
              label="Pesquisar"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="filteredStudents"
          :items-per-page="10"
        >
          <template v-slot:item.actions="{ item }">
            <v-row justify="end" class="mr-2">
              <v-btn
                color="black"
                small
                icon
                @click="
                  editStudent = true;
                  selectedStudent = item;
                  studentFormTitle = 'Editar aluno';
                  newStudent = false;
                "
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="red" small icon @click="deleteStudent(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <student-form
      v-model="editStudent"
      :student="selectedStudent"
      :title="studentFormTitle"
      :newStudent="newStudent"
    />
    <school-class-form
      v-model="editSchoolClass"
      :schoolClass="schoolClass"
      title="Editar turma"
    />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import StudentForm from "@/components/StudentForm.vue";
import SchoolClassForm from "@/components/SchoolClassForm.vue";

export default {
  components: {
    Toolbar,
    StudentForm,
    SchoolClassForm,
  },
  data() {
    return {
      search: "",
      editStudent: false,
      studentFormTitle: "",
      editSchoolClass: false,
      selectedStudent: {},
      newStudent: false,
      headers: [
        { text: "Nome", value: "name" },
        { text: "", value: "actions", align: "end", sortable: false },
      ],
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter((s) => {
        return s.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    students() {
      return this.$store.state.student.students;
    },
    schoolClass() {
      return this.$store.state.schoolClass.class;
    },
  },
  methods: {
    deleteStudent(student) {
      if (confirm(`Tem certeza que quer apagar ${student.name} dessa turma?`)) {
        this.$store.dispatch("deleteStudent", {
          docId: student.id,
          schoolid: this.$route.params.schoolid,
          classid: this.$route.params.classid,
        });
      } else console.log("disse nao");
    },
    deleteSchoolClass() {
      if (
        confirm(
          `Tem certeza que quer apagar essa turma? Essa ação não pode ser desfeita`
        )
      ) {
        this.$store.dispatch("deleteClass", {
          schoolid: this.$route.params.schoolid,
          classid: this.$route.params.classid,
        });
        this.$router.go(-1);
      } else console.log("disse nao");
    },
  },
  created() {
    this.$store.dispatch("getClassById", {
      schoolid: this.$route.params.schoolid,
      classid: this.$route.params.classid,
    });
    this.$store.dispatch("getStudentsFromClass", this.$route.params.classid);
  },
};
</script>