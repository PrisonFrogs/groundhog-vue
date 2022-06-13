<template>
  <div id="app">
    <v-app>
      <template v-if="isLoading">
        <LoadingScreen />
      </template>
      <router-view v-else />
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import { mapGetters } from 'vuex';
import LoadingScreen from '@/pages/LoadingScreen.vue';

export default {
  computed: {
    ...mapGetters(['isLoading']),
  },
  components: {
    LoadingScreen,
  },
};
</script>
