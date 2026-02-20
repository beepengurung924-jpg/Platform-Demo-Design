import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  Bath, 
  Move, 
  MapPin, 
  Check, 
  ChevronLeft, 
  Calendar, 
  ShieldCheck, 
  Zap,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "wouter";
import apt1 from "@/assets/apartment-1_1.jpg";
import apt2 from "@/assets/apartment-1_2.jpg";
import apt3 from "@/assets/apartment-1_3.jpg";

const listings = [
  {
    id: 1,
    images: [apt1, apt2, apt3],
    title: "The Penthouse Suite",
    location: "123 Skyview Terrace, Heights District",
    price: 4200,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    tag: "Premium",
    description: "Experience unparalleled luxury in this stunning penthouse suite. Featuring floor-to-ceiling windows with panoramic city views, a private terrace, and state-of-the-art appliances. Perfect for those who appreciate the finer things in life.",
    amenities: ["Smart Home System", "Private Balcony", "Chef's Kitchen", "Walk-in Closets", "Wine Cellar", "High-speed Fiber"],
    buildingFeatures: ["24/7 Concierge", "Rooftop Lounge", "Fitness Center", "Secure Parking", "Pet Spa"]
  },
  {
    id: 2,
    images: [apt2, apt1, apt3],
    title: "Urban Loft",
    location: "456 Factory Way, Industrial Park",
    price: 2800,
    beds: 1,
    baths: 1,
    sqft: 950,
    tag: "Modern",
    description: "Authentic industrial loft living with exposed brick, timber beams, and soaring ceilings. This open-concept space is filled with natural light and features modern industrial finishes throughout.",
    amenities: ["Exposed Brick", "Polished Concrete Floors", "Industrial Lighting", "Large Windows", "Modern Appliances"],
    buildingFeatures: ["Art Gallery Lobby", "Bike Storage", "Community Garden", "Freight Elevator"]
  }
];

export default function ListingDetail() {
  const [match, params] = useRoute("/listings/:id");
  const listingId = params?.id ? parseInt(params.id) : null;
  const listing = listings.find(l => l.id === listingId) || listings[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/listings">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Listings
            </button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Images and Details */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-4 h-[500px]"
              >
                <div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden shadow-lg">
                  <img src={listing.images[0]} alt={listing.title} className="w-full h-full object-cover" />
                </div>
                <div className="hidden md:grid grid-rows-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={listing.images[1]} alt={listing.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={listing.images[2]} alt={listing.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/10 text-primary border-none text-sm px-3 py-1 uppercase tracking-wider font-bold">
                      {listing.tag}
                    </Badge>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Verified Property
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{listing.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground text-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    {listing.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 py-6 border-y border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary">
                      <Bed className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                      <p className="text-lg font-bold">{listing.beds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary">
                      <Bath className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                      <p className="text-lg font-bold">{listing.baths}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary">
                      <Move className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Square Feet</p>
                      <p className="text-lg font-bold">{listing.sqft}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold">About this home</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {listing.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Interior Amenities
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {listing.amenities.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Building Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {listing.buildingFeatures.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <Card className="border-border/40 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary p-6 text-primary-foreground">
                      <p className="text-sm opacity-80 mb-1">Monthly Rent</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${listing.price}</span>
                        <span className="text-lg opacity-80">/mo</span>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                          Schedule a Tour
                        </Button>
                        <Button variant="outline" className="w-full h-12 text-lg">
                          Apply Now
                        </Button>
                      </div>

                      <div className="pt-6 border-t border-border/40 space-y-4">
                        <h4 className="font-bold">Contact Leasing Agent</h4>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Agent" />
                          </div>
                          <div>
                            <p className="font-bold">Felix Thompson</p>
                            <p className="text-sm text-muted-foreground">Senior Leasing Manager</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="sm" className="justify-start gap-3 text-muted-foreground hover:text-primary">
                            <Phone className="w-4 h-4" />
                            +1 (555) 012-3456
                          </Button>
                          <Button variant="ghost" size="sm" className="justify-start gap-3 text-muted-foreground hover:text-primary">
                            <Mail className="w-4 h-4" />
                            felix@luxestay.com
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-xl space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Next Available Tour</p>
                        <div className="flex items-center gap-2 text-primary">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium text-sm">Tomorrow, Feb 21 at 10:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
