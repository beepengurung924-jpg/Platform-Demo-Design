const fs = require('fs');
const path = require('path');

function rmDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        rmDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

// 1. Delete all ts/tsx files in client/src
function cleanSrc(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        if (file === 'assets') return; // Keep assets
        cleanSrc(curPath);
      } else {
        if (curPath.endsWith('.ts') || curPath.endsWith('.tsx')) {
          fs.unlinkSync(curPath);
        }
      }
    });
  }
}

cleanSrc(path.join(__dirname, 'client/src'));
rmDir(path.join(__dirname, 'client/src/components/ui'));

// Helper to write files ensuring directory exists
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
}

// Write main.css
writeFile('client/src/styles/main.css', `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');

:root {
  --bg-primary: #F8F9FA;
  --text-primary: #1B263B;
  --accent: #E07A5F;
  --card-bg: #FFFFFF;
  --border-color: #E2E8F0;
  --text-muted: #64748B;
  
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  margin-top: 0;
  color: var(--text-primary);
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Utilities */
.text-accent { color: var(--accent); }
.text-muted { color: var(--text-muted); }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  gap: 8px;
  font-family: inherit;
}
.btn-primary {
  background-color: var(--accent);
  color: white;
  box-shadow: 0 4px 14px rgba(224, 122, 95, 0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(224, 122, 95, 0.4);
}
.btn-outline {
  background-color: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}
.btn-outline:hover {
  background-color: rgba(27, 38, 59, 0.05);
}
.btn-ghost {
  background-color: transparent;
  color: var(--text-primary);
}
.btn-ghost:hover {
  background-color: rgba(27, 38, 59, 0.05);
}

/* Inputs */
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}
.input:focus {
  outline: none;
  border-color: var(--accent);
}
.input-with-icon {
  padding-left: 40px;
}

/* Cards */
.card {
  background-color: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}
.card-content {
  padding: 24px;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
}
.badge-white {
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--text-primary);
}
.badge-accent {
  background-color: rgba(224, 122, 95, 0.1);
  color: var(--accent);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 50;
  border-bottom: 1px solid var(--border-color);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}
.navbar-links {
  display: flex;
  gap: 32px;
}
.navbar-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.3s ease;
}
.navbar-link:hover {
  color: var(--text-primary);
}

/* Hero */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
}
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 24px;
}
.hero-desc {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 32px;
  line-height: 1.6;
}
.hero-buttons {
  display: flex;
  gap: 16px;
}
.hero-image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1);
}
.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Sections */
.section { padding: 96px 0; }
.section-title { font-size: 2.5rem; text-align: center; margin-bottom: 64px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; }
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; }

/* Listings */
.pt-24 { padding-top: 120px; }
.pb-16 { padding-bottom: 80px; }
.listings-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; flex-wrap: wrap; gap: 24px; }
.search-bar { display: flex; gap: 12px; flex: 1; max-width: 500px; position: relative; }
.search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
.listing-image-container { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.listing-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
.card:hover .listing-image { transform: scale(1.1); }
.listing-badges { position: absolute; top: 12px; left: 12px; display: flex; gap: 8px; }
.listing-rating { position: absolute; top: 12px; right: 12px; background-color: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 4px; }
.listing-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--border-color); }
.listing-price { font-size: 1.5rem; font-weight: 700; }
.listing-stats { display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-muted); }
.stat-item { display: flex; align-items: center; gap: 4px; }

/* Detail Page */
.detail-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; }
.detail-images { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: 500px; margin-bottom: 48px; }
.detail-main-image { grid-column: 1 / 2; border-radius: 16px; overflow: hidden; }
.detail-side-images { display: grid; grid-template-rows: 1fr 1fr; gap: 16px; }
.detail-side-image { border-radius: 16px; overflow: hidden; }
.detail-image { width: 100%; height: 100%; object-fit: cover; }
.detail-stats-bar { display: flex; gap: 32px; padding: 24px 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); margin-bottom: 32px; }
.detail-stat { display: flex; align-items: center; gap: 12px; }
.detail-stat-icon { width: 48px; height: 48px; background-color: white; border: 1px solid var(--border-color); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--accent); }
.detail-sidebar { position: sticky; top: 112px; }
.sidebar-header { background-color: var(--accent); color: white; padding: 24px; }
.agent-info { display: flex; align-items: center; gap: 16px; margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border-color); }
.agent-avatar { width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background-color: var(--bg-primary); }
.agent-avatar img { width: 100%; height: 100%; }

.flex-center { display: flex; align-items: center; gap: 8px; }
.flex-col { display: flex; flex-direction: column; gap: 16px; }
.mt-8 { margin-top: 32px; }
.mb-8 { margin-bottom: 32px; }
.mb-4 { margin-bottom: 16px; }
.mb-2 { margin-bottom: 8px; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.font-bold { font-weight: 700; }
.w-full { width: 100%; }

@media (max-width: 768px) {
  .hero-container { grid-template-columns: 1fr; }
  .hero-title { font-size: 3rem; }
  .detail-grid { grid-template-columns: 1fr; }
  .detail-images { grid-template-columns: 1fr; }
  .detail-side-images { display: none; }
}
`);

