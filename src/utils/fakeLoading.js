import store from '@/store';

const fakeLoading = (time, callback) => {
  store.dispatch('setLoading');
  setTimeout(() => {
    store.dispatch('unsetLoading');
    callback();
  }, time);
};

const fakeLoadingAync = (time) => new Promise((resolve) => {
  store.dispatch('setLoading');
  setTimeout(() => {
    store.dispatch('unsetLoading');
    resolve();
  }, time);
});

export default fakeLoading;
export { fakeLoadingAync };
