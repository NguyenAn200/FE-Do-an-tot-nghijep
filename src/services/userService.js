import api from '../config/api.config';

// 1. Tạo user
export const createUser = data =>
  api.post('/users/v1.0', data).then(res => res.data);

// 2. Lấy tất cả
export const fetchAllUsers = () =>
  api.get('/users/v1.0').then(res => res.data);

// 3. Lấy theo ID
export const fetchUserById = id =>
  api.get(`/users/v1.0/${id}`).then(res => res.data);

// 4. Phân trang
export const fetchPagedUsers = (page, size, sortBy, sortDir) =>
  api
    .get('/users/v1.0/paged', { params: { pageNo: page, pageSize: size, sortBy, sortDir } })
    .then(res => res.data);

// 5. Tìm theo username/email
export const fetchByUsername = username =>
  api.get('/users/v1.0/search/username', { params: { username } }).then(r => r.data);
export const fetchByEmail = email =>
  api.get('/users/v1.0/search/email', { params: { email } }).then(r => r.data);

// 6. Cập nhật, kích hoạt, hủy kích hoạt, xóa
export const updateUser = (id, data) =>
  api.put(`/users/v1.0/${id}`, data).then(res => res.data);
export const activateUser = id =>
  api.post(`/users/v1.0/${id}/activate`).then(res => res.data);
export const deactivateUser = id =>
  api.post(`/users/v1.0/${id}/deactivate`).then(res => res.data);
export const deleteUser = id =>
  api.delete(`/users/v1.0/${id}`);

