import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdvance } from '../../store/slices/advanceSalarySlice';
import { useParams } from 'react-router-dom';

export default function AdvanceSalaryDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(state => state.advanceSalary);

  useEffect(() => {
    dispatch(loadAdvance(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;
  if (!current) return <div>Advance not found</div>;

  return (
    <div className="p-4 max-w-lg mx-auto space-y-2">
      <h1 className="text-2xl font-bold">Chi tiết yêu cầu #{current.advanceSalaryId}</h1>
      <div><strong>Employee ID:</strong> {current.employeeId}</div>
      <div><strong>Amount:</strong> {current.amount}</div>
      <div><strong>Reason:</strong> {current.reason}</div>
      <div>
        <strong>Request Date:</strong> {new Date(current.requestDate).toLocaleString()}
      </div>
    </div>
  );
}