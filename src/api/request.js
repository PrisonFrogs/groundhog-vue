import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 90 * 1000, // request timeout
});

service.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';

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
    return Promise.reject(error);
  },
);

export default service;
