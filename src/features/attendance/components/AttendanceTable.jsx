import React from 'react';
import { Link } from 'react-router-dom';

export default function AttendanceTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead><tr>
        <th>ID</th>
        <th>Emp ID</th>
        <th>Date</th>
        <th>In</th>
        <th>Out</th>
        <th>Action</th>
      </tr></thead>
      <tbody>
        {data.map(a=>(
          <tr key={a.attendanceId}>
            <td>{a.attendanceId}</td>
            <td>{a.employeeId}</td>
            <td>{new Date(a.workDate).toLocaleDateString()}</td>
            <td>{a.checkIn}</td>
            <td>{a.checkOut}</td>
            <td><Link to={`/attendances/${a.attendanceId}`}>Detail</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}