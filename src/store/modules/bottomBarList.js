const state = {
  items: [
    {
      id: 1,
      title: 'Recent',
    },
    {
      id: 2,
      title: 'Favorites',
    },
    {
      id: 3,
      title: 'Nearby',
    },
  ],
};

const getters = {
  allListItems: () => state.items,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
