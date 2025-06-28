import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSal } from '../../store/slices/salarySlice';
import { useNavigate } from 'react-router-dom';

export default function SalaryFormPage() {
  const [form, setForm] = useState({ employeeId: '', month: '', year: '' });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    dispatch(createSal(form)).unwrap().then(() => nav('/salaries'));
  };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md">
      {['employeeId','month','year'].map(key => (
        <div key={key}>
          <label>{key}</label>
          <input
            name={key}
            value={form[key]}
            onChange={onChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-2">Save</button>
    </form>
  );
}