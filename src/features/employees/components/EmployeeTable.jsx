import React from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>ID</th><th>Code</th><th>Họ tên</th><th>Phòng ban</th><th>Chức vụ</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(emp => (
          <tr key={emp.employeeId}>
            <td>{emp.employeeId}</td>
            <td>{emp.employeeCode}</td>
            <td>{emp.fullName}</td>
            <td>{emp.departmentName}</td>
            <td>{emp.positionName}</td>
            <td>
              <Link to={`/employees/${emp.employeeId}`}>Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}