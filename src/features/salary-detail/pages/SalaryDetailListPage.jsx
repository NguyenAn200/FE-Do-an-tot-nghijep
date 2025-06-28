import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSalaryDetails } from '../../store/slices/salaryDetailSlice';
import SalaryDetailTable from '../components/SalaryDetailTable';

export default function SalaryDetailListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(s=>s.salaryDetail);

  useEffect(() => { dispatch(loadSalaryDetails()); }, [dispatch]);
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chi tiết Lương</h1>
      <SalaryDetailTable data={list} />
    </div>
  );
}