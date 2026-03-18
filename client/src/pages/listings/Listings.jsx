
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
              <Link href={`/listings/${item.id}`}>
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
                        <div className="listing-price">${item.price}</div>
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
