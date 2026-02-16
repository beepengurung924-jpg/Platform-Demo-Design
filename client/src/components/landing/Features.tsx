import { motion } from "framer-motion";
import { 
  Building2, 
  Key, 
  CreditCard, 
  FileText 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Building2,
    title: "Smart Listings",
    description: "Browse available units with real-time availability, 3D tours, and detailed amenities lists."
  },
  {
    icon: Key,
    title: "Tenant Portal",
    description: "Manage your lease, submit maintenance requests, and access community amenities instantly."
  },
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Secure, automated rent processing with multiple payment options and detailed history."
  },
  {
    icon: FileText,
    title: "Digital Leases",
    description: "Sign contracts electronically, store documents securely, and access them anytime."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Designed for Modern Living
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your home life, integrated into one seamless platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-card group cursor-default">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-medium text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
