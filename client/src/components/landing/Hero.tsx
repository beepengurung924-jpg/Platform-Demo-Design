import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-apartment.png"; // Assuming generated image

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with slight gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img 
          src={heroImage} 
          alt="Modern Apartment Building" 
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Premium Property Management
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Elevate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
              Living Experience
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Experience the future of apartment living. Seamless management, automated services, and a community designed around your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/listings">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 text-base px-8 h-12 rounded-full transition-all hover:-translate-y-1">
                Explore Residences
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-foreground/10 hover:bg-foreground/5 text-foreground h-12 px-8 rounded-full">
              Schedule a Tour
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Smart Access
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Premium Amenities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
