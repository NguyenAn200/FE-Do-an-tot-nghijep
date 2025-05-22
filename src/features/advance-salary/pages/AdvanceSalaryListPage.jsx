import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdvances } from '../advanceSalarySlice';
import AdvanceSalaryTable from '../components/AdvanceSalaryTable';

export default function AdvanceSalaryListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.advanceSalary);

  useEffect(() => { dispatch(loadAdvances()); }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Đơn tạm ứng lương</h1>
      <AdvanceSalaryTable data={list} />
    </div>
  );
}