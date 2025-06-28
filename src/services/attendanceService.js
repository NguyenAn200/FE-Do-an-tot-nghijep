import api from '../config/api.config';

// 1. Tạo 1 bản ghi
export const createAttendance = data =>
  api.post('/attendances/v1.0', data).then(res => res.data);

// 2. Tạo bulk
export const createBulkAttendance = list =>
  api.post('/attendances/v1.0/bulk', list).then(res => res.data);

// 3. Lấy theo ID
export const fetchAttendanceById = id =>
  api.get(`/attendances/v1.0/${id}`).then(res => res.data);

// 4. Lấy tất cả
export const fetchAllAttendances = () =>
  api.get('/attendances/v1.0').then(res => res.data);

// 5. Lấy theo trang
export const fetchPagedAttendances = (page, size, sortBy, sortDir) =>
  api.get('/attendances/v1.0/paged', {params:{pageNo:page, pageSize:size, sortBy, sortDir}})
     .then(res => res.data);

// 6. Lấy theo nhân viên và ngày
export const fetchByEmployeeAndDate = (empId, date) =>
  api.get(`/attendances/v1.0/employee/${empId}`, {params:{workDate:date}})
     .then(res => res.data);

// 7. Lấy tất cả attendance của nhân viên (GET /api/attendances/v1.0/employee/{employeeId}/all)
export const fetchAttendanceByEmployee = empId =>
  api.get(`/attendances/v1.0/employee/${empId}/all`).then(res => res.data);

// 8. Lấy theo khoảng ngày (GET /api/attendances/v1.0/date-range?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD)
export const fetchByDateRange = (start, end) =>
  api.get('/attendances/v1.0/date-range', {params:{startDate:start, endDate:end}})
     .then(res => res.data);

// 9. Cập nhật attendance (PUT /api/attendances/v1.0/{attendanceId})
export const updateAttendance = (id, data) =>
  api.put(`/attendances/v1.0/${id}`, data).then(res => res.data);

// 10. Xóa attendance (DELETE /api/attendances/v1.0/{attendanceId})
export const deleteAttendance = id =>
  api.delete(`/attendances/v1.0/${id}`);
