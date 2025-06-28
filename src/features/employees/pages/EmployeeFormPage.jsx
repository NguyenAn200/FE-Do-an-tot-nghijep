import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createEmp } from '../../store/slices/employeeSlice';
import { fetchDepartments } from '../../services/departmentService';
import { fetchPositions } from '../../services/positionService';
import { useNavigate } from 'react-router-dom';

export default function EmployeeFormPage() {
  const [form, setForm] = useState({ employeeCode:'', fullName:'', departmentId:'', positionId:'' });
  const [deps, setDeps] = useState([]);
  const [poses, setPoses] = useState([]);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => { fetchDepartments().then(setDeps); fetchPositions().then(setPoses); }, []);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => { e.preventDefault(); dispatch(createEmp(form)).unwrap().then(() => nav('/employees')); };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md">
      {['employeeCode','fullName'].map(key => (
        <div key={key}>
          <label>{key}</label>
          <input name={key} value={form[key]} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
      ))}
      <div>
        <label>Department</label>
        <select name="departmentId" value={form.departmentId} onChange={onChange} required>
          <option value="">Select</option>
          {deps.map(d => <option key={d.departmentId} value={d.departmentId}>{d.departmentName}</option>)}
        </select>
      </div>
      <div>
        <label>Position</label>
        <select name="positionId" value={form.positionId} onChange={onChange} required>
          <option value="">Select</option>
          {poses.map(p => <option key={p.positionId} value={p.positionId}>{p.positionName}</option>)}
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2">Save</button>
    </form>


  );
}
