import request from '@/api/request';

export const getPosts = (params) => request.get('/posts', { params });

export const getPost = (id) => request.get(`/posts/${id}`);
