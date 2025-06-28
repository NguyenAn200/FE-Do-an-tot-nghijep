import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPos } from '../../store/slices/positionSlice';
import { useNavigate } from 'react-router-dom';

export default function PositionFormPage() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmit = e => { e.preventDefault(); dispatch(createPos({ positionName:name })).unwrap().then(()=>nav('/positions')); };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md">
      <div>
        <label>Position Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required className="w-full border p-2 rounded" />
      </div>
      <button className="bg-green-500 text-white px-4 py-2">Save</button>
    </form>
  );
}