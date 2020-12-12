<template>
  <div>
    <Toolbar v-if="$route.path != '/'" />
    <v-container>
      <v-row class="ma-0 pt-8" align="center">
        <h1>{{ school.name }}</h1>
      </v-row>
      <v-divider />
      <v-row class="ma-0 pt-8">
        <v-btn
          color="success"
          class="mr-2 mt-2"
          
          >adicionar turma
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          color="blue"
          class="mt-2 mr-2"
          dark
          >editar escola
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="red" class="mt-2" dark 
          >apagar escola
          <v-icon right>mdi-delete</v-icon>
        </v-btn>
      </v-row>
      <v-card class="mt-8 pa-6">
        <v-row class="ma-0">
          <v-col cols="12" md="8" sm="6">
            <v-card-title class="ml-0 pl-0">Turmas cadastradas</v-card-title>
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
          :items="filteredClasses"
          :items-per-page="10"
        >
          <template v-slot:item.actions="{ item }">
            <v-row justify="end">
              <v-btn color="blue" small text @click="manageClass(item)">
                gerenciar
                <v-icon right>mdi-cog</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar,
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Nome", value: "name" },
        { text: "Alunos", value: "qtStudents" },
        { text: "", value: "actions", align: "end", sortable: false },
      ],
      school: {
        id: "001",
        name: "Escola 01",
        cnpj: "123456789",
        qtClasses: 3,
        classes: [
          { id: "001", name: "3A", qtStudents: 30 },
          { id: "002", name: "4B", qtStudents: 40 },
          { id: "003", name: "13", qtStudents: 15 },
        ],
      },
    };
  },
  computed: {
    filteredClasses() {
      return this.school.classes.filter((c) => {
        return c.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    manageClass(schoolClass) {
      this.$router.push(
        `/school-dashboard/${this.school.id}/class/${schoolClass.id}`
      );
    },
  },
};
</script>