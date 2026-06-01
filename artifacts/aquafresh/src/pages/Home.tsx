import { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Scrollytelling } from "@/components/Scrollytelling";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PurityExperience } from "@/components/PurityExperience";
import { Features } from "@/components/Features";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-primary">
      {loading && <Preloader onComplete={handleComplete} />}
      <Cursor />
      
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Scrollytelling />
            <ProductShowcase />
            <PurityExperience />
            <Features />
            <Statistics />
            <Testimonials />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
