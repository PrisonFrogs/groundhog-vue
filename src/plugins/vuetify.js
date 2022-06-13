import Vue from 'vue';
import Vuetify from 'vuetify';
import { light } from './theme';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light,
    },
  },
};

export default new Vuetify(opts);
