import api from '../config/api.config';

export const createSalary = data =>
  api.post('/api/salaries/v1.0', data).then(res => res.data);
export const fetchSalaryById = id =>
  api.get(`/api/salaries/v1.0/${id}`).then(res => res.data);
export const fetchSalaryWithDetails = id =>
  api.get(`/api/salaries/v1.0/${id}/details`).then(res => res.data);
export const fetchAllSalaries = () =>
  api.get('/api/salaries/v1.0').then(res => res.data);
export const fetchPagedSalaries = (pageNo, pageSize, sortBy, sortDir) =>
  api.get('/api/salaries/v1.0/paged', { params: { pageNo, pageSize, sortBy, sortDir } }).then(res => res.data);
export const fetchByEmployee = empId =>
  api.get(`/api/salaries/v1.0/employee/${empId}`).then(res => res.data);
export const fetchByPeriod = (month,year) =>
  api.get('/api/salaries/v1.0/period', { params: { month, year } }).then(res => res.data);
export const updateSalary = (id, data) =>
  api.put(`/api/salaries/v1.0/${id}`, data).then(res => res.data);
export const deleteSalary = id =>
  api.delete(`/api/salaries/v1.0/${id}`);