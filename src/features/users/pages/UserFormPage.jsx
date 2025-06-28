import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUsr, updateUsr } from '../../store/slices/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { loadUserById } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

export default function UserFormPage() {
  const { id } = useParams();
  const editMode = Boolean(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current } = useSelector(s=>s.user);

  const [form, setForm] = useState({ username:'', email:'', role:'USER' });

  useEffect(() => {
    if (editMode) dispatch(loadUserById(id)).then(r=> setForm(r.payload));
  }, [dispatch, editMode, id]);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    const action = editMode
      ? updateUsr({ id: form.userId, data: form })
      : createUsr(form);
    dispatch(action).unwrap().then(()=> navigate('/users'));
  };

  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4 max-w-md">
      {['username','email','role'].map(k=>(
        <div key={k}>
          <label className="block">{k}</label>
          <input
            name={k}
            value={form[k]||''}
            onChange={onChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      ))}
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        {editMode ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

