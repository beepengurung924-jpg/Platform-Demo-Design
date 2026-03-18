
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/">
          <span className="navbar-brand" style={{ cursor: "pointer" }}>Luxe<span className="text-accent">Stay</span></span>
        </Link>
        <div className="navbar-links">
          <Link href="/listings"><span className="navbar-link" style={{ cursor: "pointer" }}>Listings</span></Link>
          <a href="/#features" className="navbar-link">Features</a>
          <a href="/#showcase" className="navbar-link">Residences</a>
        </div>
        <div>
          <button className="btn btn-ghost">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
