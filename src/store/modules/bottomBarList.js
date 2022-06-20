const defaultState = {
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
  allListPages: (state) => state.pages,
  getCurrentPage: (state) => state.current_page,
};

const actions = {
  clickPage({ commit }, id) {
    commit('newCurrentPage', id);
  },
};

const mutations = {
  newCurrentPage(state, id) {
    state.current_page = id;
    console.log(state.current_page);
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
