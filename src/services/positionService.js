import api from '../config/api.config';

export const createPosition = data =>
  api.post('/api/positions/v1.0', data).then(res => res.data);
export const fetchPositionById = id =>
  api.get(`/api/positions/v1.0/${id}`).then(res => res.data);
export const fetchWithEmployees = id =>
  api.get(`/api/positions/v1.0/${id}/employees`).then(res => res.data);
export const searchByName = name =>
  api.get('/api/positions/v1.0/search', { params: { name } }).then(res => res.data);
export const fetchAllPositions = () =>
  api.get('/api/positions/v1.0').then(res => res.data);
export const fetchActivePositions = () =>
  api.get('/api/positions/v1.0/active').then(res => res.data);
export const filterByActive = isActive =>
  api.get('/api/positions/v1.0/filter', { params: { isActive } }).then(res => res.data);
export const fetchPagedPositions = (pageNo, pageSize, sortBy, sortDir) =>
  api.get('/api/positions/v1.0/paged', { params: { pageNo, pageSize, sortBy, sortDir } }).then(res => res.data);
export const fetchByDepartment = deptId =>
  api.get(`/api/positions/v1.0/department/${deptId}`).then(res => res.data);
export const fetchActiveByDepartment = deptId =>
  api.get(`/api/positions/v1.0/department/${deptId}/active`).then(res => res.data);
export const updatePosition = (id, data) =>
  api.put(`/api/positions/v1.0/${id}`, data).then(res => res.data);
export const activatePosition = id =>
  api.post(`/api/positions/v1.0/${id}/activate`).then(res => res.data);
export const deactivatePosition = id =>
  api.post(`/api/positions/v1.0/${id}/deactivate`).then(res => res.data);
export const deletePosition = id =>
  api.delete(`/api/positions/v1.0/${id}`);