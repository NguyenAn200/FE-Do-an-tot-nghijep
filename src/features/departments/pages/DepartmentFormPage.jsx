import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDepartment } from '../../store/slices/departmentSlice';
import { useNavigate } from 'react-router-dom';

export default function DepartmentFormPage(){
  const [name,setName]=useState('');
  const dispatch=useDispatch(); const nav=useNavigate();
  const onSubmit=e=>{
    e.preventDefault();
    dispatch(addDepartment({ departmentName:name }))
      .unwrap()
      .then(()=>nav('/departments'));
  };
  return (
    <form onSubmit={onSubmit} className="p-4 max-w-md space-y-4">
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={e=>setName(e.target.value)}
          required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create</button>
    </form>
  );
}