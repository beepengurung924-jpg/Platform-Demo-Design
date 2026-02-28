import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold text-foreground tracking-tight hover:opacity-80 transition-opacity">
            Luxe<span className="text-primary">Stay</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/listings">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Listings
            </a>
          </Link>
          <a
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="/#showcase"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Residences
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-sm font-medium hidden sm:inline-flex"
          >
            Log In
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
