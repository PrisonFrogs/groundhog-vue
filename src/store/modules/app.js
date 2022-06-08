import { login } from '@/api/auth';
import jwtDecode from 'jwt-decode';

const getDefaultState = () => ({
  authToken: null,
  user: null,
  expAt: null,
});

const state = getDefaultState();

const mutations = {
  SET_USER: (_, user) => {
    state.query = user;
  },
  SET_AUTH_TOKEN: (_, token) => {
    state.authToken = token;
  },
  SET_EXP_AT: (_, expAt) => {
    state.expAt = expAt;
  },
};

const actions = {
  async login({ commit }) {
    const response = await login(commit.login);

    const accessToken = response.payload.access_token;
    const expAt = response.payload.exp_at;
    const user = jwtDecode(accessToken);

    commit('SET_AUTH_TOKEN', accessToken);
    commit('SET_EXP_AT', expAt);
    commit('SET_USER', user);
  },
};

const getters = {
  user: (st) => st.user,
};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters,
};
