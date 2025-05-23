import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { loadAttendanceById } from '../../store/slices/attendanceSlice';
import { useParams } from 'react-router-dom';

export default function AttendanceDetailPage() {
  const { id } = useParams();
  const d = useDispatch();
  const { current, loading, error } = useSelector(s=>s.attendance);
  useEffect(() => { d(loadAttendanceById(id)); },[d,id]);
  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error}</div>;
  if(!current) return <div>Not found</div>;
  return (
    <div className="p-4">
      <h1>Attendance #{current.attendanceId}</h1>
      <div>Emp: {current.employeeId}</div>
      <div>Date: {current.workDate}</div>
      <div>In: {current.checkIn}</div>
      <div>Out:{current.checkOut}</div>
    </div>
  );
}