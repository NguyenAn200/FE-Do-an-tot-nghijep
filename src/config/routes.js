import AdvanceSalaryListPage   from '../features/advance-salary/pages/AdvanceSalaryListPage';
import AdvanceSalaryFormPage   from '../features/advance-salary/pages/AdvanceSalaryFormPage';
import AdvanceSalaryDetailPage from '../features/advance-salary/pages/AdvanceSalaryDetailPage';
import AttendanceListPage  from '../features/attendance/pages/AttendanceListPage';
import AttendanceFormPage  from '../features/attendance/pages/AttendanceFormPage';
import AttendanceDetailPage from '../features/attendance/pages/AttendanceDetailPage';

const routes = [
  // Attendance Routes
  { path: '/attendances',     element:<PrivateRoute><AttendanceListPage/></PrivateRoute> },
  { path: '/attendances/new', element:<PrivateRoute><AttendanceFormPage/></PrivateRoute> },
  { path: '/attendances/:id', element:<PrivateRoute><AttendanceDetailPage/></PrivateRoute> },

  // Advance Salary Routes
  { path: '/advance-salaries',     element:<PrivateRoute><AdvanceSalaryListPage/></PrivateRoute> },
  { path: '/advance-salaries/new', element:<PrivateRoute><AdvanceSalaryFormPage/></PrivateRoute> },
  { path: '/advance-salaries/:id', element:<PrivateRoute><AdvanceSalaryDetailPage/></PrivateRoute> },

  // Department Routes
  { path: '/departments',     element:<PrivateRoute><DepartmentListPage/></PrivateRoute> },
  { path: '/departments/new', element:<PrivateRoute><DepartmentFormPage/></PrivateRoute> },
  { path: '/departments/:id', element:<PrivateRoute><DepartmentDetailPage/></PrivateRoute> },
];

export default routes;