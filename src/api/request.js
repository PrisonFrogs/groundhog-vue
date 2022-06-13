import axios from 'axios';
import Vue from 'vue';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 90 * 1000, // request timeout
});

service.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';

service.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (Vue.prototype.$store.getters.loginState) {
      const token = Vue.prototype.$store.getters.authToken;
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => response.data.payload, // if the custom code is not 200, it is judged as an error.

  (error) => {
    console.error(`err${error}`); // for debug
    Vue.prototype.$store.dispatch('showErrorToast', error.response.data.meta.msg);
    return Promise.reject(error);
  },
);

export default service;
