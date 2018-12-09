<template>
  <v-app id="inspire">

    <TheNavigation :drawer="drawer" />

    <TheHeader v-on:toggleDrawer="drawer = !drawer" />

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <slot />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TheHeader from '../components/TheHeader';
  import TheNavigation from '../components/TheNavigation';

  export default {
    components: {
      TheNavigation,
      TheHeader,
    },
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  };
</script>

<style>

</style>
