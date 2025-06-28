import React from 'react';
import { Link } from 'react-router-dom';

export default function SalaryTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>ID</th><th>Nhân viên</th><th>Tháng</th><th>Tổng lương</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(s => (
          <tr key={s.salaryId}>
            <td>{s.salaryId}</td>
            <td>{s.employeeName}</td>
            <td>{s.month}</td>
            <td>{s.totalAmount}</td>
            <td><Link to={`/salaries/${s.salaryId}`}>Chi tiết</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}