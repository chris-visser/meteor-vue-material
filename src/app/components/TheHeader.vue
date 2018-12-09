<template>
  <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
  >
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleDrawer() {
        this.$emit('toggleDrawer');
      }
    },
  };
</script>
