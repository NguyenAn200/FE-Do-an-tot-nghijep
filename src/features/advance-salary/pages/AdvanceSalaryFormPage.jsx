import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvance } from '../../store/slices/advanceSalarySlice';
import { useNavigate } from 'react-router-dom';

export default function AdvanceSalaryFormPage() {
  const [form, setForm] = useState({ employeeId: '', amount: '', reason: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addAdvance({
      employeeId: parseInt(form.employeeId, 10),
      amount: parseFloat(form.amount),
      reason: form.reason
    }))
    .unwrap()
    .then(() => navigate('/advance-salaries'))
    .catch(err => console.error(err));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Tạo yêu cầu tạm ứng</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block">Employee ID</label>
          <input
            type="number"
            name="employeeId"
            value={form.employeeId}
            onChange={onChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={onChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={onChange}
            className="w-full border p-2 rounded"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}