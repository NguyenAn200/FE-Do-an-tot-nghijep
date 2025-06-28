import api from '../config/api.config';

// 1. Create
export const createEmployee = data =>
  api.post('/api/employees/v1.0', data).then(res => res.data);

// 2. Get by ID
export const fetchEmployeeById = id =>
  api.get(`/api/employees/v1.0/${id}`).then(res => res.data);

// 3. Get with Attendances
export const fetchWithAttendances = id =>
  api.get(`/api/employees/v1.0/${id}/attendances`).then(res => res.data);

// 4. Get with Salaries
export const fetchWithSalaries = id =>
  api.get(`/api/employees/v1.0/${id}/salaries`).then(res => res.data);

// 5. Get with Advances
export const fetchWithAdvances = id =>
  api.get(`/api/employees/v1.0/${id}/advances`).then(res => res.data);

// 6. Get by Code
export const fetchByCode = code =>
  api.get('/api/employees/v1.0/search/code', { params: { code } }).then(res => res.data);

// 7. Get by ID Card
export const fetchByIdCard = idCard =>
  api.get('/api/employees/v1.0/search/idcard', { params: { idCard } }).then(res => res.data);

// 8. Get All
export const fetchAllEmployees = () =>
  api.get('/api/employees/v1.0').then(res => res.data);

// 9. Get All Active
export const fetchActiveEmployees = () =>
  api.get('/api/employees/v1.0/active').then(res => res.data);

// 10. Get Paged
export const fetchPagedEmployees = (pageNo, pageSize, sortBy, sortDir) =>
  api.get('/api/employees/v1.0/paged', { params: { pageNo, pageSize, sortBy, sortDir } })
     .then(res => res.data);

// 11. By Department
export const fetchByDepartment = deptId =>
  api.get(`/api/employees/v1.0/department/${deptId}`).then(res => res.data);

// 12. By Position
export const fetchByPosition = posId =>
  api.get(`/api/employees/v1.0/position/${posId}`).then(res => res.data);

// 13. By Name
export const fetchByName = name =>
  api.get('/api/employees/v1.0/search/name', { params: { name } }).then(res => res.data);

// 14. By Join Date Range
export const fetchByJoinDateRange = (start, end) =>
  api.get('/api/employees/v1.0/join-date-range', { params: { start, end } })
     .then(res => res.data);

// 15. Count by Department
export const countByDepartment = () =>
  api.get('/api/employees/v1.0/count/department').then(res => res.data);

// 16. Count by Position
export const countByPosition = () =>
  api.get('/api/employees/v1.0/count/position').then(res => res.data);

// 17. Update
export const updateEmployee = (id, data) =>
  api.put(`/api/employees/v1.0/${id}`, data).then(res => res.data);

// 18. Activate
export const activateEmployee = id =>
  api.post(`/api/employees/v1.0/${id}/activate`).then(res => res.data);

// 19. Deactivate
export const deactivateEmployee = id =>
  api.post(`/api/employees/v1.0/${id}/deactivate`).then(res => res.data);

// 20. Delete
export const deleteEmployee = id =>
  api.delete(`/api/employees/v1.0/${id}`);