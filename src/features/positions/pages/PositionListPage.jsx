import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPositions } from '../../store/slices/positionSlice';
import PositionTable from '../components/PositionTable';

export default function PositionListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.position);

  useEffect(() => { dispatch(loadPositions()); }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chức vụ</h1>
      <PositionTable data={list} />
    </div>
  );
}