
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-card">
      <div className="container">
        <h2 className="section-title">Resident Experiences</h2>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="text-lg mb-8" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            "Living here has been an absolute dream. The management team is incredibly responsive, and the amenities are truly world-class. It's more than an apartment, it's a community."
          </p>
          <div style={{ fontWeight: 'bold' }}>- Sarah Jenkins, Resident</div>
        </div>
      </div>
    </section>
  );
}
