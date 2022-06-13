const defaultState = {
  loading: false,
};

const mutations = {
  SET_LOADING: (state, loading) => {
    state.loading = loading;
  },
};

const actions = {
  setLoading({ commit }) {
    commit('SET_LOADING', true);
  },
  unsetLoading({ commit }) {
    commit('SET_LOADING', false);
  },
};

const getters = {
  isLoading: (state) => state.loading,
};

export default {
  namespaced: false,
  state: defaultState,
  mutations,
  actions,
  getters,
};