// Write main.jsx
writeFile('client/src/main.jsx', `
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
`);

// Write App.jsx
writeFile('client/src/App.jsx', `
import { Switch, Route } from "wouter";
import Landing from "./pages/Landing";
import Listings from "./pages/listings/Listings";
import ListingDetail from "./pages/listings/ListingDetail";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/listings" component={Listings} />
      <Route path="/listings/:id" component={ListingDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
`);

// Write pages
writeFile('client/src/pages/not-found.jsx', `
export default function NotFound() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <a href="/" className="btn btn-primary">Return Home</a>
    </div>
  );
}
`);

writeFile('client/src/pages/Landing.jsx', `
import { motion } from "framer-motion";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Showcase } from "../components/landing/Showcase";
import { Testimonials } from "../components/landing/Testimonials";
import { Footer } from "../components/landing/Footer";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
`);

writeFile('client/src/components/landing/Navbar.jsx', `
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/">
          <a className="navbar-brand">Luxe<span className="text-accent">Stay</span></a>
        </Link>
        <div className="navbar-links">
          <Link href="/listings"><a className="navbar-link">Listings</a></Link>
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
`);

writeFile('client/src/components/landing/Hero.jsx', `
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
`);

writeFile('client/src/components/landing/Features.jsx', `
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
`);

writeFile('client/src/components/landing/Showcase.jsx', `
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
`);

writeFile('client/src/components/landing/Testimonials.jsx', `
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
`);

writeFile('client/src/components/landing/Footer.jsx', `
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
`);

writeFile('client/src/pages/listings/Listings.jsx', `
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "../../components/landing/Navbar";
import { Footer } from "../../components/landing/Footer";
import { Search, SlidersHorizontal, Bed, Bath, Move, MapPin, Star, Wifi, Car, Waves } from "lucide-react";
import apt1 from "../../assets/apartment-1_1.jpg";
import apt2 from "../../assets/apartment-1_2.jpg";
import apt3 from "../../assets/apartment-1_3.jpg";

const listings = [
  {
    id: 1, image: apt1, title: "The Penthouse Suite", location: "Downtown, Heights District",
    price: 4200, beds: 3, baths: 2.5, sqft: 1800, tag: "Premium", rating: 4.9, amenities: ["Wifi", "Parking", "Pool"]
  },
  {
    id: 2, image: apt2, title: "Urban Loft", location: "East Side, Industrial Park",
    price: 2800, beds: 1, baths: 1, sqft: 950, tag: "Modern", rating: 4.7, amenities: ["Wifi", "Gym"]
  },
  {
    id: 3, image: apt3, title: "Garden Residence", location: "West End, Green Valley",
    price: 3400, beds: 2, baths: 2, sqft: 1200, tag: "Family", rating: 4.8, amenities: ["Parking", "Garden"]
  },
  {
    id: 4, image: apt1, title: "Skyline Studio", location: "Central Business District",
    price: 2100, beds: 0, baths: 1, sqft: 600, tag: "Compact", rating: 4.5, amenities: ["Wifi", "Concierge"]
  }
];

export default function Listings() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 pb-16 container">
        <div className="listings-header">
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Available Residences</h1>
            <p className="text-muted">Find your perfect home from our curated selection of premium properties.</p>
          </div>
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" className="input input-with-icon" placeholder="Search by location or name..." />
            <button className="btn btn-outline"><SlidersHorizontal size={20} /> Filters</button>
          </div>
        </div>

        <div className="grid-4">
          {listings.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link href={\`/listings/\${item.id}\`}>
                <div className="card" style={{ cursor: 'pointer' }}>
                  <div className="listing-image-container">
                    <img src={item.image} alt={item.title} className="listing-image" />
                    <div className="listing-badges">
                      <span className="badge badge-white">{item.tag}</span>
                    </div>
                    <div className="listing-rating">
                      <Star size={12} style={{ color: 'var(--accent)', fill: 'var(--accent)' }} /> {item.rating}
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="mb-2">{item.title}</h3>
                    <div className="flex-center text-muted mb-4 text-sm">
                      <MapPin size={16} /> {item.location}
                    </div>
                    <div className="listing-price-row">
                      <div>
                        <div className="listing-price">\${item.price}</div>
                        <div className="text-sm text-muted">per month</div>
                      </div>
                    </div>
                    <div className="listing-stats">
                      <div className="stat-item"><Bed size={16} /> {item.beds} BR</div>
                      <div className="stat-item"><Bath size={16} /> {item.baths} BA</div>
                      <div className="stat-item"><Move size={16} /> {item.sqft} sqft</div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
`);

