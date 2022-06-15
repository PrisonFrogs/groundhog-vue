import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import AppModule from './modules/app';
import LoadingModule from './modules/loading';
import BottomBarModule from './modules/bottomBarList';

Vue.use(Vuex);

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    app: AppModule,
    loading: LoadingModule,
    bottomBarList: BottomBarModule,
  },
});

export default store;
