export default function Profile() {
  return (
    <div className="card">
      <h2>Your Profile</h2>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', alignItems: 'center' }}>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          U
        </div>
        <div>
          <h3>Authenticated User</h3>
          <p style={{ color: 'var(--text-muted)' }}>You successfully logged in and accessed a protected route.</p>
        </div>
      </div>
    </div>
  );
}
