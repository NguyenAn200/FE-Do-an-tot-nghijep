import React from 'react';
import { Link } from 'react-router-dom';

export default function DepartmentTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead><tr>
        <th>ID</th><th>Name</th><th>Active</th><th>Action</th>
      </tr></thead>
      <tbody>
        {data.map(d=>(
          <tr key={d.departmentId}>
            <td>{d.departmentId}</td>
            <td>{d.departmentName}</td>
            <td>{d.isActive?'Yes':'No'}</td>
            <td><Link to={`/departments/${d.departmentId}`}>View</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}