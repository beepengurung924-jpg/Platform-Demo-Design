import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import tenantImg from "@/assets/tenant-testimonial.jpg";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-white/90">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>Trusted by 5,000+ Residents</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              "Living here has completely changed my perspective on what renting should feel like."
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-secondary-foreground/80 font-light leading-relaxed">
                The management team is responsive, the amenities are world-class, and the automated portal makes payments and requests effortless. It's not just an apartment, it's a lifestyle upgrade.
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="font-bold text-lg">Sarah Jenkins</h4>
                  <p className="text-sm text-secondary-foreground/60">Resident since 2023</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={tenantImg} 
                alt="Happy Tenant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Decorative Quote Icon */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <Quote className="w-10 h-10 text-white fill-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
