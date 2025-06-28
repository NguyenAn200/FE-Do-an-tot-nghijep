import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees } from '../../store/slices/employeeSlice';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.employee);

  useEffect(() => { dispatch(loadEmployees()); }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nhân viên</h1>
      <EmployeeTable data={list} />
    </div>
  );
}