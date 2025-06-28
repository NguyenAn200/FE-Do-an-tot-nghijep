import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loadSalaryDetailById } from '../../store/slices/salaryDetailSlice';
import { useParams } from 'react-router-dom';

export default function SalaryDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(s=>s.salaryDetail);

  useEffect(()=>{ dispatch(loadSalaryDetailById(id)); }, [dispatch,id]);
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error: {error}</div>;
  if(!current) return <div>Not found</div>;

  return (
    <div className="p-4">
      <h1>Detail #{current.salaryDetailId}</h1>
      <div>Salary ID: {current.salaryId}</div>
      <div>Description: {current.description}</div>
      <div>Amount: {current.amount}</div>
    </div>
  );
}