import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createAttend } from '../../store/slices/attendanceSlice';
import { useNavigate } from 'react-router-dom';

export default function AttendanceFormPage() {
  const [f,setF] = useState({employeeId:'', workDate:'', checkIn:'', checkOut:''});
  const d=useDispatch(), nav=useNavigate();
  const onCh=e=>setF({...f,[e.target.name]:e.target.value});
  const onSub=e=>{ e.preventDefault(); d(createAttend(f)).unwrap().then(()=>nav('/attendances')); };
  return (
    <form onSubmit={onSub} className="p-4 space-y-4 max-w-md">
      {['employeeId','workDate','checkIn','checkOut'].map(k=>(
        <div key={k}>
          <label>{k}</label>
          <input name={k} value={f[k]} onChange={onCh} required className="w-full border p-2 rounded" />
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-2">Save</button>
    </form>
  );
}