import AttendanceListPage  from '../features/attendance/pages/AttendanceListPage';
import AttendanceFormPage  from '../features/attendance/pages/AttendanceFormPage';
import AttendanceDetailPage from '../features/attendance/pages/AttendanceDetailPage';
import AdvanceSalaryListPage   from '../features/advance-salary/pages/AdvanceSalaryListPage';
import AdvanceSalaryFormPage   from '../features/advance-salary/pages/AdvanceSalaryFormPage';
import AdvanceSalaryDetailPage from '../features/advance-salary/pages/AdvanceSalaryDetailPage';
import DepartmentListPage   from '../features/departments/pages/DepartmentListPage';
import DepartmentFormPage   from '../features/departments/pages/DepartmentFormPage';
import DepartmentDetailPage from '../features/departments/pages/DepartmentDetailPage';
import EmployeeListPage     from '../features/employees/pages/EmployeeListPage';
import EmployeeFormPage     from '../features/employees/pages/EmployeeFormPage';
import EmployeeDetailPage   from '../features/employees/pages/EmployeeDetailPage';
import PositionListPage     from '../features/positions/pages/PositionListPage';
import PositionFormPage     from '../features/positions/pages/PositionFormPage';
import PositionDetailPage   from '../features/positions/pages/PositionDetailPage';

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

  // Employee Routes
  { path: '/employees',     element:<PrivateRoute><EmployeeListPage/></PrivateRoute> },
  { path: '/employees/new', element:<PrivateRoute><EmployeeFormPage/></PrivateRoute> },
  { path: '/employees/:id', element:<PrivateRoute><EmployeeDetailPage/></PrivateRoute> },

  // Position Routes
  { path: '/positions',     element:<PrivateRoute><PositionListPage/></PrivateRoute> },
  { path: '/positions/new', element:<PrivateRoute><PositionFormPage/></PrivateRoute> },
  { path: '/positions/:id', element:<PrivateRoute><PositionDetailPage/></PrivateRoute> },
  // Salary Routes
  { path: '/salaries',     element:<PrivateRoute><SalaryListPage/></PrivateRoute> },
  { path: '/salaries/new', element:<PrivateRoute><SalaryFormPage/></PrivateRoute> },
  { path: '/salaries/:id', element:<PrivateRoute><SalaryDetailPage/></PrivateRoute> },
  // Salary Detail Routes
  { path: '/salary-details',      element:<PrivateRoute><SalaryDetailListPage/></PrivateRoute> },
  { path: '/salary-details/new',  element:<PrivateRoute><SalaryDetailFormPage/></PrivateRoute> },
  { path: '/salary-details/:id',  element:<PrivateRoute><SalaryDetailPage/></PrivateRoute> },
  
];



export default routes;