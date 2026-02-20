import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  SlidersHorizontal, 
  Bed, 
  Bath, 
  Move, 
  MapPin,
  Star,
  Wifi,
  Car,
  Waves
} from "lucide-react";
import apt1 from "@/assets/apartment-1_1.jpg";
import apt2 from "@/assets/apartment-1_2.jpg";
import apt3 from "@/assets/apartment-1_3.jpg";

const listings = [
  {
    id: 1,
    image: apt1,
    title: "The Penthouse Suite",
    location: "Downtown, Heights District",
    price: 4200,
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    tag: "Premium",
    rating: 4.9,
    amenities: ["Wifi", "Parking", "Pool"]
  },
  {
    id: 2,
    image: apt2,
    title: "Urban Loft",
    location: "East Side, Industrial Park",
    price: 2800,
    beds: 1,
    baths: 1,
    sqft: 950,
    tag: "Modern",
    rating: 4.7,
    amenities: ["Wifi", "Gym"]
  },
  {
    id: 3,
    image: apt3,
    title: "Garden Residence",
    location: "West End, Green Valley",
    price: 3400,
    beds: 2,
    baths: 2,
    sqft: 1200,
    tag: "Family",
    rating: 4.8,
    amenities: ["Parking", "Garden"]
  },
  {
    id: 4,
    image: apt1,
    title: "Skyline Studio",
    location: "Central Business District",
    price: 2100,
    beds: 0,
    baths: 1,
    sqft: 600,
    tag: "Compact",
    rating: 4.5,
    amenities: ["Wifi", "Concierge"]
  }
];

export default function Listings() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Available Residences</h1>
              <p className="text-muted-foreground">Find your perfect home from our curated selection of premium properties.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by location or name..." 
                  className="pl-10 h-11 bg-card border-border/40 focus:ring-primary/20"
                />
              </div>
              <Button variant="outline" className="h-11 gap-2 border-border/40">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {listings.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-border/40 hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-none">
                        {item.tag}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs font-bold">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        {item.rating}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold font-serif text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/40">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-foreground">${item.price}</span>
                        <span className="text-xs text-muted-foreground">per month</span>
                      </div>
                      <div className="flex gap-2">
                        {item.amenities.includes("Wifi") && <Wifi className="w-4 h-4 text-muted-foreground/60" />}
                        {item.amenities.includes("Parking") && <Car className="w-4 h-4 text-muted-foreground/60" />}
                        {item.amenities.includes("Pool") && <Waves className="w-4 h-4 text-muted-foreground/60" />}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{item.beds} BR</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{item.baths} BA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Move className="w-4 h-4" />
                        <span>{item.sqft} sqft</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-primary/5 border-primary/20 text-primary">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