writeFile('client/src/pages/listings/ListingDetail.jsx', `
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { Navbar } from "../../components/landing/Navbar";
import { Footer } from "../../components/landing/Footer";
import { Bed, Bath, Move, MapPin, Check, ChevronLeft, Calendar, ShieldCheck, Zap, Phone, Mail } from "lucide-react";
import apt1 from "../../assets/apartment-1_1.jpg";
import apt2 from "../../assets/apartment-1_2.jpg";
import apt3 from "../../assets/apartment-1_3.jpg";

const listings = [
  {
    id: 1, images: [apt1, apt2, apt3], title: "The Penthouse Suite", location: "123 Skyview Terrace, Heights District",
    price: 4200, beds: 3, baths: 2.5, sqft: 1800, tag: "Premium",
    description: "Experience unparalleled luxury in this stunning penthouse suite. Featuring floor-to-ceiling windows with panoramic city views, a private terrace, and state-of-the-art appliances.",
    amenities: ["Smart Home System", "Private Balcony", "Chef's Kitchen", "Walk-in Closets", "Wine Cellar", "High-speed Fiber"],
    buildingFeatures: ["24/7 Concierge", "Rooftop Lounge", "Fitness Center", "Secure Parking", "Pet Spa"]
  },
  {
    id: 2, images: [apt2, apt1, apt3], title: "Urban Loft", location: "456 Factory Way, Industrial Park",
    price: 2800, beds: 1, baths: 1, sqft: 950, tag: "Modern",
    description: "Authentic industrial loft living with exposed brick, timber beams, and soaring ceilings. This open-concept space is filled with natural light.",
    amenities: ["Exposed Brick", "Polished Concrete Floors", "Industrial Lighting", "Large Windows", "Modern Appliances"],
    buildingFeatures: ["Art Gallery Lobby", "Bike Storage", "Community Garden", "Freight Elevator"]
  }
];

export default function ListingDetail() {
  const [match, params] = useRoute("/listings/:id");
  const listingId = params?.id ? parseInt(params.id) : 1;
  const listing = listings.find(l => l.id === listingId) || listings[0];

  return (
    <div>
      <Navbar />
      <main className="pt-24 pb-16 container">
        <Link href="/listings">
          <button className="btn btn-ghost mb-8" style={{ paddingLeft: 0 }}><ChevronLeft size={20} /> Back to Listings</button>
        </Link>
        
        <div className="detail-grid">
          <div>
            <div className="detail-images">
              <div className="detail-main-image">
                <img src={listing.images[0]} alt="main" className="detail-image" />
              </div>
              <div className="detail-side-images">
                <div className="detail-side-image"><img src={listing.images[1]} alt="side 1" className="detail-image" /></div>
                <div className="detail-side-image"><img src={listing.images[2]} alt="side 2" className="detail-image" /></div>
              </div>
            </div>

            <div className="mb-4 flex-center">
              <span className="badge badge-accent">{listing.tag}</span>
              <span className="text-muted text-sm flex-center"><ShieldCheck size={16} color="green" /> Verified Property</span>
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>{listing.title}</h1>
            <div className="flex-center text-muted text-lg mb-8">
              <MapPin size={24} className="text-accent" /> {listing.location}
            </div>

            <div className="detail-stats-bar">
              <div className="detail-stat">
                <div className="detail-stat-icon"><Bed size={24} /></div>
                <div><div className="text-sm text-muted">Bedrooms</div><div className="font-bold text-lg">{listing.beds}</div></div>
              </div>
              <div className="detail-stat">
                <div className="detail-stat-icon"><Bath size={24} /></div>
                <div><div className="text-sm text-muted">Bathrooms</div><div className="font-bold text-lg">{listing.baths}</div></div>
              </div>
              <div className="detail-stat">
                <div className="detail-stat-icon"><Move size={24} /></div>
                <div><div className="text-sm text-muted">Square Feet</div><div className="font-bold text-lg">{listing.sqft}</div></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>About this home</h3>
              <p className="text-muted text-lg" style={{ lineHeight: 1.6 }}>{listing.description}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 className="flex-center mb-4"><Zap size={20} className="text-accent" /> Interior Amenities</h3>
                <div className="flex-col">
                  {listing.amenities.map((item, i) => (
                    <div key={i} className="flex-center text-muted"><Check size={16} className="text-accent" /> {item}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex-center mb-4"><ShieldCheck size={20} className="text-accent" /> Building Features</h3>
                <div className="flex-col">
                  {listing.buildingFeatures.map((item, i) => (
                    <div key={i} className="flex-center text-muted"><Check size={16} className="text-accent" /> {item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card detail-sidebar">
              <div className="sidebar-header">
                <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Monthly Rent</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>\${listing.price} <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
              </div>
              <div className="card-content">
                <div className="flex-col mb-8">
                  <button className="btn btn-primary w-full">Schedule a Tour</button>
                  <button className="btn btn-outline w-full">Apply Now</button>
                </div>
                
                <div className="agent-info">
                  <div className="agent-avatar"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Agent" /></div>
                  <div>
                    <div className="font-bold">Felix Thompson</div>
                    <div className="text-sm text-muted">Senior Leasing Manager</div>
                  </div>
                </div>
                <div className="flex-col mt-8">
                  <button className="btn btn-ghost w-full" style={{ justifyContent: 'flex-start' }}><Phone size={16} /> +1 (555) 012-3456</button>
                  <button className="btn btn-ghost w-full" style={{ justifyContent: 'flex-start' }}><Mail size={16} /> felix@luxestay.com</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`);
