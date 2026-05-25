import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid credentials or server error.');
    }
  };

  return (
    <div className="card" style={{ maxWidth: 400, margin: '0 auto', marginTop: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>
      {error && <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', padding: '1rem', borderRadius: 8, marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="name@example.com" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
        </div>
        <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Sign In</button>
      </form>
    </div>
  );
}
