import React from 'react';
import { Link } from 'react-router-dom';

export default function SalaryDetailTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead><tr>
        <th>ID</th><th>Salary ID</th><th>Description</th><th>Amount</th><th>Action</th>
      </tr></thead>
      <tbody>
        {data.map(d=> (
          <tr key={d.salaryDetailId}>
            <td>{d.salaryDetailId}</td>
            <td>{d.salaryId}</td>
            <td>{d.description}</td>
            <td>{d.amount}</td>
            <td><Link to={`/salary-details/${d.salaryDetailId}`}>Detail</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}