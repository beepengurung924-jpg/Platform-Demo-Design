
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
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>${listing.price} <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span></div>
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
