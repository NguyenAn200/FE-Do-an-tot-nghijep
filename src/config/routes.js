import AdvanceSalaryListPage   from '../features/advance-salary/pages/AdvanceSalaryListPage';
import AdvanceSalaryFormPage   from '../features/advance-salary/pages/AdvanceSalaryFormPage';
import AdvanceSalaryDetailPage from '../features/advance-salary/pages/AdvanceSalaryDetailPage';

const routes = [
  // ... các route khác
  { path: '/advance-salaries',        element: <PrivateRoute><AdvanceSalaryListPage/></PrivateRoute> },
  { path: '/advance-salaries/new',    element: <PrivateRoute><AdvanceSalaryFormPage/></PrivateRoute> },
  { path: '/advance-salaries/:id',    element: <PrivateRoute><AdvanceSalaryDetailPage/></PrivateRoute> },
];

export default routes;
