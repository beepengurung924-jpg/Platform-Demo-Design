import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="/" className="text-2xl font-serif font-bold text-foreground tracking-tight mb-6 block">
              Luxe<span className="text-primary">Stay</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Redefining urban living with sophisticated spaces and seamless management technology.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 rounded-full w-10 h-10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 rounded-full w-10 h-10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 rounded-full w-10 h-10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary hover:bg-primary/10 rounded-full w-10 h-10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Properties</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Neighborhood</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Residents</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tenant Portal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pay Rent</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Maintenance Request</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Refer a Friend</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Innovation Blvd, Suite 400<br/>San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>leasing@luxestay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 LuxeStay Management. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
