
export function Footer() {
  return (
    <footer style={{ padding: '48px 0', backgroundColor: 'var(--text-primary)', color: 'white', marginTop: '64px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="navbar-brand" style={{ color: 'white' }}>Luxe<span className="text-accent">Stay</span></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>© 2026 LuxeStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
