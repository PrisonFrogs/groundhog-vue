import store from '@/store';

const fakeLoading = (time, callback) => {
  store.dispatch('setLoading');
  setTimeout(() => {
    store.dispatch('unsetLoading');
    callback();
  }, time);
};

export default fakeLoading;
