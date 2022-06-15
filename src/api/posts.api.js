import request from '@/api/request';

export const getPosts = (params) => request.get('/posts', {
  params,
});

export const getPost = (id) => request.get(`/posts/${id}`);

export const likePost = (id) => request.put(`/posts/${id}/like`);

export const createPost = (data) => request.post('/posts', {
  post: data,
});
