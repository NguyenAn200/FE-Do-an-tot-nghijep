import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../store/slices/userSlice';
import UserTable from '../components/UserTable';

export default function UserListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(s=>s.user);

  useEffect(() => { dispatch(loadUsers()); }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý Users</h1>
      <UserTable data={list} />
    </div>
  );
}

