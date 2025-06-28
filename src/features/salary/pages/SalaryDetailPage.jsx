import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSalaryById } from '../../store/slices/salarySlice';
import { useParams } from 'react-router-dom';

export default function SalaryDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(state => state.salary);

  useEffect(() => { dispatch(loadSalaryById(id)); }, [dispatch, id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!current) return <div>Not found</div>;

  return (
    <div className="p-4">
      <h1>Salary #{current.salaryId}</h1>
      <div>Employee: {current.employeeName}</div>
      <div>Period: {current.month}/{current.year}</div>
      <div>Total Gross: {current.totalGross}</div>
      <div>Total Net: {current.totalNet}</div>
    </div>
  );
}
