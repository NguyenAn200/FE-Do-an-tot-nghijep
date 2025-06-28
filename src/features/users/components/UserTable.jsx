import React from 'react';
import { Link } from 'react-router-dom';

export default function UserTable({ data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>ID</th><th>Username</th><th>Email</th><th>Role</th><th>Active</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(u=>(
          <tr key={u.userId}>
            <td>{u.userId}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>{u.active?'Yes':'No'}</td>
            <td>
              <Link to={`/users/${u.userId}`}>Detail</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
