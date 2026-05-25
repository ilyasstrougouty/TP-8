export default function Profile() {
  const userName = localStorage.getItem('userName') || 'User';
  
  return (
    <div className="card">
      <h2>Your Profile</h2>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', alignItems: 'center' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3>Hello, {userName}</h3>
          <p style={{ color: 'var(--text-muted)' }}>You are securely logged into your account.</p>
        </div>
      </div>
    </div>
  );
}
