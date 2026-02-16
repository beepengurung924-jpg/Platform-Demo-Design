import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bed, Bath, Move } from "lucide-react";
import apt1 from "@/assets/apartment-1_1.jpg";
import apt2 from "@/assets/apartment-1_2.jpg";
import apt3 from "@/assets/apartment-1_3.jpg";

const apartments = [
  {
    image: apt1,
    title: "The Penthouse Suite",
    price: "$4,200/mo",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    tag: "Available Now"
  },
  {
    image: apt2,
    title: "Urban Loft",
    price: "$2,800/mo",
    beds: 1,
    baths: 1,
    sqft: 950,
    tag: "Few Units Left"
  },
  {
    image: apt3,
    title: "Garden Residence",
    price: "$3,400/mo",
    beds: 2,
    baths: 2,
    sqft: 1200,
    tag: "Newly Renovated"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Curated Residences
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover a collection of homes designed with intention, featuring premium finishes and thoughtful layouts.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 group">
            View All Listings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={apt.image} 
                  alt={apt.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground backdrop-blur-sm shadow-sm border-none hover:bg-white">
                    {apt.tag}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="w-full bg-white text-black hover:bg-white/90 border-none">
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-1">{apt.title}</h3>
                    <p className="text-primary font-semibold">{apt.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{apt.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    <span>{apt.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Move className="w-4 h-4" />
                    <span>{apt.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <Button variant="outline" className="w-full">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
