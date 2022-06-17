const state = {
  pages: [
    {
      id: 1,
      title: '首页',
    },
    {
      id: 2,
      title: '购物',
    },
    {
      id: 3,
      title: '消息',
    },
    {
      id: 4,
      title: '我',
    },
  ],
  current_page: '首页',
};

const getters = {
  allListPages: () => state.pages,
  getCurrentPage: () => state.current_page,
};

const actions = {
  clickPage({ commit }, page) {
    commit('newCurrentPage', page);
  },
};

const mutations = {
  newCurrentPage(page) {
    state.current_page = page;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
