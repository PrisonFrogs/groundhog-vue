import {
  login,
} from '@/api/auth.api';
import jwtDecode from 'jwt-decode';
import Vue from 'vue';

const defaultState = {
  authToken: null,
  user: null,
  expAt: null,
  refreshToken: null,
  toast: {
    message: '',
    type: 'bottom',
    duration: 3000,
    wordWrap: true,
    width: '150px',
  },
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_AUTH_TOKEN: (state, token) => {
    state.authToken = token;
  },
  SET_EXP_AT: (state, expAt) => {
    state.expAt = expAt;
  },
  SET_TOAST: (state, toast) => {
    state.toast = Object.assign(defaultState.toast, toast);

    Vue.prototype.$toast[state.toast.type](state.toast.message);
  },
};

const actions = {
  async login({
    commit,
  }, payload) {
    const response = await login(payload);

    const accessToken = response.access_token;
    const expAt = response.exp_at;
    const user = await jwtDecode(accessToken);

    commit('SET_AUTH_TOKEN', accessToken);
    commit('SET_EXP_AT', expAt);
    commit('SET_USER', user);
  },
  showSucessToast({
    commit,
  }, message) {
    commit('SET_TOAST', {
      message,
    });
  },
  showErrorToast({
    commit,
  }, message) {
    commit('SET_TOAST', {
      message,
    });
  },
};

const getters = {
  currentUser: (state) => state.user,
  loginState: (state) => !!state.user,
  authToken: (state) => state.authToken,
};

export default {
  namespaced: false,
  state: defaultState,
  mutations,
  actions,
  getters,
};
