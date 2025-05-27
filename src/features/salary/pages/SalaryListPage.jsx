import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSalaries } from '../../store/slices/salarySlice';
import SalaryTable from '../components/SalaryTable';

export default function SalaryListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.salary);

  useEffect(() => { dispatch(loadSalaries()); }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bảng lương</h1>
      <SalaryTable data={list} />
    </div>
  );
}