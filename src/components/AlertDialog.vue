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
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{message}}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["value", "title", "message"],
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
};
</script>