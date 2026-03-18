
import { motion } from "framer-motion";
import { Search, Building, Shield } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="section bg-card">
      <div className="container">
        <h2 className="section-title">Why Choose LuxeStay</h2>
        <div className="grid-3">
          <div className="card">
            <div className="card-content">
              <div style={{ marginBottom: 16, color: 'var(--accent)' }}>
                <Search size={32} />
              </div>
              <h3 className="mb-2">Smart Discovery</h3>
              <p className="text-muted">Find your perfect home with our intelligent matching system and virtual tours.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div style={{ marginBottom: 16, color: 'var(--accent)' }}>
                <Building size={32} />
              </div>
              <h3 className="mb-2">Premium Amenities</h3>
              <p className="text-muted">Access world-class facilities and services tailored for modern luxury living.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div style={{ marginBottom: 16, color: 'var(--accent)' }}>
                <Shield size={32} />
              </div>
              <h3 className="mb-2">Secure & Seamless</h3>
              <p className="text-muted">Enjoy peace of mind with 24/7 security and seamless digital access.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
