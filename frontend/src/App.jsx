import { HashRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const userName = localStorage.getItem('userName') || 'User';

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {isAuthenticated && <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink>}
            {isAuthenticated && <NavLink to="/profile" className={({isActive}) => isActive ? "active" : ""}>Profile</NavLink>}
            {!isAuthenticated && <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>Login</NavLink>}
            {!isAuthenticated && <NavLink to="/register" className={({isActive}) => isActive ? "active" : ""}>Register</NavLink>}
          </div>
          {isAuthenticated && (
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>Hello, {userName}</span>
              <a href="#" onClick={handleLogout} style={{ color: '#ef4444', fontWeight: 600, textDecoration: 'none' }}>Logout</a>
            </div>
          )}
        </nav>
        
        <Routes>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
