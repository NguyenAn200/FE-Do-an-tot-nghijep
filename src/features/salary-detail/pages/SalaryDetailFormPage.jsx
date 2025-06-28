import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDetail } from '../../store/slices/salaryDetailSlice';
import { useNavigate } from 'react-router-dom';

export default function SalaryDetailFormPage() {
  const [form,setForm]=useState({ salaryId:'', description:'', amount:'' });
  const dispatch=useDispatch(), nav=useNavigate();
  const onChange=e=>setForm({ ...form,[e.target.name]:e.target.value });
  const onSubmit=e=>{
    e.preventDefault();
    dispatch(createDetail({
      salaryId: parseInt(form.salaryId,10),
      description: form.description,
      amount: parseFloat(form.amount)
    })).unwrap().then(()=>nav('/salary-details'));
  };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md">
      {['salaryId','description','amount'].map(k=>(
        <div key={k}>
          <label>{k}</label>
          <input name={k} value={form[k]} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-2">Save</button>
    </form>
  );
}