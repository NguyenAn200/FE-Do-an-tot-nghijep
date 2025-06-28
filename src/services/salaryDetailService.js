import api from '../config/api.config';

// 1. Tạo chi tiết lương
export const createSalaryDetail = data =>
  api.post('/api/salary-details/v1.0', data).then(res => res.data);

// 2. Lấy tất cả
export const fetchAllSalaryDetails = () =>
  api.get('/api/salary-details/v1.0').then(res => res.data);

// 3. Lấy theo ID
export const fetchSalaryDetailById = id =>
  api.get(`/api/salary-details/v1.0/${id}`).then(res => res.data);

// 4. Phân trang
export const fetchPagedSalaryDetails = (page, size, sortBy, sortDir) =>
  api.get('/api/salary-details/v1.0/paged', {
    params: { pageNo: page, pageSize: size, sortBy, sortDir }
  }).then(res => res.data);

// 5. Lấy theo salaryId
export const fetchDetailsBySalary = salaryId =>
  api.get(`/api/salary-details/v1.0/salary/${salaryId}`).then(res => res.data);

// 6. Lọc theo itemType
export const fetchDetailsByItemType = itemType =>
  api.get(`/api/salary-details/v1.0/item-type/${itemType}`).then(res => res.data);

// 7. Lọc theo employee và kỳ
export const fetchDetailsByEmployeePeriod = (empId, month, year) =>
  api.get(`/api/salary-details/v1.0/employee/${empId}/period`, {
    params: { month, year }
  }).then(res => res.data);

// 8. Cập nhật & xóa
export const updateSalaryDetail = (id, data) =>
  api.put(`/api/salary-details/v1.0/${id}`, data).then(res => res.data);
export const deleteSalaryDetail = id =>
  api.delete(`/api/salary-details/v1.0/${id}`);
