import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserById } from '../../store/slices/userSlice';
import { useParams } from 'react-router-dom';

export default function UserDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(s=>s.user);

  useEffect(() => { dispatch(loadUserById(id)); }, [dispatch, id]);
  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;
  if (!current) return <div>Not found</div>;

  return (
    <div className="p-4 space-y-2">
      <h1 className="text-2xl font-bold">User #{current.userId}</h1>
      <div><strong>Username:</strong> {current.username}</div>
      <div><strong>Email:</strong>    {current.email}</div>
      <div><strong>Role:</strong>     {current.role}</div>
      <div><strong>Active:</strong>   {current.active?'Yes':'No'}</div>
    </div>
  );
}
