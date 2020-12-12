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
        { text: "CNPJ", value: "cnpj" },
        { text: "Turmas", value: "qtTurmas" },
        { text: "", value: "actions", align: "end", sortable: false },
      ],
      schools: [
        {
          id: '001',
          name: "Escola 01",
          cnpj: "123456789",
          qtTurmas: 3,
          turmas: ["001", "002", "003"],
        },
        {
          id: '002',
          name: "Escola 02",
          cnpj: "123456789",
          qtTurmas: 4,
          turmas: ["001", "002", "003", "004"],
        },
      ],
    };
  },
  computed: {
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
};
</script>