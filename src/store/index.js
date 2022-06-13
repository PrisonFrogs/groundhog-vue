import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import AppModule from './modules/app';
import LoadingModule from './modules/loading';

Vue.use(Vuex);

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    app: AppModule,
    loading: LoadingModule,
  },
});

export default store;
