const state = {
  pages: [
    {
      id: 0,
      title: '首页',
    },
    {
      id: 1,
      title: '购物',
    },
    {
      id: 2,
      title: '消息',
    },
    {
      id: 3,
      title: '我',
    },
  ],
  current_page: 0,
};

const getters = {
  allListPages: () => state.pages,
  getCurrentPage: () => state.current_page,
};

const actions = {
  clickPage({ commit }, id) {
    commit('newCurrentPage', id);
  },
};

const mutations = {
  newCurrentPage(id) {
    state.current_page = id;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
