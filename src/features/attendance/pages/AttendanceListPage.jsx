import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAttendances } from '../../store/slices/attendanceSlice';
import AttendanceTable from '../components/AttendanceTable';

export default function AttendanceListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(s=>s.attendance);

  useEffect(()=>{ dispatch(loadAttendances()); },[dispatch]);
  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chấm công</h1>
      <AttendanceTable data={list}/>
    </div>
  );
}