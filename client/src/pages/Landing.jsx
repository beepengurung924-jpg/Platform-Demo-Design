
import { motion } from "framer-motion";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Showcase } from "../components/landing/Showcase";
import { Testimonials } from "../components/landing/Testimonials";
import { Footer } from "../components/landing/Footer";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
