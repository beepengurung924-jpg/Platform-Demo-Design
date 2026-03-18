
import { motion } from "framer-motion";
import apt1 from "../../assets/apartment-1_1.jpg";
import apt2 from "../../assets/apartment-1_2.jpg";

export function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="container">
        <h2 className="section-title">Featured Residences</h2>
        <div className="grid-3">
          <div className="card">
            <div className="listing-image-container">
              <img src={apt1} alt="Penthouse" className="listing-image" />
              <div className="listing-badges">
                <span className="badge badge-white">Premium</span>
              </div>
            </div>
            <div className="card-content">
              <h3>The Penthouse Suite</h3>
              <p className="text-muted mb-4">Downtown, Heights District</p>
              <div className="listing-price-row">
                <span className="listing-price">$4,200</span>
                <span className="text-muted">/mo</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="listing-image-container">
              <img src={apt2} alt="Urban Loft" className="listing-image" />
              <div className="listing-badges">
                <span className="badge badge-white">Modern</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Urban Loft</h3>
              <p className="text-muted mb-4">East Side, Industrial Park</p>
              <div className="listing-price-row">
                <span className="listing-price">$2,800</span>
                <span className="text-muted">/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
