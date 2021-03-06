import Vue from 'vue';
import store from '@/store';
import App from './App.vue';

import router from './router';
import vuetify from './plugins/vuetify';
import './plugins/toast';
import './utils/capitalize';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$store = store;
// Vue.prototype.$router = router;

export default vue;
