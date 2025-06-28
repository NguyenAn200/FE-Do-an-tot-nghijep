import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loadDepartments } from '../../store/slices/departmentSlice';
import DepartmentTable from '../components/DepartmentTable';

export default function DepartmentListPage(){
  const dispatch=useDispatch();
  const { list, loading, error } = useSelector(s=>s.department);
  useEffect(()=>{ dispatch(loadDepartments()); },[dispatch]);
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error: {error}</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách Phòng ban</h1>
      <DepartmentTable data={list} />
    </div>
  );
}