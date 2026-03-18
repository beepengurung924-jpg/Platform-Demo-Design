
import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImage from "../../assets/hero-apartment.png";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Elevate Your Living Experience</h1>
          <p className="hero-desc">
            Experience the future of apartment living. Seamless management, automated services, and a community designed around your lifestyle.
          </p>
          <div className="hero-buttons">
            <Link href="/listings">
              <button className="btn btn-primary">Explore Residences</button>
            </Link>
            <button className="btn btn-outline">Schedule a Tour</button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          <img src={heroImage} alt="Luxury Apartment" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
