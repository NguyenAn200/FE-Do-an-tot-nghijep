import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { loadDeptById } from '../../store/slices/departmentSlice';
import { useParams } from 'react-router-dom';

export default function DepartmentDetailPage(){
  const {id}=useParams(); const dispatch=useDispatch();
  const { current, loading, error } = useSelector(s=>s.department);
  useEffect(()=>{ dispatch(loadDeptById(id)); },[dispatch,id]);
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error: {error}</div>;
  if(!current) return <div>Not found</div>;
  return (
    <div className="p-4 space-y-2">
      <h1 className="text-2xl font-bold">Phòng ban #{current.departmentId}</h1>
      <div><strong>Name:</strong> {current.departmentName}</div>
      <div><strong>Active:</strong> {current.isActive?'Yes':'No'}</div>
    </div>
  );
}