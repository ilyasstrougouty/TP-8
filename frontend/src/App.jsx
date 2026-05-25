import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div className="app-container">
        <nav className="nav">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "active" : ""}>Profile</NavLink>
          {!isAuthenticated && <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>Login</NavLink>}
          {isAuthenticated && (
            <a href="#" onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}>Logout</a>
          )}
        </nav>
        
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
