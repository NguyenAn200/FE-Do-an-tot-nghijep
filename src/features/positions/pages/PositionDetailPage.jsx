import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosById } from '../../store/slices/positionSlice';
import { useParams } from 'react-router-dom';

export default function PositionDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(state => state.position);

  useEffect(() => { dispatch(loadPosById(id)); }, [dispatch,id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!current) return <div>Not found</div>;

  return (
    <div className="p-4">
      <h1>Position #{current.positionId}</h1>
      <div>Name: {current.positionName}</div>
      <div>Active: {current.isActive ? 'Yes' : 'No'}</div>
    </div>
  );
}