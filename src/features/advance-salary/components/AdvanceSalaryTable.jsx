import React from 'react';
import { Link } from 'react-router-dom';

export default function AdvanceSalaryTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>ID</th><th>Employee ID</th><th>Amount</th>
          <th>Reason</th><th>Date</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.advanceSalaryId}>
            <td>{item.advanceSalaryId}</td>
            <td>{item.employeeId}</td>
            <td>{item.amount}</td>
            <td>{item.reason}</td>
            <td>{new Date(item.requestDate).toLocaleDateString()}</td>
            <td>
              <Link to={`/advance-salaries/${item.advanceSalaryId}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}