import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import AppModule from './modules/app';

Vue.use(Vuex);

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    app: AppModule,
  },
});

export default store;
