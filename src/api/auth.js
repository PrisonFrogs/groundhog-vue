import request from './request';

export const login = (data) => request.post('/auth/login', data);

export const shake = () => request.get('/auth/shake');
