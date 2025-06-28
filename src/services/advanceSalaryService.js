import api from '../config/api.config';

// Lấy danh sách Advance Salary
export const fetchAdvances = () =>
  api.get('/advance-salaries/v1.0')
     .then(res => res.data);

// Tạo mới Advance Salary
export const createAdvance = data =>
  api.post('/advance-salaries/v1.0', data)
     .then(res => res.data);

// Lấy chi tiết theo ID
export const fetchAdvanceById = id =>
  api.get(`/advance-salaries/v1.0/${id}`)
     .then(res => res.data);