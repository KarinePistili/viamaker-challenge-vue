<template>
  <div>
    <Toolbar v-if="$route.path != '/'" />
    <v-container>
      <v-row class="ma-0 pt-8">
        <h1>Gerenciar escolas</h1>
      </v-row>
      <v-divider />
       <v-row class="ma-0 pt-8">
        <v-btn
          color="success"
          class="mr-2 mt-2"
          @click="newSchool = true"
          >adicionar escola
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-card class="mt-8 pa-6">
        <v-row class="ma-0">
          <v-col cols="12" md="8" sm="6">
            <v-card-title class="ml-0 pl-0">Escolas cadastradas</v-card-title>
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
        <v-data-table :headers="headers" :items="filteredSchools" :items-per-page="10">
          <template v-slot:item.actions="{ item }">
            <v-row justify="end">
              <v-btn color="blue" small text @click="manageSchool(item)">
                gerenciar
                <v-icon right>mdi-cog</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <school-form
      v-model="newSchool"
      :school="{}"
      :title="'Nova Escola'"
      :newSchool="true"
    />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import SchoolForm from "@/components/SchoolForm.vue";


export default {
  components: {
    Toolbar,
    SchoolForm
  },
  data() {
    return {
      search: "",
      newSchool: false,
      headers: [
        { text: "Nome", value: "name" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Turmas", value: "qtClasses" },
        { text: "", value: "actions", align: "end", sortable: false },
      ],
    };
  },
  computed: {
    schools(){
      return this.$store.state.school.schools
    },
    filteredSchools() {
      return this.schools.filter((s) => {
        return (
          s.name.toLowerCase().includes(this.search.toLowerCase()) ||
          s.cnpj.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  methods: {
    manageSchool(school) {
      this.$router.push(`/school-dashboard/${school.id}`)
    },
  },
  created(){
    this.$store.dispatch('getSchools')
  }
};
</script>