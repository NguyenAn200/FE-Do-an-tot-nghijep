import React from 'react';
import { Link } from 'react-router-dom';

export default function PositionTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>ID</th><th>Tên chức vụ</th><th>Phòng ban</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(pos => (
          <tr key={pos.positionId}>
            <td>{pos.positionId}</td>
            <td>{pos.positionName}</td>
            <td>{pos.departmentName}</td>
            <td>
              <Link to={`/positions/${pos.positionId}`}>Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}