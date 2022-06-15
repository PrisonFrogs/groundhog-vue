<template>
  <div id="app">
    <v-app>
      <LoadingScreen v-if="isLoading" />
      <transition :name="$route.meta.transition" mode="out-in">
        <router-view></router-view>
      </transition>
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
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
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
