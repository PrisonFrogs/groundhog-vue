import service from './request';

export const login = (data) => service.request({
  method: 'post',
  url: '/auth/login',
  data,
});

export const shake = () => service.get('/auth/shake');
