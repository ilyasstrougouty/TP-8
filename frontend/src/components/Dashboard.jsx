import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <h2>Dashboard Overview</h2>
      <p>Welcome to the Full-Stack application dashboard.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Registered Users</h3>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          <ul className="user-list">
            {users.map((u, i) => (
              <li key={i} className="user-item">
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {u.name ? u.name.charAt(0).toUpperCase() : u.email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{u.name || 'Anonymous User'}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{u.email}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>No users found or database not connected.</p>
        )}
      </div>
    </div>
  );
}
